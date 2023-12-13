import React from "react";
import { GiClockwork } from "react-icons/gi";
import { BsTelephoneX } from "react-icons/bs";
import "./style.css";

const Contact = () => {
  return (
    <div className="">
      <div className=" relative  h-[500px] flex justify-center items-center font">
        <img
          src="https://images.pexels.com/photos/6033985/pexels-photo-6033985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover h-full w-full "
        />
        <div className="absolute z-[1000]  m-10 p-3 md:p-5 background rounded-md ">
          <div
            className=" font-medium md:flex justify-center  gap-5 "
            data-aos="flip-up "
          >
            <div className="text text-gray-500">
              <h1 className="text-4xl mb-5 font">Contact With Us</h1>
              <h1 className="text text-gray-500 text-2xl">Name</h1>
              <input type="text" className="mb-3 px-20 rounded-sm" />
              <br />
              <h1>Email</h1>
              <input type="text" className="mb-3 px-20 rounded-sm" />
              <br />
              <h1>Phone</h1>
              <input type="text" className="mb-3 px-20 rounded-sm" />
              <br />
              <button className="border text-base px-3 py-1 rounded-sm bg-gray-50 font-bold uppercase text-gray-500">
                Submit
              </button>
            </div>

            <div className="text text-gray-500">
              <h1 className="text-2xl mb-3">Detail Contact</h1>
              <div className="flex justify-center items-center gap-5 mb-3">
                <div className="text-6xl">
                  <GiClockwork></GiClockwork>
                </div>
                <div>
                  <h1 className="font-semibold">Office Hours</h1>
                  <p className="font-medium">
                    Monday through Friday 8:00am - 6:00pm
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-5">
                <div className="text-5xl">
                  <BsTelephoneX></BsTelephoneX>
                </div>
                <div>
                  <h1 className="font-semibold tracking-[.1em]">Phone</h1>
                  <p className="font-medium">
                    Phone and Fax +621 7777 2222 (phone) <br /> +621 7777 3333
                    (fax)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-3">
        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-gray-500">
            <div className="flex justify-center items-center h-[100vh] md:h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Meta</h1>
                <p>
                  Just like a physical office, we have a virtual space in the
                  metaverse. Customers can visit our digital headquarters, where
                  they can interact with virtual representatives, attend
                  meetings, or explore our services and products in an immersive
                  environment.
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-gray-500">
            <div className="flex justify-center items-center h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Twitter</h1>
                <p>
                  By including our Twitter handle (e.g., @OurBusinessName) in
                  your tweet, you can publicly communicate with us. Other users
                  will be able to see your message, and we will be notified of
                  your mention.If you prefer a private conversation, you can
                  send us a Direct Message. To do this, navigate to our profile.
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact rounded-md m-10 relative">
          <img
            src="https://images.pexels.com/photos/6373486/pexels-photo-6373486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            className="w-[100%] h-[100%]"
          />

          <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-gray-500">
            <div className="flex justify-center items-center h-[70vh]">
              <div className="p-6">
                <h1 className="text-4xl mb-5">Instagram</h1>
                <p>
                  The Stray Kids members have started to open individual
                  Instagram accounts! On August 2, Stray Kids' official Twitter
                  account announced the launch of personal Instagram accounts by
                  Bang Chan, Changbin, Hyunjin, Felix, Seungmin, and I.N. Bang
                  Chan Official Instagram is now open!
                </p>
                <button className="border w-full mt-5 rounded-3xl py-1">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
