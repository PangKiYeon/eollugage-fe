'use server'

import { axiosServerInstance } from '@/shared'
import axios from 'axios'

const patchCheckInWork = async (storeId: string | undefined) => {
  if (!storeId) return false
  try {
    const { data, status } = await axiosServerInstance.patch(`/v1/stores/${storeId}/work/start`)
    if (status !== 200) {
      throw new Error(data.reason)
    }
    return true
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409)
      throw new Error('이미 출근 처리되었습니다.')
    throw error
  }
}
export default patchCheckInWork