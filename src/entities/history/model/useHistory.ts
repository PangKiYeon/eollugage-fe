import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import getHistories from '../api/getHistories'
import { PostHistory, PutHistory } from '../types/reqBody'
import putHistory from '../api/putHistory'
import postHistory from '../api/postHistory'

const useHistory = (
  storeId: string | null,
  memberId?: string | null,
  type?: 'weekly' | 'monthly',
  year?: number,
  month?: number,
  weekOfMonth?: number,
) => {
  const queryClient = useQueryClient()
  const { data: histories } = useQuery({
    queryKey: ['histories', storeId, memberId, type, year, month, weekOfMonth],
    queryFn: () => getHistories(storeId, memberId, type, year, month, weekOfMonth),
  })

  const { mutate: createHistory } = useMutation({
    mutationFn: ({
      selectedMemberId,
      reqBody,
    }: {
      selectedMemberId: string
      reqBody: PostHistory
    }) => postHistory(storeId, selectedMemberId, reqBody),
    onSuccess: (_, { selectedMemberId }) => {
      queryClient.invalidateQueries({ queryKey: ['histories', selectedMemberId], exact: false })
    },
  })

  const { mutate: updateHistory } = useMutation({
    mutationFn: ({
      selectedMemberId,
      historyId,
      reqBody,
    }: {
      selectedMemberId: string
      historyId: string
      reqBody: PutHistory
    }) => putHistory(storeId, selectedMemberId, historyId, reqBody),
    onSuccess: (_, { selectedMemberId }) => {
      queryClient.invalidateQueries({ queryKey: ['histories', selectedMemberId], exact: false })
    },
  })

  return { histories, createHistory, updateHistory }
}
export default useHistory
