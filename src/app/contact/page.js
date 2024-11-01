"use client";
import { SidebarDemo } from "@/components/Sidebar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const btn = document.getElementById("send");
    e.preventDefault();
    btn.innerHTML = "Sending...";

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          btn.innerHTML = "Send Email";
          alert("Your message has been sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          btn.innerHTML = "Resend Email";
          alert("Your message was not sent");
        }
      );
  };

  return (
    <SidebarDemo>
      <div className="flex flex-col p-4  md:p-10 lg:pl-48 overflow-y-auto lg:pt-24 lg:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900  gap-2 h-screen w-full">
        <div className="flex items-center gap-4">
          <Image src="/contact-us.png" width={40} height={40} />
          <h1
            data-aos="fade-left"
            className="text-bold text-3xl   w-fit text-gray-600"
          >
            Get in Touch
          </h1>
        </div>
        <p className="lg:w-2/3 text-gray-600">
          Contact me on X , Whatsapp or through this form. Let&apos;s bring your
          product to life.
        </p>

        <div className=" lg:w-2/3     ">
          <form ref={form} action="submit" onSubmit={sendEmail}>
            <div className="flex gap-4 py-4">
              <input
                type="text"
                id="name"
                placeholder="First Name"
                required
                className="block w-full outline-none   h-12 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:ring-inset  sm:text-sm sm:leading-6"
              />
              <input
                type="text"
                id="description"
                placeholder="Last Name"
                required
                className="block w-full h-12 outline-none rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex gap-4 py-4">
              <input
                type="text"
                id=""
                required
                placeholder="Email"
                className="block w-full h-12 outline-none rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
              />
              <input
                type="text"
                id=""
                required
                placeholder="Phone Number"
                className="block w-full h-12 outline-none rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="py-4">
              <input
                id="type"
                required
                placeholder="Service Required  e.g 'Full-stack web app'"
                className="block w-full h-12 outline-none rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="py-4">
              <textarea
                type="text"
                placeholder="Service Description"
                required
                className="block w-full h-24 outline-none rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
              />
            </div>
            <button value="Send Message" className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div
                id="send"
                className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white hover:bg-transparent"
              >
                Send Message
              </div>
            </button>
          </form>
        </div>
        <a
          href="https://www.flaticon.com/free-icons/contact-us"
          title="contact us icons"
          className="absolute  bottom-0 text-gray-300"
        >
          Icon created by pojok d - Flaticon
        </a>
      </div>
    </SidebarDemo>
  );
};

export default Contact;
