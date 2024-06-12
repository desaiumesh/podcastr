import { formatTime } from '@/lib/formatTime'
import { PodcastDetailCardProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PodcastDetailCard = ({
    imgUrl, title, views, audioDuration, podcastId
}: PodcastDetailCardProps) => {
    const router = useRouter()

    const handleViews = () => {

        router.push(`/podcasts/${podcastId}`, {
            scroll: true
        })
    }

    return (
        <div className="cursor-pointer" onClick={handleViews}>
            <figure className="grid grid-cols-5 max-sm:grid-cols-3 border-b border-black-5 py-3">
                <div className='col-span-3'>
                  <div className='flex flex-row gap-5 items-center'>
                    <Image
                        src={imgUrl}
                        width={50}
                        height={50}
                        alt={title}
                        className="aspect-square rounded-xl 2xl:size-[80px]" />
                    <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
                    </div>
                </div>
                <div className="col-span-1 mt-8 max-sm:hidden">
                    <div className='flex flex-row gap-5 items-center justify-start'>
                        <figure className="flex flex-row gap-2 items-center">
                            <Image
                                src="/icons/headphone.svg"
                                width={20}
                                height={20}
                                alt="headphone"
                            />
                            <h2 className="text-12 truncate font-normal capitalize text-white-4">{views}</h2>
                        </figure>
                    </div>
                </div>
                <div className="col-span-1 mt-8 max-sm:hidden">
                    <div className='flex gap-5 items-end justify-start'>
                        <figure className="flex gap-2 items-center">
                            <Image
                                src="/icons/watch.svg"
                                width={20}
                                height={20}
                                alt="headphone"
                            />
                            <h2 className="text-12 truncate font-normal capitalize text-white-4">{formatTime (audioDuration)}</h2>
                        </figure>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default PodcastDetailCard