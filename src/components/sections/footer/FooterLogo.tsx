import CommonWrapper from '@/components/common/CommonWrapper';
import React from 'react';
import logo from '../../../app/Logo.png';
import { SlSocialFacebook } from 'react-icons/sl';
import { IoLogoInstagram } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import strategy from '../../../app/List-2.png';
import image1 from '../../../app/image-1.png';
import image2 from '../../../app/image-2.png';
import subs from '../../../app/Subscribe.png';

const FooterLogo = () => {
  return (
    <div className="relative bg-[url('/images/Footer-bg.png')] bg-cover bg-center bg-no-repeat py-20">
      <CommonWrapper>
        <div className="w-full flex flex-row gap-x-1">
          <div className="bg-[#110431] w-1/3 p-5 items-center justify-center">
            <img src={logo.src} alt="" />
            <p className="text-white">
              Introducing our team of talented and skilled professionals who are
              ready to increase your productivity and bring your business.
            </p>
            <p className="text-gray-400">We Are Available !!</p>
            <p className="text-white">Mon-Sat: 10:00am - 08:00pm</p>
            <div className="text-white text-2xl py-5 flex flex-row">
              <div className="p-2 bg-gray-800 rounded-md mx-1">
                <SlSocialFacebook />
              </div>
              <div className="p-2 bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] rounded-md">
                <BsTwitterX />
              </div>
              <div className="p-2 bg-gray-800 rounded-md mx-1">
                <IoLogoInstagram />
              </div>
              <div className="p-2 bg-gray-800 rounded-md mx-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-[#110431] text-white p-5 flex flex-row items-center justify-between">
            <div>
              <h3 className="font-bold ">Quick Links</h3>
              <div className="text-base py-2">
                <p>About Company</p>
                <img src={strategy.src} alt="" />
                <p>Investor Presentation</p>
                <p>Investor Career</p>
                <p>Meet our Team</p>
                <p>Get in Touch</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold ">Our Services</h3>
              <div className="text-base py-2">
                <p>Bussiness Councilling</p>
                <p>Finance Stategy</p>
                <p>Investor Presentation</p>
                <p>Investor Career</p>
                <p>Marketing Analysis</p>
                <p>Tax Preparation</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Upcoming Event</h3>
              <div className="text-base py-2">
                <div className="flex flex-row gap-x-3">
                  <img className="w-10 h-10" src={image1.src} alt="" />
                  <div>
                    <p>Bussiness Councilling</p>
                    <p className="text-gray-400">26 March, USA</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <img className="w-10 h-10" src={image2.src} alt="" />
                  <div>
                    <p>Email Marketing</p>
                    <p className="text-gray-400">30 January, London</p>
                  </div>
                </div>
                <div className="flex flex-rowm  gap-x-3">
                  <img className="w-10 h-10" src={image1.src} alt="" />
                  <div>
                    <p>Bussiness Councilling</p>
                    <p className="text-gray-400">16 May, Maxico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={subs.src} alt="" />
        <div className="mt-10 flex items-center justify-between">
          <div className="text-white">
            <p>
              @ 20224{' '}
              <span className="bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] bg-clip-text text-transparent">
                Rainbow Themes
              </span>{' '}
              All Rights Reserved.
            </p>
          </div>
          <div className="text-white">
            <p>Terms & Conditions . Privancy Policy . Support</p>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default FooterLogo;
