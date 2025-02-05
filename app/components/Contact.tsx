import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="py-16 lg:py-24 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-0 max-w-screen-xl m-auto">
          <div className="space-y-8 mx-8">
            <h2 className="text-black text-[2rem] font-bold leading-[1.2]">
              We are here to help you! To Shape Your Body.
            </h2>
            <p>
              At MuscleAndHealth, we are committed to fueling your fitness journey with
              top-quality gym supplements. Our carefully curated selection of
              protein powders, pre-workouts, amino acids, and vitamins is
              designed to help you build muscle, enhance endurance, and achieve
              peak performance. Whether you're looking to bulk up, stay
              energized, or recover faster, we have the perfect supplements to
              support your goals.
            </p>
           
          </div>
          <div className="flex flex-col gap-12 mx-8 p-8 bg-[#f8f8f8] relative">
            <h3 className="text-2xl font-bold">Leave Us Your Info</h3>
            <span className="bg-blu w-16 h-1 absolute top-[4.5rem]"></span>
            <div className="flex flex-col gap-6">
              <input
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Full Name *"
                type="text"
              />
              <input
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Email Address *"
                type="email"
              />
            
              <textarea
                placeholder="Comment"
                className="w-full py-3 px-5 h-[8rem] text-[0.875rem] border border-[#e4e4e4]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-4 px-8 font-bold text-[0.875rem] uppercase self-center"
            >
              submit now
            </button>
          </div>
        </div>
        <div className="mt-16">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
            allowFullScreen={false}
            loading="lazy"
            title="map"
            className="w-full h-[30rem] border-0"
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.36756218784!2d77.28379180996347!3d28.61874398460721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52e6266e0dd%3A0xe7a64fde088797ef!2sMuscle%20%26%20Health!5e0!3m2!1sen!2sin!4v1738687601091!5m2!1sen!2sin" width="600" height="450" className="w-full h-[30rem] border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
