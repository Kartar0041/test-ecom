import { getServerData } from '@/services/serverSideDatafetch'
import React from 'react'

interface VideoViewProps {
    params: { videoId: string } 
    searcParams: { [key: string] : string }
}

const VideoView: React.FC<VideoViewProps> = async ({ params, searchParams }) => {
    const shareId = searchParams['shareId'] ?? ''
    const referredByType = searchParams['referredByType'] ?? ''
    const shareCode = searchParams['shareCode'] ?? ''
    const referralCode = searchParams['referralCode'] ?? ''

    const result = await getServerData('https://jsonplaceholder.typicode.com/todos/1');
    console.log('bbbb', result)


    return(
        <>
            <h1>Video pllllll {params.videoId} {shareId} {referredByType} {shareCode} {referralCode}</h1>
            
        </>
    )
}

export default VideoView;