
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import bg from "public/images/logo/logo-black.png";
// import qrCode from "public/images/QR_Code/WhatsAppqr.png"; // QR Code Image Path

// function Footer() {
//   return (
//     <section id="footer">
//       {/* Main Footer Section */}
//       <div className="bg-white">
//         <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32">
//           {/* Left Section - Logo & Social Links */}
//           <div className="space-y-6 lg:w-96">
//             <div className="space-y-4">
//               <div>
//                 <Link href="/">
//                   <Image
//                     src={bg}
//                     alt="logo"
//                     width={160}
//                     height={160}
//                     className="m-auto lg:m-0"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex items-center gap-4 justify-center lg:justify-start">
//               <Link
//                 href="https://www.facebook.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-facebook-f"></i>
//               </Link>
//               <Link
//                 href="https://www.instagram.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-instagram"></i>
//               </Link>
//               <Link
//                 href="https://www.youtube.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-youtube"></i>
//               </Link>
//             </div>
//           </div>

//           {/* Footer Links Section */}
//           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
//             {/* Supplement Category */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Supplement Category</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="flex flex-col gap-4 items-center lg:items-baseline">
//                 <Link
//                   href="#SupplementsSection"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.querySelector(
//                       "#SupplementsSection"
//                     );
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="hover:text-blue-500 font-medium"
//                 >
//                   Protein Supplements
//                 </Link>
//                 <Link
//                   href="#SupplementsSection"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.querySelector(
//                       "#SupplementsSection"
//                     );
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="hover:text-blue-500 font-medium"
//                 >
//                 {/* <Link href="/" className="hover:text-blue-500 font-medium"> */}
//                   Amino Acids (BCAA & EAA)
//                 </Link>

//                 <Link
//                   href="#SupplementsSection"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.querySelector(
//                       "#SupplementsSection"
//                     );
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="hover:text-blue-500 font-medium"
//                 >
//                 {/* <Link href="/" className="hover:text-blue-500 font-medium"> */}
//                   Pre-Workout Supplements
//                 </Link>
//                 <Link
//                   href="#SupplementsSection"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.querySelector(
//                       "#SupplementsSection"
//                     );
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="hover:text-blue-500 font-medium"
//                 >
//                 {/* <Link href="/" className="hover:text-blue-500 font-medium"> */}
//                   Creatine
//                 </Link>
//                 <Link
//                   href="#SupplementsSection"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.querySelector(
//                       "#SupplementsSection"
//                     );
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="hover:text-blue-500 font-medium"
//                 >
//                 {/* <Link href="/" className="hover:text-blue-500 font-medium"> */}
//                   Multivitamins & Omega-3
//                 </Link>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Contact Us</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="space-y-4 text-center lg:text-left">
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Address: </span>Patparganj Road,
//                   New Delhi 110092, DL, India
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Phone: </span>+91 9999596220
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Email: </span>
//                   info@muscleandhealth.in
//                 </p>

//                 {/* WhatsApp QR Code */}
//                 <div className="flex justify-center lg:justify-start">
//                   <Image
//                     src={qrCode}
//                     alt="WhatsApp QR Code"
//                     width={100}
//                     height={100}
//                     className="border rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>

//         {/* Sub-Footer Section */}
//         <div className="bg-gray-300 text-black text-center py-4">
//           <p className="font-semibold">
//             © {new Date().getFullYear()}
//             <span className="text-blu">
//               {" "}
//               <Link href="/" className="inline-block">
//                 MuscleAndHealth
//               </Link>{" "}
//             </span>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;


// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function Footer() {
//   return (
//     <section id="footer">
//       {/* Main Footer Section */}
//       <div className="bg-white">
//         <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32">
//           {/* Left Section - Logo & Social Links */}
//           <div className="space-y-6 lg:w-96">
//             <div className="space-y-4">
//               <div>
//                 <Link href="/">
//                   <Image
//                     src="/images/logo/logo-black.png" // ✅ FIXED: Using direct path
//                     alt="logo"
//                     width={160}
//                     height={160}
//                     className="m-auto lg:m-0"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex items-center gap-4 justify-center lg:justify-start">
//               <Link
//                 href="https://www.facebook.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-facebook-f"></i>
//               </Link>
//               <Link
//                 href="https://www.instagram.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-instagram"></i>
//               </Link>
//               <Link
//                 href="https://www.youtube.com"
//                 className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
//               >
//                 <i className="fa-brands fa-youtube"></i>
//               </Link>
//             </div>
//           </div>

