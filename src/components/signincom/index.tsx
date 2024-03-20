'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../header';
import { useRouter } from 'next/navigation';
// import QRCodeStyling from 'qr-code-styling';
import Footer from '../footer';
import { getClientData } from '@/services/interceptors';
import axios from 'axios';
import QrImage from '../../../public/img/icons/logo-pic.png';
import QRCode from "react-qr-code";

interface SignInProps {
    // env: string;
}

const SignInCom : React.FC<SignInProps> = () => {
    const router = useRouter();
    const [sessionCode, setSessionCode] = useState<string>('');
    const canvasRef = useRef(null);

   
    useEffect(() =>{
        let intervalIDNew:any = null;
        const handleGetSession = async () => {
            try {
                if(sessionCode == ''){
                    const result = await axios.post('https://auth-go.api.litit1.com/qr/session/new');
                    if (result.data.success) {
                        setSessionCode(result.data.data.session_code);
                        const id = setInterval(() => {
                            handleJwtSession(result.data.data.session_code);
                        }, 2000);
                        intervalIDNew = id;
                    }
                }
            } catch (error) {
                console.log('error', error);
            }
        };
    
        const handleJwtSession = async (sessionCode: string) => {
            if (typeof window !== 'undefined') {

            if(intervalIDNew != null){
                const resJwt = await axios.get(`https://auth-go.api.litit1.com/qr/session/jwt?code=${sessionCode}`);
            if (resJwt.data.success === true) {
                
                window.localStorage.setItem('jwt', JSON.stringify(resJwt.data.data.access_token));
                intervalIDNew = null;
                router.push('/profile');
            }
        }
    }
        }
        handleGetSession()
    
      }, [])
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

                                    <div className="qr-entry__qr">
                                        <h1 className='section-title-large'>Login to Lit.it {process.env.BASE_URL}</h1>

                                        <div className="qr-code" data-qrcode>
                                            <div className="qr-code__top">
                                                <div className="qr-code__pic" ref={canvasRef} data-qrcode-canvas>
                                                {sessionCode && 
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={sessionCode}
                                            viewBox={`0 0 256 256`}
                                        />
                                        }
                                                </div>
                                                <div className="qr-code__expired hide" data-qrcode-expired>
                                                    <span className="qr-code__text">QR code expired</span>
                                                    <button type="button" className="btn btn-white" data-qrcode-update>
                                                        <span className="btn__inner">Update</span>
                                                    </button>
                                                </div>

                                                <div className="qr-code__ok hide" data-qrcode-ok>
                                                    <Image src="assets/img/images/check-mark-white.svg" width={83} height={83}
                                                        alt="" className="qr-code__ok-pic" />
                                                        <Image src={QrImage} width={83} height={83} alt='qr' />
                                                        <span className="qr-code__text">Сonfirm in app</span>
                                                </div>

                                                <div className="qr-code__loading hide" data-qrcode-loading>
                                                    loading
                                                </div>
                                            </div>

                                            <div className="qr-code__bottom">
                                                <ol className="qr-code__rules">
                                                    <li className="qr-code__rule">Open the lit.it app on your phone</li>
                                                    <li className="qr-code__rule">Go to &quot;Settings&quot; - &quot;Web wallets QR code login&quot;</li>
                                                    <li className="qr-code__rule">Point your phone at this screen</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

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

export default SignInCom;
