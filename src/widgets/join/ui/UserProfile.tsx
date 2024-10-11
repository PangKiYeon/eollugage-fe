import { getRandomColor } from '@/features'
import FlexBox from '@/shared/ui/Flexbox'
import { Avatar, ButtonMobile, TopBar } from '@eolluga/eolluga-ui'
import { useRouter } from 'next/navigation'
import useJoin from '../hooks/useJoin'

interface UserProfileProps {
  name: string
  store: string
  handlePreviousStep: () => void
}

export default function UserProfile({ name, store, handlePreviousStep }: UserProfileProps) {
  const router = useRouter()
  const { isOwner, handleNextStep } = useJoin()
  return (
    <>
      <TopBar leftIcon="chevron_left_outlined" onClickLeftIcon={handlePreviousStep} />
      <FlexBox direction="col" className="gap-spacing-04 mt-[152px]">
        <div className="text-white">
          <Avatar size="XL" backgroundColor={getRandomColor()} text={name[0]} />
        </div>
        <FlexBox direction="col" className="gap-spacing-01">
          <div className="head-02-bold">
            {name} {isOwner ? '사장님' : '직원'}
          </div>
          <div className="body-03-medium text-[#6F6F6F]">{store}</div>
        </FlexBox>
        <FlexBox direction="col" className="w-full p-spacing-04 absolute bottom-4">
          <ButtonMobile
            size="L"
            style="primary"
            state="enabled"
            type="text"
            text1={isOwner ? '프로필 생성하기' : '출근하기'}
            onClick={isOwner ? handleNextStep : () => router.push('/home')}
          />
        </FlexBox>
      </FlexBox>
    </>
  )
}
