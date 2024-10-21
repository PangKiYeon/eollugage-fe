import useAttendance from '../hooks/useAttendance'
import ViewModeToggleChip from './ViewModeToggleChip'

export default function ViewModeToggle() {
  const { type, setType } = useAttendance()
  return (
    <div className="border-4 border-[#E0E0E0] bg-[#E0E0E0] rounded-radius-03">
      <ViewModeToggleChip isActivated={type === 'weekly'} onClick={() => setType('weekly')}>
        주간
      </ViewModeToggleChip>
      <ViewModeToggleChip isActivated={type === 'monthly'} onClick={() => setType('monthly')}>
        월간
      </ViewModeToggleChip>
    </div>
  )
}