//           {/* Footer Links Section */}
//           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
//             {/* Supplement Category */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Supplement Category</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="flex flex-col gap-4 items-center lg:items-baseline">
//                 {["Protein Supplements", "Amino Acids (BCAA & EAA)", "Pre-Workout Supplements", "Creatine", "Multivitamins & Omega-3"].map((category, index) => (
//                   <Link
//                     key={index}
//                     href="#SupplementsSection"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       const section = document.querySelector("#SupplementsSection");
//                       if (section) {
//                         section.scrollIntoView({ behavior: "smooth" });
//                       }
//                     }}
//                     className="hover:text-blue-500 font-medium"
//                   >
//                     {category}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-6">
//               <div className="relative">
//                 <h1 className="font-bold text-xl">Contact Us</h1>
//                 <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
//               </div>
//               <div className="space-y-4 text-center lg:text-left">
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Address: </span>Patparganj Road, New Delhi 110092, DL, India
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Phone: </span>+91 9999596220
//                 </p>
//                 <p className="w-72 mx-auto lg:mx-0">
//                   <span className="font-bold">Email: </span>
//                   info@muscleandhealth.in
//                 </p>

//                 {/* WhatsApp QR Code */}
//                 <div className="flex justify-center lg:justify-start">
//                   <Image
//                     src="/images/QR_Code/WhatsAppqr.png" // ✅ FIXED: Using direct path
//                     alt="WhatsApp QR Code"
//                     width={100}
//                     height={100}
//                     className="border rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>

//         {/* Sub-Footer Section */}
//         <div className="bg-gray-300 text-black text-center py-4">
//           <p className="font-semibold">
//             © {new Date().getFullYear()}
//             <span className="text-blu">
//               {" "}
//               <Link href="/" className="inline-block">
//                 MuscleAndHealth
//               </Link>{" "}
//             </span>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;



"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const section = document.getElementById("SupplementsSection");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="footer">
      {/* Main Footer Section */}
      <div className="bg-white">
        <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32">
          {/* Left Section - Logo & Social Links */}
          <div className="space-y-6 lg:w-96">
            <div className="space-y-4">
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo/logoblack.png"
                    alt="logo"
                    width={160}
                    height={160}
                    className="m-auto lg:m-0"
                  />
                </Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Link
                href="https://www.facebook.com"
                className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.instagram.com"
                className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                href="https://www.youtube.com"
                className="bg-gray-200 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Supplement Category */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="font-bold text-xl">Supplement Category</h1>
                <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
              </div>
              <div className="flex flex-col gap-4 items-center lg:items-baseline">
                {[
                  "Protein Supplements",
                  "Amino Acids (BCAA & EAA)",
                  "Pre-Workout Supplements",
                  "Creatine",
                  "Multivitamins & Omega-3",
                ].map((category, index) => (
                  <Link key={index} href="#SupplementsSection" onClick={handleScroll} className="hover:text-blue-500 font-medium">
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="font-bold text-xl">Contact Us</h1>
                <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <p className="w-72 mx-auto lg:mx-0">
                  <span className="font-bold">Address: </span>Patparganj Road, New Delhi 110092, DL, India
                </p>
                <p className="w-72 mx-auto lg:mx-0">
                  <span className="font-bold">Phone: </span>+91 9999596220
                </p>
                <p className="w-72 mx-auto lg:mx-0">
                  <span className="font-bold">Email: </span>
                  info@muscleandhealth.in
                </p>

                {/* WhatsApp QR Code */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/QR_Code/WhatsAppqr.png"
                    alt="WhatsApp QR Code"
                    width={100}
                    height={100}
                    className="border rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Sub-Footer Section */}
        <div className="bg-gray-300 text-black text-center py-4">
          <p className="font-semibold">
            © {year}{" "}
            <span className="text-blu">
              <Link href="/" className="inline-block">
                MuscleAndHealth
              </Link>{" "}
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
