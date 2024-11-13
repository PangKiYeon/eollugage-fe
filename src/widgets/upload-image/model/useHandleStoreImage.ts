'use client'

import { useAtom } from 'jotai'
import {
  imageNameAtom,
  imageToastAtom,
  isImageLoadingAtom,
  isSuccessAtom,
} from '../atoms/uploadImageAtoms'
import { UploadFailReasonT } from '../types/imageUploadType'
import { useState } from 'react'

export default function useHandleStoreImage() {
  const [, setIsLoading] = useAtom(isImageLoadingAtom)
  const [, setIsSuccess] = useAtom(isSuccessAtom)
  const [, setImageName] = useAtom(imageNameAtom)
  const [, setIsShownToast] = useAtom(imageToastAtom)

  const onSuccessImageDownload = (fileName: string | undefined) => {
    setIsSuccess(true)
    if (fileName) setImageName(fileName)
  }
  const onFailImageDownload = (failReason: UploadFailReasonT | undefined) => {
    switch (failReason) {
      case 'not-select':
        setIsLoading(false)
        setIsSuccess(undefined)
        break
      case 'presigned-url-error':
      case 'upload-fail':
        setIsSuccess(false)
        setIsLoading(false)
        setIsShownToast(true)
        break
      default:
    }
  }

  const initImageUploadStatus = () => {
    setIsSuccess(undefined)
    setIsLoading(true)
  }

  const onImageLoadComplete = () => {
    setIsLoading(false)
  }

  return {
    onSuccessImageDownload,
    onFailImageDownload,
    initImageUploadStatus,
    onImageLoadComplete,
  }
}
