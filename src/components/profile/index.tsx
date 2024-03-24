'use client'
import { instance } from '@/services/interceptors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfileIndex = () => {
    const [profileData, setProfileData] = useState<any>(null);
    useEffect(() => {
        handleGetMydata()
    }, [])

    const handleGetMydata = async () => {
        try {
            const jwt = JSON.parse(window.localStorage.getItem('jwt') ?? '');
            if (!jwt) {
                throw new Error('JWT token not found in local storage');
            }

            const res = await axios.get('https://user-go.api.litit1.com/mobile/v1/profile/me', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            setProfileData(res.data);

            console.log('res', res.data);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <>
            <main className="main-profile" style={{paddingTop: '100px'}}>
                <section className="profile" id="profile-content">
                    <div className="container">

                        <div className="profile-top">
                            <div className="profile-top__left">
                                <div className="profile-items profile-items--points profile-top__points-balance">
                                    <div className="profile-items__inner">
                                        <div className="profile-top__text-wrapper">
                                            <p className="profile-items__main-text">My Points Balance</p>
                                            <p className="profile-items__secondary-text">1 LITIT = <span
                                                id="pointsToTokensExchangeRateRef">1080</span> Points</p>
                                        </div>
                                        <p className="profile-top__balance" id="pointsBalanceRef">{profileData?.data?.vault_points}</p>
                                        <p className="profile-top__balance-text">
                                            <span>=</span><span className="profile-top__balance-text__balance"
                                                id="tokensBalanceRef">0</span><span> LITIT tokens available to convert</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="profile-items profile-items--tokens tokens-balance" data-wallet-disabled="true">
                                    <div className="profile-items__inner">
                                        <button className="profile-top__button-disconnect profile-items__hide"
                                            data-hystmodal="#connect-modal-disconnect">
                                            Disconnect
                                        </button>
                                        <p className="profile-items__main-text profile-items__fade">Tokens Balance</p>
                                        <p className="profile-top__balance tokens-balance__balance-text profile-items__fade">
                                            <strong data-balance>0.00</strong><span>LITIT</span>
                                        </p>
                                        <div className="tokens-balance__text-wrapper profile-items__fade">
                                            <p className="tokens-balance__bottom-text">Connected Solana Wallet address:</p>
                                            <div className="wallet-copy-wrapper">
                                                <p data-wallet></p>
                                                <button className="profile-top__button-copy profile-items__hide"
                                                    id="walletAddressRef"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-overlay-blocked"><span></span></div>
                                </div>
                            </div>
                            <div className="profile-top__right">
                                <div className="profile-items profile-items--convert profile-top__right-item profile-converter"
                                    data-wallet-disabled="true">
                                    <div className="profile-items__inner">
                                        <p className="profile-items__main-text profile-items__fade">Convert Point to Token</p>
                                        <form className="profile-top__form" id="convert-token-form">
                                            <div className="profile-top__form-fields">
                                                <div className="profile-top__input-wrapper profile-items__fade">
                                                    <input
                                                        name="points"
                                                        className="profile-top__form-input js-validate"
                                                        placeholder="0.00"
                                                        type="number"
                                                        step="any"
                                                        id="transferPointsInputRef"
                                                    />
                                                    <button className="profile-top__button-max" id="maxButtonRef" type="button">
                                                        MAX
                                                    </button>
                                                </div>
                                                <div className="profile-top__input-wrapper profile-items__fade">
                                                    {/* <input className="profile-top__form-input" placeholder="0 LITIT" readonly
                                                   id="transferTokensInputRef"/> */}
                                                </div>

                                                <div className="profile-overlay-blocked">
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="profile-top__form-action">
                                                <div className="profile-top__form-alert" id="withdrawalAlert"></div>
                                                <button className="profile-top__form-button profile-items__hide" type="submit">
                                                </button>
                                                <button className="profile-top__form-button profile-items__show" type="button"
                                                    id="connectWalletButton">
                                                    Connect Wallet
                                                </button>
                                                <div className="profile-top__form-error hide" data-withdraw-error></div>
                                            </div>
                                        </form>
                                        <p className="profile-top__right-item-text">
                                            Convert your LIT points to LITIT tokens and withdraw LITIT tokens to your wallet.
                                        </p>
                                        <p className="profile-top__right-item-text">
                                            You can withdraw up to 2 LITIT tokens the first time immediately. Each next transaction will require 1-3 days to be approved for the fraud prevention purposes.
                                        </p>
                                        <p className="profile-top__right-item-text hide" data-text-for-country></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-stats profile-stats-transaction"
                            id="profile-transaction">
                            <h3 className="profile-stats__title">My Transaction History</h3>
                            <div className="profile-stats__inner">
                                <div className="profile-stats__head">
                                    <form className="profile-stats__form" data-filter-form>
                                        <div className="profile-stats__search">
                                            <label className="profile-stats__search-wrap">
                                                {/* <input className="profile-stats__search-control" disabled type="text"
                                               placeholder="Enter Transaction ID"
                                               data-search-filter> */}
                                            </label>
                                            <button type="button" className="profile-stats__search-btn" data-toggle-filter>
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor"
                                                        d="M5.75805 6.44322e-05C4.23789 6.44322e-05 2.95955 1.05882 2.57534 2.47861H0.860965C0.632508 2.47764 0.413048 2.56916 0.251383 2.73246C0.0898934 2.89596 -0.000414994 3.11769 0.000349127 3.34869C0.0013058 3.57875 0.0923815 3.79874 0.253871 3.96067C0.415169 4.12261 0.633673 4.21317 0.861004 4.2122H2.57215C2.95367 5.63585 4.23504 6.69926 5.75809 6.69926C7.26581 6.69926 8.5365 5.65656 8.93238 4.2546L23.1445 4.21222H23.1444C23.3718 4.21184 23.5896 4.11993 23.7501 3.95721C23.9105 3.79429 24.0004 3.57353 24 3.34365C23.9994 3.11437 23.9093 2.89457 23.749 2.73243C23.5884 2.57029 23.3713 2.47896 23.1443 2.47857L8.95568 2.52095C8.5864 1.07931 7.29371 0 5.75808 0L5.75805 6.44322e-05ZM5.75805 1.73369C6.65119 1.73369 7.35688 2.44572 7.35688 3.34869C7.35688 4.25187 6.65124 4.96548 5.75805 4.96548C4.86486 4.96548 4.16099 4.25192 4.16099 3.34869C4.16099 2.44547 4.86491 1.73369 5.75805 1.73369ZM14.9158 8.37697C13.3703 8.37697 12.0698 9.45449 11.6862 10.8994H0.860622C0.632934 10.8987 0.414233 10.9894 0.25295 11.1516C0.0914607 11.3139 0.000579198 11.5345 1.20881e-06 11.7647C-0.000381489 11.9953 0.0901186 12.2169 0.251799 12.3798C0.413288 12.5429 0.632366 12.634 0.860647 12.6331H11.6877C12.0724 14.0776 13.3714 15.1573 14.9155 15.1573C16.4595 15.1573 17.7586 14.0776 18.1433 12.6331H23.1439C23.3714 12.6327 23.5891 12.541 23.7497 12.3781C23.91 12.2152 23.9999 11.9946 23.9995 11.7647C23.999 11.5354 23.9088 11.3156 23.7485 11.1535C23.588 10.9913 23.3708 10.9 23.1439 10.8994H18.1448C17.7611 9.45448 16.4606 8.37696 14.9152 8.37696L14.9158 8.37697ZM14.9158 10.1106C15.8319 10.1106 16.5565 10.8383 16.5565 11.7647C16.5565 12.6912 15.8319 13.4239 14.9158 13.4239C13.9996 13.4239 13.275 12.6911 13.275 11.7647C13.275 10.8383 13.9996 10.1106 14.9158 10.1106ZM8.25418 17.2145C6.71066 17.2145 5.40998 18.2932 5.02459 19.737H0.86072C0.632263 19.7362 0.412803 19.8275 0.251138 19.991C0.0896486 20.1543 -0.00065977 20.3763 0.000104351 20.6073C0.00106102 20.8371 0.0921367 21.0573 0.253626 21.2192C0.414924 21.3812 0.633428 21.4716 0.860759 21.4706H5.02292C5.40578 22.9181 6.708 24 8.25402 24C9.80019 24 11.1007 22.918 11.4836 21.4706H23.1443C23.3708 21.4702 23.588 21.3793 23.7481 21.2173C23.9085 21.0556 23.999 20.8363 23.9999 20.6073C24.0007 20.377 23.9112 20.1561 23.7506 19.9928C23.5901 19.8295 23.372 19.7376 23.1443 19.737H11.4821C11.0968 18.2934 9.79778 17.2145 8.25431 17.2145L8.25418 17.2145ZM8.25418 18.9481C9.17029 18.9481 9.89489 19.6809 9.89489 20.6073C9.89489 21.5337 9.17029 22.2664 8.25418 22.2664C7.33807 22.2664 6.61348 21.5337 6.61348 20.6073C6.61348 19.6809 7.33807 18.9481 8.25418 18.9481Z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="profile-stats__filters transaction-history-filter__block"
                                            data-filter-container>
                                            <div className="profile-stats__select" data-filter-item>
                                                <span className="profile-stats__select-name">Time:</span>
                                                <select name="time_from" data-custom-className="DateFilter"
                                                    data-filter-type="select"></select>
                                            </div>

                                            <div className="profile-stats__select" data-filter-item>
                                                <span className="profile-stats__select-name">Status:</span>
                                                <select name="statuses" data-custom-className="DateFilter"
                                                    data-filter-type="select"></select>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="profile-stats__body">
                                    <div className="profile-stats__body-inner">
                                        <table className="profile-stats__table">
                                            <thead data-render-table-head></thead>
                                            <tbody data-render-items></tbody>
                                        </table>
                                    </div>
                                    <div className="profile-stats__nodata" data-render-nodata>
                                        <div className="profile-stats__nodata-inner">No data</div>
                                    </div>
                                    <div className="modal-loader" data-render-loader>
                                        <div className="modal-loader__inner">
                                            <div className="modal-loader__item modal-loader__item--1"></div>
                                            <div className="modal-loader__item modal-loader__item--2"></div>
                                            <div className="modal-loader__item modal-loader__item--3"></div>
                                            <div className="modal-loader__item modal-loader__item--4"></div>
                                            <div className="modal-loader__item modal-loader__item--5"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-stats__footer">
                                    <div className="pagination" data-render-pagination></div>
                                    <div className="profile-stats__total"><span data-render-total>0</span> transactions</div>
                                </div>

                            </div>
                        </div>

                        <div className="profile-referral">
                            <p className="profile-referral__text">Your unique Referral URL</p>
                            <div className="profile-referral__elems">
                                <div className="profile-referral__inner">
                                    {/* <input id="referralLinkInputRef" className="profile-referral__input" readonly/> */}
                                    <button className="profile-top__button-copy" id="copyReferralLinkRef"></button>
                                </div>
                                {/* <ul
                                    className="profile-referral__list share-btn"
                                    id="shareButtonsWrapRef"
                                    data-url="http:/localhost:9000/HollaDolla2"
                                    data-title="Social media & messengers"
                                    data-desc="Share lit.it on social media website and in messengers and get 100 LIT points for every person that joins"
                                >
                                    <li className="profile-referral__item">
                                        <a className="profile-referral__link" data-id="fb">
                                            <img src="./assets/img/icons/facebook.svg" alt="" />
                                            <small>Facebook</small>
                                        </a>
                                    </li>
                                    <li className="profile-referral__item">
                                        <a className="profile-referral__link" data-id="tw">
                                            <img src="./assets/img/icons/twitter.svg" alt="" />
                                            <small>Twitter</small>
                                        </a>
                                    </li>
                                    <li className="profile-referral__item">
                                        <a className="profile-referral__link" data-id="tg">
                                            <img src="./assets/img/icons/telegram-2.svg" alt="" />
                                            <small>Telegram</small>
                                        </a>
                                    </li>
                                    <li className="profile-referral__item">
                                        <a className="profile-referral__link" data-id="in">
                                            <img src="./assets/img/icons/linkIn.svg" alt="" />
                                            <small>Linkedin</small>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="profile-row" id="referrals-clicks">
                            <div className="profile-row__item">
                                <div className="referrals-clicks">
                                    <div className="referrals-clicks__inner" data-referrals-clicks-container>
                                        <div className="referrals-clicks__top">
                                            Total clicks on your referral URL
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-row__item">
                                <div className='join-messengers join-messengers--profile'>
                                    <ul className='join-messengers__list'>
                                        <li className='join-messengers__item join-messengers__item--telegram'>
                                            <a href="https://t.me/lititglobal/1" target="__blank">
                                                <h3 className='join-messengers__title'>Lit.it Telegram</h3>
                                                <p className='join-messengers__text'>
                                                    Join the <span className='bold'>lit.it</span> community and get current news and
                                                    the
                                                    official <span className="nowrap">launch time.</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li className='join-messengers__item join-messengers__item--discord'>
                                            <a href="https://discord.gg/kmCqyXFM" target="__blank">
                                                <h3 className='join-messengers__title'>Lit.it Discord</h3>
                                                <p className='join-messengers__text'>
                                                    Join the <span className='bold'>lit.it</span> community and get current news and
                                                    the
                                                    official <span className="nowrap">launch time.</span>
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="profile-stats profile-stats-referrals"
                            id="profile-referrals">
                            <h3 className="profile-stats__title">My referrals</h3>
                            <div className="profile-stats__inner">
                                <div className="profile-stats__head">
                                    <form className="profile-stats__form" data-filter-form>
                                        <div className="profile-stats__search">
                                            <label className="profile-stats__search-wrap">
                                                {/* <input className="profile-stats__search-control" name="search" type="text"
                                               placeholder="Search"
                                               data-search-filter> */}
                                            </label>
                                            <button type="button" className="profile-stats__search-btn" data-toggle-filter>
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor"
                                                        d="M5.75805 6.44322e-05C4.23789 6.44322e-05 2.95955 1.05882 2.57534 2.47861H0.860965C0.632508 2.47764 0.413048 2.56916 0.251383 2.73246C0.0898934 2.89596 -0.000414994 3.11769 0.000349127 3.34869C0.0013058 3.57875 0.0923815 3.79874 0.253871 3.96067C0.415169 4.12261 0.633673 4.21317 0.861004 4.2122H2.57215C2.95367 5.63585 4.23504 6.69926 5.75809 6.69926C7.26581 6.69926 8.5365 5.65656 8.93238 4.2546L23.1445 4.21222H23.1444C23.3718 4.21184 23.5896 4.11993 23.7501 3.95721C23.9105 3.79429 24.0004 3.57353 24 3.34365C23.9994 3.11437 23.9093 2.89457 23.749 2.73243C23.5884 2.57029 23.3713 2.47896 23.1443 2.47857L8.95568 2.52095C8.5864 1.07931 7.29371 0 5.75808 0L5.75805 6.44322e-05ZM5.75805 1.73369C6.65119 1.73369 7.35688 2.44572 7.35688 3.34869C7.35688 4.25187 6.65124 4.96548 5.75805 4.96548C4.86486 4.96548 4.16099 4.25192 4.16099 3.34869C4.16099 2.44547 4.86491 1.73369 5.75805 1.73369ZM14.9158 8.37697C13.3703 8.37697 12.0698 9.45449 11.6862 10.8994H0.860622C0.632934 10.8987 0.414233 10.9894 0.25295 11.1516C0.0914607 11.3139 0.000579198 11.5345 1.20881e-06 11.7647C-0.000381489 11.9953 0.0901186 12.2169 0.251799 12.3798C0.413288 12.5429 0.632366 12.634 0.860647 12.6331H11.6877C12.0724 14.0776 13.3714 15.1573 14.9155 15.1573C16.4595 15.1573 17.7586 14.0776 18.1433 12.6331H23.1439C23.3714 12.6327 23.5891 12.541 23.7497 12.3781C23.91 12.2152 23.9999 11.9946 23.9995 11.7647C23.999 11.5354 23.9088 11.3156 23.7485 11.1535C23.588 10.9913 23.3708 10.9 23.1439 10.8994H18.1448C17.7611 9.45448 16.4606 8.37696 14.9152 8.37696L14.9158 8.37697ZM14.9158 10.1106C15.8319 10.1106 16.5565 10.8383 16.5565 11.7647C16.5565 12.6912 15.8319 13.4239 14.9158 13.4239C13.9996 13.4239 13.275 12.6911 13.275 11.7647C13.275 10.8383 13.9996 10.1106 14.9158 10.1106ZM8.25418 17.2145C6.71066 17.2145 5.40998 18.2932 5.02459 19.737H0.86072C0.632263 19.7362 0.412803 19.8275 0.251138 19.991C0.0896486 20.1543 -0.00065977 20.3763 0.000104351 20.6073C0.00106102 20.8371 0.0921367 21.0573 0.253626 21.2192C0.414924 21.3812 0.633428 21.4716 0.860759 21.4706H5.02292C5.40578 22.9181 6.708 24 8.25402 24C9.80019 24 11.1007 22.918 11.4836 21.4706H23.1443C23.3708 21.4702 23.588 21.3793 23.7481 21.2173C23.9085 21.0556 23.999 20.8363 23.9999 20.6073C24.0007 20.377 23.9112 20.1561 23.7506 19.9928C23.5901 19.8295 23.372 19.7376 23.1443 19.737H11.4821C11.0968 18.2934 9.79778 17.2145 8.25431 17.2145L8.25418 17.2145ZM8.25418 18.9481C9.17029 18.9481 9.89489 19.6809 9.89489 20.6073C9.89489 21.5337 9.17029 22.2664 8.25418 22.2664C7.33807 22.2664 6.61348 21.5337 6.61348 20.6073C6.61348 19.6809 7.33807 18.9481 8.25418 18.9481Z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="profile-stats__filters referrals-filter__block" data-filter-container>
                                            <div className="profile-stats__select" data-filter-item>
                                                <span className="profile-stats__select-name">Level referral:</span>
                                                <select name="grand_referral" data-custom-className="DateFilter"
                                                    data-filter-type="select"></select>
                                            </div>

                                            <div className="profile-stats__select" data-filter-item>
                                                <span className="profile-stats__select-name">Joined:</span>
                                                <select name="joined" data-custom-className="DateFilter"
                                                    data-filter-type="select"></select>
                                            </div>

                                            <div className="profile-stats__select" data-filter-item>
                                                <span className="profile-stats__select-name">Status:</span>
                                                <select name="verified" data-custom-className="DateFilter"
                                                    data-filter-type="select"></select>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="profile-stats__body">
                                    <div className="profile-stats__body-inner">
                                        <table className="profile-stats__table">
                                            <thead data-render-table-head></thead>
                                            <tbody data-render-items></tbody>
                                        </table>
                                    </div>
                                    <div className="profile-stats__nodata" data-render-nodata>
                                        <div className="profile-stats__nodata-inner">No data</div>
                                    </div>
                                    <div className="modal-loader" data-render-loader>
                                        <div className="modal-loader__inner">
                                            <div className="modal-loader__item modal-loader__item--1"></div>
                                            <div className="modal-loader__item modal-loader__item--2"></div>
                                            <div className="modal-loader__item modal-loader__item--3"></div>
                                            <div className="modal-loader__item modal-loader__item--4"></div>
                                            <div className="modal-loader__item modal-loader__item--5"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-stats__footer">
                                    <div className="pagination" data-render-pagination></div>
                                    <div className="profile-stats__total"><span data-render-total>0</span> referrals</div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-tabs" data-tabs>
                            <div className="profile-tabs__top">
                                <ul className="profile-tabs__tabs" role="tablist">
                                    <li className="profile-tabs__tabs-item">
                                        <button type="button" className="profile-tabs__tab" data-tabs-btn="0">
                                            Music manage
                                        </button>
                                    </li>

                                    <li className="profile-tabs__tabs-item" data-hide-ads>
                                        <button type="button" className="profile-tabs__tab Active" data-tabs-btn="1">
                                            Ads manager
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="profile-tabs__body">
                                <div className="profile-tabs__content" role="tabpanel" aria-hidden="true" data-tabs-content="0">

                                    <div className="profile-stats profile-stats-music NotBecomeCreator UserHaveNotSongs" id="profile-music">
                                        <div className="profile-stats__inner">
                                            <div className="profile-stats__head">
                                                <form className="profile-stats__form" data-filter-form>
                                                    <div className="profile-stats__search">
                                                        <label className="profile-stats__search-wrap">
                                                            {/* <input className="profile-stats__search-control" name="search" type="text" placeholder="Search"
                                                           data-search-filter disabled> */}
                                                        </label>
                                                        <button type="button" className="profile-stats__search-btn" data-toggle-filter>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="currentColor"
                                                                    d="M5.75805 6.44322e-05C4.23789 6.44322e-05 2.95955 1.05882 2.57534 2.47861H0.860965C0.632508 2.47764 0.413048 2.56916 0.251383 2.73246C0.0898934 2.89596 -0.000414994 3.11769 0.000349127 3.34869C0.0013058 3.57875 0.0923815 3.79874 0.253871 3.96067C0.415169 4.12261 0.633673 4.21317 0.861004 4.2122H2.57215C2.95367 5.63585 4.23504 6.69926 5.75809 6.69926C7.26581 6.69926 8.5365 5.65656 8.93238 4.2546L23.1445 4.21222H23.1444C23.3718 4.21184 23.5896 4.11993 23.7501 3.95721C23.9105 3.79429 24.0004 3.57353 24 3.34365C23.9994 3.11437 23.9093 2.89457 23.749 2.73243C23.5884 2.57029 23.3713 2.47896 23.1443 2.47857L8.95568 2.52095C8.5864 1.07931 7.29371 0 5.75808 0L5.75805 6.44322e-05ZM5.75805 1.73369C6.65119 1.73369 7.35688 2.44572 7.35688 3.34869C7.35688 4.25187 6.65124 4.96548 5.75805 4.96548C4.86486 4.96548 4.16099 4.25192 4.16099 3.34869C4.16099 2.44547 4.86491 1.73369 5.75805 1.73369ZM14.9158 8.37697C13.3703 8.37697 12.0698 9.45449 11.6862 10.8994H0.860622C0.632934 10.8987 0.414233 10.9894 0.25295 11.1516C0.0914607 11.3139 0.000579198 11.5345 1.20881e-06 11.7647C-0.000381489 11.9953 0.0901186 12.2169 0.251799 12.3798C0.413288 12.5429 0.632366 12.634 0.860647 12.6331H11.6877C12.0724 14.0776 13.3714 15.1573 14.9155 15.1573C16.4595 15.1573 17.7586 14.0776 18.1433 12.6331H23.1439C23.3714 12.6327 23.5891 12.541 23.7497 12.3781C23.91 12.2152 23.9999 11.9946 23.9995 11.7647C23.999 11.5354 23.9088 11.3156 23.7485 11.1535C23.588 10.9913 23.3708 10.9 23.1439 10.8994H18.1448C17.7611 9.45448 16.4606 8.37696 14.9152 8.37696L14.9158 8.37697ZM14.9158 10.1106C15.8319 10.1106 16.5565 10.8383 16.5565 11.7647C16.5565 12.6912 15.8319 13.4239 14.9158 13.4239C13.9996 13.4239 13.275 12.6911 13.275 11.7647C13.275 10.8383 13.9996 10.1106 14.9158 10.1106ZM8.25418 17.2145C6.71066 17.2145 5.40998 18.2932 5.02459 19.737H0.86072C0.632263 19.7362 0.412803 19.8275 0.251138 19.991C0.0896486 20.1543 -0.00065977 20.3763 0.000104351 20.6073C0.00106102 20.8371 0.0921367 21.0573 0.253626 21.2192C0.414924 21.3812 0.633428 21.4716 0.860759 21.4706H5.02292C5.40578 22.9181 6.708 24 8.25402 24C9.80019 24 11.1007 22.918 11.4836 21.4706H23.1443C23.3708 21.4702 23.588 21.3793 23.7481 21.2173C23.9085 21.0556 23.999 20.8363 23.9999 20.6073C24.0007 20.377 23.9112 20.1561 23.7506 19.9928C23.5901 19.8295 23.372 19.7376 23.1443 19.737H11.4821C11.0968 18.2934 9.79778 17.2145 8.25431 17.2145L8.25418 17.2145ZM8.25418 18.9481C9.17029 18.9481 9.89489 19.6809 9.89489 20.6073C9.89489 21.5337 9.17029 22.2664 8.25418 22.2664C7.33807 22.2664 6.61348 21.5337 6.61348 20.6073C6.61348 19.6809 7.33807 18.9481 8.25418 18.9481Z" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="profile-stats__filters referrals-filter__block" data-filter-container>

                                                    </div>
                                                </form>
                                            </div>

                                            <div className="profile-stats__body">
                                                <div className="profile-stats__body-inner">
                                                    <table className="profile-stats__table">
                                                        <thead data-render-table-head></thead>
                                                        <tbody data-render-items></tbody>
                                                    </table>

                                                    <div className="profile-stats-music__table-block hide">
                                                        <p className="profile-stats-music__table-block-text">To upload and view song statistics to the Lit.it<br /> library, you must be a music creator.</p>
                                                        <button className="profile-stats-music__table-block-button" id="BecomeMusicCreator">Become music creator</button>
                                                    </div>

                                                    <div className="profile-stats-music__table-pending-block hide">
                                                        <p className="profile-stats-music__table-block-text--yellow">Your music creator enrollment status: in review</p>
                                                        <p className="profile-stats-music__table-block-text--secondary">Our team will process your request within 24 hours </p>
                                                    </div>

                                                    <div className="profile-stats-music__table-rejected-block hide">
                                                        <button className="profile-stats-music__table-rejected-block--btn" id="tryAgainMusic">Try again</button>
                                                        <p className="profile-stats-music__table-rejected-block--text-first">Your music creator enrollment status: rejected</p>
                                                        <p className="profile-stats-music__table-rejected-block--text-second">Reason: copyright issues</p>
                                                        <p className="profile-stats-music__table-rejected-block--text-third">You may start process again by clicking button below
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="profile-stats__nodata" data-render-nodata>
                                                    <div className="profile-stats__nodata-inner">No data</div>
                                                </div>

                                                <div className="modal-loader" data-render-loader>
                                                    <div className="modal-loader__inner">
                                                        <div className="modal-loader__item modal-loader__item--1"></div>
                                                        <div className="modal-loader__item modal-loader__item--2"></div>
                                                        <div className="modal-loader__item modal-loader__item--3"></div>
                                                        <div className="modal-loader__item modal-loader__item--4"></div>
                                                        <div className="modal-loader__item modal-loader__item--5"></div>
                                                    </div>
                                                </div>

                                                <div className="profile-stats__bottom">
                                                    <div className="profile-stats-music__table-approved-block hide">
                                                        <button className="profile-stats-music__table-block-add-song-button" id="AddNewSong"></button>
                                                        <p className="profile-stats-music__table-block-text">Add new song</p>
                                                        <p className="profile-stats-music__table-block-text--secondary">You don&apos;t have any songs yet</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div className="profile-tabs__content Active" role="tabpanel" aria-hidden="false" data-tabs-content="1" data-hide-ads>

                                    <div className="profile-stats profile-stats-ads NotHasAdCampaigns"
                                        id="profile-ads">
                                        <div className="profile-stats__inner">
                                            <div className="profile-stats__head">
                                                <form className="profile-stats__form" data-filter-form>
                                                    <div className="profile-stats__search">
                                                        <label className="profile-stats__search-wrap">
                                                            {/* <input className="profile-stats__search-control" name="name" type="text"
                                                           placeholder="Search"
                                                           data-search-filter> */}
                                                        </label>
                                                        <button type="button" className="profile-stats__search-btn" data-toggle-filter>
                                                            <svg width="24" height="24" viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="currentColor"
                                                                    d="M5.75805 6.44322e-05C4.23789 6.44322e-05 2.95955 1.05882 2.57534 2.47861H0.860965C0.632508 2.47764 0.413048 2.56916 0.251383 2.73246C0.0898934 2.89596 -0.000414994 3.11769 0.000349127 3.34869C0.0013058 3.57875 0.0923815 3.79874 0.253871 3.96067C0.415169 4.12261 0.633673 4.21317 0.861004 4.2122H2.57215C2.95367 5.63585 4.23504 6.69926 5.75809 6.69926C7.26581 6.69926 8.5365 5.65656 8.93238 4.2546L23.1445 4.21222H23.1444C23.3718 4.21184 23.5896 4.11993 23.7501 3.95721C23.9105 3.79429 24.0004 3.57353 24 3.34365C23.9994 3.11437 23.9093 2.89457 23.749 2.73243C23.5884 2.57029 23.3713 2.47896 23.1443 2.47857L8.95568 2.52095C8.5864 1.07931 7.29371 0 5.75808 0L5.75805 6.44322e-05ZM5.75805 1.73369C6.65119 1.73369 7.35688 2.44572 7.35688 3.34869C7.35688 4.25187 6.65124 4.96548 5.75805 4.96548C4.86486 4.96548 4.16099 4.25192 4.16099 3.34869C4.16099 2.44547 4.86491 1.73369 5.75805 1.73369ZM14.9158 8.37697C13.3703 8.37697 12.0698 9.45449 11.6862 10.8994H0.860622C0.632934 10.8987 0.414233 10.9894 0.25295 11.1516C0.0914607 11.3139 0.000579198 11.5345 1.20881e-06 11.7647C-0.000381489 11.9953 0.0901186 12.2169 0.251799 12.3798C0.413288 12.5429 0.632366 12.634 0.860647 12.6331H11.6877C12.0724 14.0776 13.3714 15.1573 14.9155 15.1573C16.4595 15.1573 17.7586 14.0776 18.1433 12.6331H23.1439C23.3714 12.6327 23.5891 12.541 23.7497 12.3781C23.91 12.2152 23.9999 11.9946 23.9995 11.7647C23.999 11.5354 23.9088 11.3156 23.7485 11.1535C23.588 10.9913 23.3708 10.9 23.1439 10.8994H18.1448C17.7611 9.45448 16.4606 8.37696 14.9152 8.37696L14.9158 8.37697ZM14.9158 10.1106C15.8319 10.1106 16.5565 10.8383 16.5565 11.7647C16.5565 12.6912 15.8319 13.4239 14.9158 13.4239C13.9996 13.4239 13.275 12.6911 13.275 11.7647C13.275 10.8383 13.9996 10.1106 14.9158 10.1106ZM8.25418 17.2145C6.71066 17.2145 5.40998 18.2932 5.02459 19.737H0.86072C0.632263 19.7362 0.412803 19.8275 0.251138 19.991C0.0896486 20.1543 -0.00065977 20.3763 0.000104351 20.6073C0.00106102 20.8371 0.0921367 21.0573 0.253626 21.2192C0.414924 21.3812 0.633428 21.4716 0.860759 21.4706H5.02292C5.40578 22.9181 6.708 24 8.25402 24C9.80019 24 11.1007 22.918 11.4836 21.4706H23.1443C23.3708 21.4702 23.588 21.3793 23.7481 21.2173C23.9085 21.0556 23.999 20.8363 23.9999 20.6073C24.0007 20.377 23.9112 20.1561 23.7506 19.9928C23.5901 19.8295 23.372 19.7376 23.1443 19.737H11.4821C11.0968 18.2934 9.79778 17.2145 8.25431 17.2145L8.25418 17.2145ZM8.25418 18.9481C9.17029 18.9481 9.89489 19.6809 9.89489 20.6073C9.89489 21.5337 9.17029 22.2664 8.25418 22.2664C7.33807 22.2664 6.61348 21.5337 6.61348 20.6073C6.61348 19.6809 7.33807 18.9481 8.25418 18.9481Z" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="profile-stats__filters referrals-filter__block" data-filter-container>
                                                        <div className="profile-stats__select" data-filter-item>
                                                            <span className="profile-stats__select-name">Date From:</span>
                                                            <select name="date_from" data-custom-className="DateFilter"
                                                                data-filter-type="select"></select>
                                                        </div>

                                                        <div className="profile-stats__select" data-filter-item>
                                                            <span className="profile-stats__select-name">Status:</span>
                                                            <select name="status" data-custom-className="DateFilter"
                                                                data-filter-type="select"></select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="profile-stats__body">
                                                <div className="profile-stats__body-inner">
                                                    <table className="profile-stats__table">
                                                        <thead data-render-table-head></thead>
                                                        <tbody data-render-items></tbody>
                                                    </table>
                                                </div>

                                                <div className="profile-stats__nodata" data-render-nodata>
                                                    <div className="profile-stats__nodata-inner">No data</div>
                                                </div>

                                                <div className="become-creator">
                                                    <div className="launch-block">
                                                        <div className="launch-block__text">
                                                            You have not launched any Ads yet
                                                        </div>
                                                        <button type="button" data-launch-ads className="btn btn-white">
                                                            <span className="btn__inner">
                                                                Lauch new Ad
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="modal-loader" data-render-loader>
                                                    <div className="modal-loader__inner">
                                                        <div className="modal-loader__item modal-loader__item--1"></div>
                                                        <div className="modal-loader__item modal-loader__item--2"></div>
                                                        <div className="modal-loader__item modal-loader__item--3"></div>
                                                        <div className="modal-loader__item modal-loader__item--4"></div>
                                                        <div className="modal-loader__item modal-loader__item--5"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="profile-stats__footer">
                                                <div className="pagination" data-render-pagination></div>
                                                <div className="profile-stats__total"><span data-render-total>0</span> records</div>
                                            </div>

                                            {/* <div className="profile-stats__bottom">
                                        <div className="launch-block">
                                            <div className="launch-block__text" style="display: none;">
                                                You have not launched any Ads yet
                                            </div>
                                            <button type="button" data-launch-ads className="btn btn-white">
                                                <span className="btn__inner">
                                                    Lauch new Ad
                                                </span>
                                            </button>
                                        </div>
                                    </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default ProfileIndex;
