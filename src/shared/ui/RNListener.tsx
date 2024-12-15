'use client'

import { useEffect } from 'react'
import { useLoginToken } from '@/widgets'

interface TokenResultT {
  isSuccess: boolean
  token?: string
}

type MessageTypeT = 'getLoginToken' | 'getImageUploadResult'

export default function RNListener() {
  const { onSuccessGetToken } = useLoginToken()

  const onMessageEvent = (e: MessageEvent) => {
    e.stopPropagation()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const message: { type: MessageTypeT; data: any } = JSON.parse(String(e.data))

    switch (message.type) {
      case 'getLoginToken': {
        const tokenData = message.data as TokenResultT
        if (tokenData.isSuccess && tokenData.token) onSuccessGetToken(tokenData.token)
        break
      }
      default:
    }
  }

  useEffect(() => {
    window.addEventListener('message', onMessageEvent)
    document.addEventListener('message', onMessageEvent as EventListener)

    return () => {
      window.removeEventListener('message', onMessageEvent)
      document.removeEventListener('message', onMessageEvent as EventListener)
    }
  }, [])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>
}
