import Footer from '@/components/footer';
import Header from '@/components/header';
import { getServerData } from '@/services/serverSideDatafetch'
import React from 'react'

interface VideoViewProps {
    params: { videoId: string };
    searchParams: { [key: string]: string };
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
            <h1>Video pllllll {params?.videoId} {shareId} {referredByType} {shareCode} {referralCode}</h1>
            <div className="wrapper">
                <Header />
 
                <main className='main wrapper-login__main header-offset'>
                    <div className="wrapper-login__content">
                        <section className='qr-entry login-section'>
                            <div className="animated-gradient-bg"></div>

                            <div className='qr-entry__inner'>
                                <div className="qr-entry__row">
<h2>Test</h2>
                                </div>
                            </div>

                        </section>
                    </div>
                </main>
                <Footer />
            </div>

        </>
    )
}

export default VideoView;