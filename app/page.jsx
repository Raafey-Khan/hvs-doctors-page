"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

return (
    <div className="tab-content">
      <Link href="#about-section" passHref legacyBehavior>
        <a className="tab-1 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">About</p>
        </a>
      </Link>
      <Link href="#credentials-section" passHref legacyBehavior>
        <a className="tab-2 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">Credentials</p>
        </a>
      </Link>
      <Link href="#Condition-&-Treatment-section" passHref legacyBehavior>
        <a className="tab-3 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">Condition & Treatment</p>
        </a>
      </Link>
      <Link href="#Locations-section" passHref legacyBehavior>
        <a className="tab-4 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">Locations</p>
        </a>
      </Link>
      <Link href="#publications-section" passHref legacyBehavior>
        <a className="tab-5 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">Publications</p>
        </a>
      </Link>
      <Link href="#Associations-&-Memberships-section" passHref legacyBehavior>
        <a className="tab-6 bg-white w-[267px] h-[52px] flex justify-center items-center mb-3">
          <p className="text-[15px] font-[500]">Associations & Memberships</p>
        </a>
      </Link>
    </div>
);
}

export default function Home() {


  return (
 <>
 <main className="bg-[#f6f6f6]">
  <section className="bread-cum-section">
    <div className="container">
    <div className="bread-cum h-[61px] bg-[#EEEEEE] w-full flex justify-start p-4 px-6 gap-6">
    <div className="bread-cum-home-img">
    <img src="images/house.png" alt="" />
      
    </div>

    <div className="bread-cum-txt flex gap-6 text-[15px] text-[#454545] font-[600]">
      <div>
        Home
      </div>

    <div>
      Doctors
    </div>

     <div>
      Dr shawn Mendens
     </div>
    </div>




    
  </div>
    </div>
  </section>
 
  <section className="Banner-section">
    <div className="Container">
    <div className="Banner-section w-full h-[473px] bg-[url('../public/images/bg-banner.png')] bg-no-repeat bg-center bg-cover flex px-14">

<div className="Banner-Content-text basis-[50%] flex flex-col justify-center ml-6  h-full w-full text-[#0A5E65]">
  <div className="Bannner-header-text mb-2">
    <h2 className=" text-[40px] uppercase font-[600]">Dr shawn mendes</h2>
  </div>

  <div className="Banner-about-text text-[18px] font-[400]  mb-4 ">
  Staff Physician, Cardiovascular Medicine, Heart,
  <span className="block">
  Vascular & Thoracic Insitute
  </span>
  </div>

  <div className="Language-selection-inner mb-4 flex gap-6 w-fit  justify-center items-center">
    <div>
    <h4 className="text-[18px] font-[600]">Languges: </h4>
    </div>
    <div className="flex gap-2">
    <span className="text-[14px] font-[700] bg-white px-6 rounded-lg py-1">English</span>
    <span className="text-[14px] font-[700] bg-white px-6 rounded-lg py-1">Spanish</span>
    </div>
  </div>

  <div className="Appointment flex w-fit items-center mb-10">
    <h3 className="font-[600] text-[18px]">By Appointment: </h3>
    <span className=" ml-2 font-[400] text-[17px]">Monday, </span>
    <span className="font-[400] text-[17px]">Thursday & </span>
    <span className="font-[400] text-[17px]">Saturday</span>
  </div>

  <div className="Banner-buttons flex gap-4">
    <button className="border border-gray-700 w-[217px] h-[50px] rounded-3xl font-[600]">
      Request an Appointment
    </button>

    <button className="w-[217px] h-[50px] bg-white rounded-3xl flex justify-center items-center">
      <img src="images/btn-img.png" alt="" />
    </button>
  </div>
</div>

<div className="Banner-img basis-[50%]  h-ful w-full">
  <img className=" h-full" src="images/doctor-banner-img.png" alt="" />
</div>
</div>
    </div>
  </section>
  

<div className="tabs-and-aboutme-section flex mx-auto px-8 mt-14 gap-10">
          <div className="tabs basis-[20%] h-full w-full sticky  top-8">
            <MyComponent />
          </div>


   <section className="About-me h-full basis-[80%] ">
    <section id="about-section" className="about-section">
      <div className="container">
      <h2 className=" font-[600] text-[24px] text-[#363636] mb-4">
      About me
    </h2>

    <div className="About-me-txt mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div className="About-video mb-4">
    <img src="images/video-img.png" alt="" />
    </div>
      </div>
    </section>
   

   
     <section id="credentials-section" className="credentials-section">
      <div className="container">
      <h2 className=" font-[600] text-[24px] text-[#363636] mt-2 mb-4">
      Credentils
      </h2>
      <p className="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p className="mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <h2 className=" font-[600] text-[24px] text-[#363636] mb-4">
      Table of Content
      </h2>

      <div className="Tabel mb-6  w-[823px] h-full flex  ">
        <div className="div-1 basis-[50%] border-r border-gray-400 text-center ">
          <p className="bg-[#21BDCA] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
        </div>
        <div className="div-2 basis-[50%] text-center">
        <p className="bg-[#21BDCA] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsume Dolor</p>
          <p className="bg-[#FFFFFF] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
          <p className="bg-[#E9E9E9] h-[60px] flex justify-center items-center">Lorem Ipsum Dolor</p>
        </div>
      </div>
      </div>
     </section>
    
      
    
    
   
      <section id="Condition-&-Treatment-section" className="conditions-treatment-section">
        <div className="container">
        <h2 className=" font-[600] text-[24px] text-[#363636] mb-4">
      Content & Treatment
      </h2>

      <div className="Content-Treatment h-full  w-[823px] border-b-none border-2 p-5">
      <h2 className=" font-[600] text-[24px] text-[#363636]">
      Conditions
      </h2>
      <div className="flex gap-16">
      <div className=" mt-3">
        <li>abdominal aortic aneurysm</li>
        <li>abdominal aortic aneurysm </li>
        <li>abdominal aortic aneurysm</li>
      </div>
      <div className=" mt-3">
        <li>aortic aneurysm aortic </li>
        <li>disease aortic</li>
        <li>disease aortic </li>
      </div>
      <div className=" mt-3">
        <li>abdominal aortic aneurysm</li>
        <li>aortic aneurysm aneurysm</li>
        <li>abdominal aortic </li>
      </div>
      </div>

      <h2 className=" font-[600] text-[24px] text-[#363636] mt-10">
      Treatments
      </h2>
      <div className="flex gap-16">
      <div className=" mt-3">
        <li>abdominal aortic aneurysm</li>
        <li>abdominal aortic aneurysm </li>
        <li>abdominal aortic aneurysm</li>
      </div>
      <div className=" mt-3">
        <li>aortic aneurysm aortic </li>
        <li>disease aortic</li>
        <li>disease aortic </li>
      </div>
      <div className=" mt-3">
        <li>abdominal aortic aneurysm</li>
        <li>aortic aneurysm aneurysm</li>
        <li>abdominal aortic </li>
      </div>
      </div>


      
      
      </div>

      <div className=" w-[823px]   border-2 h-14 flex justify-center items-center">
      <p >View All Conditions and Treatment</p>
      </div>
        </div>
      </section>
      

      
     <section id="Locations-section" className="location-section">
      <div className="container">
      <div className="location mb-2 p-4">
      <h2 className=" font-[600] text-[24px] text-[#363636] ">
      Locations
      </h2>



    <div className="location-flex h-full flex  items-center gap-12 ">
      <div className="h-full ">
      <div class="h-[286px]   overflow-hidden w-[300px]  rounded-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.7805937076932!2d-0.903048924336784!3d52.24736875637985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770eea1465e283%3A0x42da424253c69848!2s42%20Semilong%20Rd%2C%20Semilong%2C%20Northampton%20NN2%206BU%2C%20UK!5e0!3m2!1sen!2sin!4v1712657999732!5m2!1sen!2sin"
    class="w-full h-[350px] border-0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

      </div>

      <div className="flex flex-col ">
        <div className="janco hospital-1 bg-white mb-10 rounded-xl h-[123px] border-[#21BDCA] border  p-9 flex justify-center items-center gap-10">

        <div className="hospital-name-address">
          <p className=" font-semibold mb-2 text-[15px]">Janco Hospital</p>
           <p className="text-[14px]">164-178 Cromwell Road London <span className="block"> SWS OTU United Kingdom  </span> </p>
        </div>

        <div className="contact-detail-book  h-full w-[130px]  flex flex-col justify-center items-center ">
          <div className="contact-details rounded-lg mb-4 h-[70px] p-1 w-[150px] border border-[#21BDCA] flex justify-center items-center">
            <img src="images/address-logo.png" alt="" />

            <p>contact details</p>
          </div>
          <div className="contact-details rounded-lg mb-2 h-[70px] p-1 w-[150px] border border-[#F05F6E] flex justify-center items-center">
            <img src="images/calender-logo.png" alt="" />

            <p>contact details</p>
          </div>
        </div>
        </div>

        <div className="janco hospital-2 bg-white rounded-xl h-[123px] border  mb-3 p-9 flex justify-center items-center gap-10">

<div className="hospital-name-address">
  <p className=" font-semibold mb-2 text-[15px]">Janco Hospital</p>
   <p className="text-[14px]">164-178 Cromwell Road London <span className=" block"> SWS OTU United Kingdom</span></p>
</div>

<div className="contact-detail-book  h-full w-[130px] bg-white flex flex-col justify-center items-center ">
  <div className="contact-details rounded-lg mb-4 h-[70px] p-1 w-[150px] border border-[#21BDCA] flex justify-center items-center">
    <img src="images/address-logo.png" alt="" />

    <p>contact details</p>
  </div>
  <div className="contact-details rounded-lg mb-2 h-[70px] p-1 w-[150px] border border-[#F05F6E] flex justify-center items-center">
    <img src="images/calender-logo.png" alt="" />

    <p>contact details</p>
  </div>
</div>
</div>


      </div>
    </div>

  
      </div>
      </div>
     </section>
      
      

      


   </section>
  </div>
 </main>
 </>
  );
}
