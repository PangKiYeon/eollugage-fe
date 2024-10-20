import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { storeNameAtom } from '@/shared/atoms/globalAtom'
import { getStoreDetail } from '../api/getStoreDetail'
import { noticeAtom } from '../atoms/homeAtoms'

function useGetStoreDetail(stordId: string) {
  const [, setStoreName] = useAtom(storeNameAtom)
  const [, setNotice] = useAtom(noticeAtom)
  const { mutate } = useMutation({
    mutationKey: ['getStoreDetail'],
    mutationFn: () => getStoreDetail(stordId),
    onSuccess: res => {
      setStoreName(res.name)
      setNotice(res.internalNotice)
    },
  })

  return { mutate }
}

export { useGetStoreDetail }