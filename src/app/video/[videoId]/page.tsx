import Footer from '@/components/footer';
import Header from '@/components/header';
import { getServerData } from '@/services/serverSideDatafetch'
import React from 'react'

interface VideoViewProps {
    params: { videoId: string };
    searchParams: { [key: string]: string };
}


const VideoView: React.FC<VideoViewProps> = async ({ params, searchParams }) => {
    const sharerId = searchParams['sharerId'] ?? ''
    const referredByType = searchParams['referredByType'] ?? ''
    const shareCode = searchParams['shareCode'] ?? ''
    const referralCode = searchParams['referralCode'] ?? ''

 


    return(
        <>
            <div className="wrapper">
                <Header />
 
                <main className='main wrapper-login__main header-offset'>
                    <div className="wrapper-login__content">
                        <section className='qr-entry login-section'>
                            <div className="animated-gradient-bg"></div>

                            <div className='qr-entry__inner'>
                                <div className="qr-entry__row">
            {/* <h1>Video pllllll  {shareId} {referredByType} {shareCode} {referralCode}</h1> */}
            <h2><strong>sharerId</strong> {sharerId}</h2>
            <h2><strong>referredByType</strong> {referredByType}</h2>
            <h2><strong>shareCode</strong> {shareCode}</h2>
            <h2><strong>referralCode</strong> {referralCode}</h2>
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