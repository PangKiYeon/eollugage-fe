'use client'

import { CheckInWorkButton, CheckOutWorkButton } from '@/features'
import useAttendance from '../hooks/useAttendance'
import formatDate from '../utils/getTodayDate'

export default function AttendanceRegister() {
  const { memberId } = useAttendance()
  return (
    <div className="bg-[#F4F4F4] p-[16px] flex flex-col space-y-[12px]">
      <div className="flex flex-col space-y-1 ">
        <h3 className="body-03-bold-compact">출퇴근 등록</h3>
        <p className="body-01-medium text-[#6F6F6F]">{formatDate()}</p>
      </div>
      <div className="flex space-x-[14px] pb-[8px]">
        <CheckInWorkButton memberId={memberId} />
        <CheckOutWorkButton memberId={memberId} />
      </div>
    </div>
  )
}
