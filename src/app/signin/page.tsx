"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import Image from 'next/image';

export default function Signin = () => {
    const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      margin: 10,
      data: 'https://google.com',
      image: `https://lit.it/assets/img/icons/logo-pic.png`,
      dotsOptions: {
        type: 'square',
        gradient: {
          type: 'linear',
          rotation: 0,
          colorStops: [
            { offset: 0, color: '#ED2CCE' },
            { offset: 0.5, color: '#B84AEA' },
            { offset: 1, color: '#8E61FF' },
          ],
        },
      },
      backgroundOptions: {
        color: '#141414',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        imageSize: 0.5,
        margin: 10,
      },
    });

    qrCode.append(canvasRef.current);

    return () => {
    };
  }, []);

    return (
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
                                        <h1 className='section-title-large'>Login to Lit.it</h1>

                                        <div className="qr-code" data-qrcode>
                                            <div className="qr-code__top">
                                                <div className="qr-code__pic" ref={canvasRef} data-qrcode-canvas></div>
                                                <div className="qr-code__expired hide" data-qrcode-expired>
                                                    <span className="qr-code__text">QR code expired</span>
                                                    <button type="button" className="btn btn-white" data-qrcode-update>
                                                        <span className="btn__inner">Update</span>
                                                    </button>
                                                </div>

                                                <div className="qr-code__ok hide" data-qrcode-ok>
                                                    <Image src="assets/img/images/check-mark-white.svg" width={83} height={83}
                                                        alt="" className="qr-code__ok-pic" />
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

