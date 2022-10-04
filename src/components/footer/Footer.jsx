import React from 'react'
import { Link } from 'react-router-dom'
import Btn2 from '../ui/btn2/Btn2'
import "./footer.scss"

import Logo from "../../assets/img/Logo.svg"
import { useSelector } from 'react-redux'
import { getClearPhone, getCuttedString, getLatestNews } from '../../functions/helpers'

export default function Footer() {

  let news = useSelector((state) => state.globalReducer.news)
  let mainInfo = useSelector((state) => state.globalReducer.mainInfo)

  return (
    <footer className="Footer">
      <div className="Footer_content">
        <div className="Footer_logoText">
          <div className="Footer_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Footer_text">
            <p>{mainInfo.footerText}</p>
          </div>
          <div className="Footer_socials">

            {mainInfo.socials.map((social) => {
              switch (social.social) {
                case 'twi':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'fb':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'inst':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="white" />
                          <path d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="white" />
                          <path d="M15.375 5.29124C15.7429 5.29124 16.0412 4.99295 16.0412 4.62499C16.0412 4.25703 15.7429 3.95874 15.375 3.95874C15.007 3.95874 14.7087 4.25703 14.7087 4.62499C14.7087 4.99295 15.007 5.29124 15.375 5.29124Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'in':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.4725 6.25H0V20H4.4725V6.25Z" fill="white" />
                          <path d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z" fill="white" />
                          <path d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'yt':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.8906 0.0333257C2.04696 0.256708 0.68408 1.11499 0.224996 2.97157C0.0111471 3.83664 0 4.10319 0 8.36427C0 12.7288 0.0122716 12.9845 0.269731 13.9867C0.851727 16.2526 2.3228 17.2737 5.37799 17.5328C5.81722 17.57 8.181 17.5808 13.0294 17.5676C20.4808 17.5474 20.2936 17.5531 21.3653 17.3177C23.2305 16.9082 24.2854 15.8752 24.7135 14.0389C24.9591 12.9859 24.9728 12.7385 24.9947 8.97541C25.0213 4.41081 24.9576 3.4416 24.5644 2.42404C24.0338 1.05128 23.0042 0.424599 20.7297 0.090137C20.2553 0.0203698 19.3215 0.00985828 12.8094 0.00115571C8.74901 -0.00432006 5.18555 0.0102004 4.8906 0.0333257ZM10.6063 5.16706C10.83 5.22915 15.9097 7.85532 16.1462 8.03113C16.5456 8.32809 16.5711 8.90921 16.1997 9.25252C16.1367 9.3108 14.875 9.99126 13.3961 10.7646C11.1012 11.9646 10.6712 12.1734 10.4626 12.1885C10.1323 12.2125 9.86734 12.0616 9.71705 11.7638L9.60704 11.5459V8.71404C9.60704 6.73078 9.62381 5.82625 9.66293 5.69561C9.73147 5.46695 9.92513 5.27408 10.176 5.18466C10.4086 5.10174 10.3759 5.10306 10.6063 5.16706Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'tt':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.1491 9.79258L12.1344 19.5852L12.0067 19.9403C11.8203 20.4586 11.5517 20.8684 11.1562 21.2385C10.1393 22.1898 8.58589 22.3345 7.42018 21.5864C7.08753 21.373 6.60334 20.8707 6.40831 20.5368C5.62643 19.1983 6.00398 17.4288 7.26322 16.5303C7.45585 16.3928 7.78254 16.2135 7.98921 16.1317C8.33142 15.9963 8.42817 15.9832 9.07511 15.9849C9.76614 15.9868 9.80296 15.993 10.4383 16.2154C10.7975 16.3411 11.0986 16.4439 11.1075 16.4439C11.1164 16.4439 11.1238 15.0456 11.1238 13.3365V10.2291L10.3869 10.1331C8.99743 9.95216 7.52742 10.0707 6.24589 10.4671C5.60786 10.6644 4.35725 11.2977 3.74953 11.7312C3.0861 12.2045 2.13115 13.1595 1.65837 13.8225C1.23832 14.4117 0.658301 15.5509 0.448955 16.198C-0.14226 18.0254 -0.14969 19.9339 0.427431 21.7431C1.34299 24.6132 3.77936 26.9002 6.74565 27.6737C8.53394 28.1401 10.5111 28.0396 12.2564 27.3935C15.0016 26.3774 17.122 24.0222 17.8466 21.1842C18.0983 20.1985 18.1143 19.8457 18.1154 15.2825L18.1165 10.9798L18.6492 11.246C20.4097 12.1258 22.094 12.5105 24.1863 12.5105H25V9.59208V6.67365L24.6586 6.64393C24.4708 6.6276 24.0626 6.59973 23.7516 6.58209C23.048 6.5421 22.6895 6.47971 22.1319 6.30025C20.104 5.64763 18.5993 3.93435 18.1941 1.81648C18.1514 1.59336 18.1165 1.13222 18.1165 0.791819C18.1165 0.45136 18.1016 0.133955 18.0834 0.086426C18.0537 0.00906872 17.7404 0 15.107 0H12.1638L12.1491 9.79258ZM16.5322 1.79697C16.5322 2.05953 16.8362 3.16646 17.0394 3.64399C17.8702 5.59622 19.472 7.10212 21.466 7.8056C21.9725 7.98424 22.9058 8.19463 23.1921 8.19463H23.3611V9.53204V10.8695L23.1016 10.8404C21.6181 10.6742 20.4665 10.3416 19.3153 9.74707C18.7011 9.42983 18.1183 9.04015 17.2295 8.35267C16.8453 8.05543 16.5189 7.81221 16.5042 7.81221C16.4896 7.81221 16.4776 10.4457 16.4776 13.6644C16.4776 20.1596 16.4773 20.1662 16.1226 21.2319C15.7972 22.2097 15.3077 23.0681 14.6618 23.7936C13.2659 25.3617 11.4716 26.2166 9.37558 26.3125C7.75638 26.3865 6.23436 25.9574 4.84592 25.0353C3.93823 24.4326 2.89155 23.2431 2.38491 22.2386C1.81871 21.116 1.53676 19.5742 1.66957 18.327C1.8628 16.5126 2.57726 15.0425 3.88048 13.7781C5.26953 12.4305 7.05464 11.6919 8.92488 11.6912L9.48484 11.691V12.9948V14.2985L8.81561 14.3266C8.26543 14.3496 8.05406 14.3847 7.62739 14.5239C6.08593 15.0265 4.90847 16.2872 4.48191 17.8916C4.40472 18.1819 4.38101 18.4583 4.38347 19.0388C4.38625 19.7084 4.40516 19.8649 4.53523 20.2954C5.12508 22.2479 6.79045 23.5734 8.80196 23.6915C10.1207 23.769 11.4055 23.2915 12.3547 22.3713C12.9746 21.7704 13.3714 21.0883 13.658 20.1315C13.7721 19.7508 13.7727 19.708 13.7879 10.694L13.8032 1.63893H15.1677H16.5322V1.79697Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'wsp':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.7468 0.014833C11.6661 0.0261808 11.391 0.0588548 11.1354 0.087518C7.02527 0.548134 3.25792 3.14958 1.4001 6.80995C-0.363366 10.2846 -0.341453 14.4983 1.45865 18.0449L1.74895 18.6168L0.869442 21.8106C0.385739 23.5671 -0.00551723 25.0088 5.88706e-05 25.0144C0.00563498 25.0199 1.48986 24.6384 3.29833 24.1665L6.58652 23.3085L7.0394 23.5288C8.34015 24.1616 9.7016 24.5668 11.1109 24.7405C11.8238 24.8284 13.3354 24.8168 14.0702 24.7178C18.6514 24.1004 22.516 21.1299 24.1635 16.9594C24.7619 15.4446 25.0018 14.1327 25 12.3861C24.9988 11.223 24.9441 10.681 24.7288 9.69583C24.2844 7.66285 23.1999 5.57353 21.8291 4.10955C21.6329 3.89991 21.4521 3.69198 21.4275 3.64742C21.3622 3.52925 20.6684 2.91754 20.1599 2.52975C19.2162 1.81019 17.9798 1.13137 16.8827 0.73058C16.2416 0.496335 15.1246 0.214692 14.4126 0.107719C13.9264 0.0346917 12.0671 -0.0301183 11.7468 0.014833ZM14.2903 2.18438C16.4854 2.56556 18.3433 3.5269 19.9183 5.09647C21.4424 6.61528 22.3935 8.45432 22.803 10.6741C22.9266 11.3444 22.9533 12.9199 22.8539 13.6757C22.5175 16.2313 21.3088 18.478 19.3864 20.121C17.5206 21.7155 15.3026 22.5857 12.8935 22.6683C10.9313 22.7355 9.17701 22.3021 7.41334 21.3145L6.89266 21.0229L4.95423 21.526C3.85916 21.8102 3.0161 22.0063 3.01649 21.9766C3.01688 21.9478 3.24706 21.0925 3.52797 20.0759L4.03877 18.2277L3.82698 17.8993C1.70703 14.6115 1.66311 10.4492 3.71233 7.0374C4.52996 5.67605 5.80958 4.37975 7.14897 3.5559C7.60914 3.27289 8.67335 2.76811 9.14913 2.60718C9.88253 2.35914 10.8315 2.15557 11.649 2.0708C12.1554 2.01832 13.7219 2.08567 14.2903 2.18438ZM7.68701 6.73047C7.28827 6.91306 6.69725 7.70145 6.42383 8.41558C6.27626 8.80092 6.27068 8.84288 6.2699 9.57355C6.26917 10.3057 6.27464 10.3476 6.43048 10.7964C6.72709 11.6504 7.19852 12.4383 8.02319 13.4586C10.1509 16.0907 11.5374 17.0923 14.3637 18.0391C15.7058 18.4886 16.8025 18.3721 17.8342 17.6704C18.4859 17.2271 18.7391 16.7944 18.86 15.918C18.9266 15.4346 18.8864 15.2639 18.6724 15.1223C18.5749 15.0578 18.4186 14.9898 18.3249 14.971C18.2311 14.9523 17.7692 14.7513 17.2985 14.5242C16.2282 14.0082 16.0219 13.9268 15.7828 13.9268C15.5971 13.9268 15.5775 13.9441 15.1316 14.5016C14.36 15.4662 14.3084 15.516 14.0851 15.5101C13.8273 15.5033 12.7769 14.9993 12.1658 14.5891C11.1351 13.8972 10.1517 12.844 9.57154 11.8105C9.37271 11.4564 9.38856 11.3854 9.76406 10.9491C10.1163 10.5398 10.433 10.0585 10.4746 9.86913C10.5193 9.6658 9.42187 7.02483 9.19838 6.79772L9.04191 6.63876L8.46229 6.63983C8.00593 6.64066 7.84104 6.65994 7.68701 6.73047Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                case 'vbr':
                  return (
                    <a key={social.social} href={social.link} className="headerOneSocial">
                      <div className="headerOneSocial_icon">
                        <svg viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.85568 0.0598552C6.65859 0.247596 4.61122 1.18051 2.98545 2.73475C1.55049 4.10656 0.608998 5.79118 0.150478 7.80735C0.00619895 8.44182 0 8.60776 0 11.841C0 15.1215 0.00429143 15.2322 0.158312 15.9202C0.599734 17.8917 1.45172 19.4626 2.82435 20.836C3.52994 21.542 4.50979 22.2658 5.22826 22.6117L5.55183 22.7675V25.1957C5.55183 27.8505 5.5378 27.7562 5.95108 27.8824C6.094 27.926 6.34748 27.6963 8.23449 25.8127L10.3572 23.694L13.2168 23.6936C16.3119 23.6932 16.8334 23.6522 17.9838 23.3192C19.6268 22.8435 20.9816 22.035 22.2073 20.7988C23.5592 19.4353 24.406 17.8674 24.8419 15.9202C24.996 15.2321 25.0003 15.1221 25 11.841C24.9997 8.6299 24.9927 8.43814 24.8524 7.82104C24.4268 5.94963 23.599 4.37877 22.3474 3.06786C20.653 1.29297 18.5098 0.264557 16.0765 0.0586289C15.1449 -0.0201866 9.78191 -0.019301 8.85568 0.0598552ZM15.289 4.01242C15.9657 4.1708 16.9757 4.63272 17.5653 5.0535C18.7007 5.86366 19.6228 7.16981 20.0345 8.55102C20.3522 9.61656 20.331 11.6454 19.9978 12.0568C19.8303 12.2637 19.4691 12.2562 19.2958 12.0421C19.1973 11.9204 19.1749 11.8197 19.2061 11.6391C19.2289 11.5066 19.2653 11.0151 19.287 10.5467C19.3202 9.82753 19.3044 9.60308 19.1849 9.10198C18.5823 6.57293 16.4925 4.88831 13.8387 4.79206C13.2622 4.77114 13.071 4.73947 12.9702 4.64812C12.7096 4.41235 12.8747 3.90962 13.2332 3.8475C13.5829 3.78694 14.7127 3.87754 15.289 4.01242ZM8.24259 5.49888C8.59873 5.66393 10.8259 7.91539 10.9669 8.25292C11.1696 8.73808 11.0565 9.41057 10.7087 9.78816C10.6262 9.87774 10.3742 10.0346 10.1487 10.1368C9.16978 10.5803 8.98613 11.3026 9.55528 12.4715C10.1024 13.5951 11.2466 14.7435 12.398 15.3243C12.8998 15.5775 12.9785 15.5973 13.3933 15.5747C14.0279 15.5402 14.3298 15.3299 14.6459 14.7021C14.948 14.1022 15.2621 13.8714 15.8325 13.8301C16.1304 13.8086 16.2872 13.8344 16.4912 13.9385C16.8218 14.1071 19.0241 16.3177 19.2065 16.664C19.3856 17.0038 19.3793 17.5768 19.1924 17.9378C18.9756 18.3568 17.431 19.8451 17.0259 20.0253C14.0321 21.3569 6.80355 15.5433 5.02894 10.3764C4.78343 9.66159 4.77151 9.58639 4.77001 8.74155C4.76865 7.95878 4.78568 7.82438 4.91688 7.5835C5.1149 7.21981 6.74919 5.60651 7.05048 5.47721C7.3778 5.33675 7.91391 5.34649 8.24259 5.49888ZM14.911 5.84452C17.0139 6.3824 18.5122 8.36675 18.4159 10.4867C18.3942 10.9656 18.3702 11.0538 18.2309 11.1665C18.0272 11.3315 17.8091 11.3315 17.632 11.1664C17.5138 11.0564 17.4873 10.9256 17.456 10.2979C17.4291 9.75798 17.3752 9.43952 17.2559 9.1152C16.6941 7.58718 15.3545 6.66388 13.6995 6.66388C13.204 6.66388 13.0921 6.64276 12.977 6.52763C12.7986 6.34929 12.8037 6.06489 12.9888 5.86782C13.1228 5.72531 13.1967 5.71019 13.7613 5.71019C14.1598 5.71019 14.5758 5.75882 14.911 5.84452ZM14.9982 7.85564C15.7631 8.23283 16.2638 8.85627 16.4855 9.7075C16.6289 10.258 16.6152 10.457 16.4201 10.652C16.0658 11.0064 15.6844 10.7969 15.6059 10.2049C15.5399 9.7075 15.4201 9.44953 15.0876 9.08876C14.7787 8.75368 14.2389 8.50313 13.8259 8.50313C13.3701 8.50313 13.1461 7.99338 13.4628 7.67669C13.6816 7.45789 14.3494 7.53568 14.9982 7.85564Z" fill="white" />
                        </svg>
                      </div>
                    </a>
                  )
                  break;

                default:
                  break;
              }
            })}
          </div>
        </div>

        <div className="Footer_column Footer_nav">
          <h4 className="title">Ссылки</h4>
          <ul>
            <li>
              <Link to={'/'}>
                <span>Главная</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <span>О нас</span>
              </Link>
            </li>
            <li>
              <Link to={'/news'}>
                <span>Новости</span>
              </Link>
            </li>
            <li>
              <Link to={'/events'}>
                <span>События</span>
              </Link>
            </li>
            <li>
              <Link to={'/contacts'}>
                <span>Контакты</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer_column Footer_contacts">
          <h4 className="title">Свяжитесь с нами</h4>
          <ul>
            <li>
              <a className="Footer_contact" href={"tel:" + getClearPhone(mainInfo.phone)}>
                <div className="icon">
                  <svg viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73239 19.1679C4.2688 20.2551 2.80431 21.3425 1.34082 22.4298C0.710853 22.8974 0.518651 23.738 0.883124 24.4333C2.73418 27.9666 6.97469 29.3995 10.5394 27.5363C17.8387 23.7208 22.7711 17.2822 24.5551 9.24126C25.4262 5.31447 22.9388 1.59306 19.0454 0.725652C18.2793 0.554709 17.5176 0.959099 17.2292 1.68924C16.5614 3.38527 15.8926 5.08236 15.2239 6.7784C14.9105 7.57406 15.1238 8.44098 15.7709 8.99926C16.6185 9.73168 17.466 10.4639 18.3135 11.1955C17.2467 15.2386 14.4275 18.9186 10.8015 21.001C9.87454 20.3732 8.94693 19.7455 8.01911 19.1178C7.31071 18.6384 6.41889 18.6581 5.73244 19.1678L5.73239 19.1679Z" fill="white" />
                  </svg>
                </div>
                <span>{mainInfo.phone}</span>
              </a>
            </li>
            <li>
              <a className="Footer_contact" href={"mailto:" + mainInfo.email}>
                <div className="icon">
                  <svg viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5941 3.68843L14.5944 10.6886L0.594635 3.68843V0.188477H28.5941V3.68843Z" fill="white" />
                    <path d="M0.594543 5.43872V21.1883H28.594V5.43872L14.5943 12.4388L0.594543 5.43872Z" fill="white" />
                  </svg>
                </div>
                <span>{mainInfo.email}</span>
              </a>
            </li>
            <li className="Footer_contact">
              <div className="icon">
                <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5962 0.188477C5.24361 0.188477 0.0942993 5.31145 0.0942993 11.6296C0.0942993 14.3074 1.00377 16.3742 3.10059 19.499C5.19571 22.6237 11.5962 31.1885 11.5962 31.1885C11.5962 31.1885 17.9968 22.6257 20.088 19.499C22.1866 16.3759 23.0943 14.3074 23.0943 11.6296C23.0945 5.31145 17.9452 0.188477 11.5962 0.188477ZM11.5962 15.9554C9.19495 15.9554 7.24842 14.0188 7.24842 11.6298C7.24842 9.24434 9.19495 7.3043 11.5962 7.3043C13.9974 7.3043 15.944 9.24427 15.944 11.6298C15.944 14.0188 13.9974 15.9554 11.5962 15.9554Z" fill="white" />
                </svg>
              </div>
              <span>{mainInfo.address}</span>
            </li>
          </ul>
        </div>

        <div className="Footer_column">
          <h4 className="title">Трендовые новости</h4>
          <div className="Footer_column_newsW">
            {getLatestNews(news, 'newDate').slice(0, 2).map((item) => {
              return (
                <div key={item.id} className="small_newCard">
                  <div className="img">
                    <img src={'../img/' + item.img} alt="" />
                  </div>
                  <div className="content">
                    <h5 className="title">{getCuttedString(item.title, 42)}</h5>
                    <Link to={'/news/' + item.id} className="button">
                      <Btn2 text={'Read More'} func={() => { }} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="Footer_copyright">
        © 2022 EAF is Powered  by 
        <a href="#">MIXTECHNOLOGY</a>
      </div>
    </footer>
  )
}