'use client'

import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { Icon, Avatar } from '@eolluga/eolluga-ui'
import { storeNameAtom, userNameAtom } from '@/shared/atoms/globalAtom'
import { UserInfo } from '@/entities'
import { useEffect } from 'react'
import Link from 'next/link'

export default function MyPageWidget({
  storeId,
  userData,
  isOwner,
}: {
  storeId: string
  userData: UserInfo | undefined
  isOwner: boolean
}) {
  const router = useRouter()
  const [, setStoreName] = useAtom(storeNameAtom)
  const [, setUserName] = useAtom(userNameAtom)

  useEffect(() => {
    if (userData) {
      setStoreName(userData.storeList[0]?.name || '')
      setUserName(userData.name || '')
    }
  }, [userData, setStoreName, setUserName])

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {isOwner && (
        <main className="flex-grow">
          <div className="h-8 flex justify-end gap-4 mt-4 mr-4">
            <Link href={`/${storeId}/mypage/position`}>
              <Icon icon="id" />
            </Link>
            <Link href={`/${storeId}/mypage/setting`}>
              <Icon icon="gear" />
            </Link>
          </div>
          <div className="flex p-spacing-04 gap-spacing-01 items-center">
            <Avatar icon="account" input="text" size="M" text="" />
            <div className="ml-4">
              <h2 className="body-03-bold text-text-primary">{userData?.storeList[0].name}</h2>
              <p className="text-text-secondary body-01-bold">
                {userData?.relationList[0].position}
              </p>
            </div>
          </div>
        </main>
      )}

      {!isOwner && (
        <main className="flex-grow">
          <div className="h-[32px] flex justify-end gap-4 mt-4 mr-4">
            <Link href={`/${storeId}/mypage/setting`}>
              <Icon icon="gear" />
            </Link>
          </div>
          <div className="flex p-spacing-04 gap-spacing-01 items-center">
            <Avatar icon="account" input="text" size="M" text="" />
            <div className="ml-4">
              <h2 className="body-03-bold text-text-primary">{userData?.name}</h2>
              <p className="text-text-secondary body-01-bold">
                {userData?.relationList[0].position}
              </p>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
