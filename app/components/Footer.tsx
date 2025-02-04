// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import bg from "public/images/logo/logo-black.png";


// function Footer() {
//   return (
//     <section id="footer">
//       <footer className="bg-white px-8 py-16 lg:py-24 text-center flex flex-col lg:flex-row lg:text-left gap-16 lg:justify-between lg:px-32">
//         <div className="space-y-6 lg:w-96">
//           <div className="space-y-4">
//             <div>
//               <Image
//                 src={bg}
//                 alt="logo"
//                 width={160}
//                 height={160}
//                 className="m-auto lg:m-0"
//               />
//             </div>
         
//           </div>
//           <div className="flex items-center gap-4 justify-center lg:justify-start">
//             <Link
//               href="https://www.facebook.com"
//               className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blu hover:text-white duration-300 ease-linear"
//             >
//               <i className="fa-brands fa-facebook-f"></i>
//             </Link>
//             <Link
//               href="https://www.twitter.com"
//               className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blu hover:text-white duration-300 ease-linear"
//             >
//              <i className="fa-brands fa-instagram"></i>

//             </Link>
           
//             <Link
//               href="https://www.youtube.com"
//               className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-blu hover:text-white duration-300 ease-linear"
//             >
//               <i className="fa-brands fa-youtube"></i>
//             </Link>
//           </div>
//           <div>
//             <p className="font-semibold">© {new Date().getFullYear()} MuscleAndHealth , All rights reserved.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
//           <div className="space-y-6">
//             <div className="relative">
//               <h1 className="font-bold text-2xl">Supplement Category </h1>
//               <span className="top-8 left-[5.75rem] lg:left-0 absolute w-16 h-[4px] bg-blu"></span>
//             </div>
//             <div className="flex flex-col gap-4 items-center lg:items-baseline">
//               <Link href="/" className="hover:text-blu hover:font-bold">
//               Protein Supplements
//               </Link>
//               <Link href="/" className="hover:text-blu hover:font-bold">
//               Amino Acids (BCAA & EAA)
//               </Link>
//               <Link href="/" className="hover:text-blu hover:font-bold">
//               Pre-Workout Supplements
//               </Link>
//               <Link href="/" className="hover:text-blu hover:font-bold">
//               Creatine 
//               </Link>
//               <Link href="/" className="hover:text-blu hover:font-bold">
//               Multivitamins & Omega-3
//               </Link>
//             </div>
//           </div>
//           <div className="space-y-6">
//             <div className="relative">
//               <h1 className="font-bold text-2xl">Contact us</h1>
//               <span className="top-8 left-[4.45rem] lg:left-0 absolute w-16 h-[4px] bg-blu"></span>
//             </div>
//             <div className="space-y-2">
//               <p>
//                 <span className="font-bold">addr</span>delhi
//               </p>
//               <p>
//                 <span className="font-bold">phone</span>+91 8686545253
//               </p>
//               <p>
//                 <span className="font-bold">email</span>info.musclehealth@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// }

// export default Footer;


import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "public/images/logo/logo-black.png";

function Footer() {
  return (
    <section id="footer">
      {/* Main Footer Section */}
      <div className="bg-white">
        <footer className="px-6 py-12 lg:py-20 text-center flex flex-col lg:flex-row lg:text-left gap-12 lg:justify-between lg:px-32">
          {/* Left Section - Logo & Social Links */}
          <div className="space-y-6 lg:w-96">
            <div className="space-y-4">
              <div>
                <Image
                  src={bg}
                  alt="logo"
                  width={160}
                  height={160}
                  className="m-auto lg:m-0"
                />
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
                <Link href="/" className="hover:text-blue-500 font-medium">
                  Protein Supplements
                </Link>
                <Link href="/" className="hover:text-blue-500 font-medium">
                  Amino Acids (BCAA & EAA)
                </Link>
                <Link href="/" className="hover:text-blue-500 font-medium">
                  Pre-Workout Supplements
                </Link>
                <Link href="/" className="hover:text-blue-500 font-medium">
                  Creatine
                </Link>
                <Link href="/" className="hover:text-blue-500 font-medium">
                  Multivitamins & Omega-3
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="font-bold text-xl">Contact Us</h1>
                <span className="absolute top-8 left-1/2 lg:left-0 w-16 h-[4px] bg-blue-500 transform -translate-x-1/2 lg:translate-x-0"></span>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <p>
                  <span className="font-bold">Address: </span>Delhi, India
                </p>
                <p>
                  <span className="font-bold">Phone: </span>+91 8686545253
                </p>
                <p>
                  <span className="font-bold">Email: </span>
                  info.musclehealth@gmail.com
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Sub-Footer Section */}
        <div className="bg-gray-300 text-black text-center py-4">
          <p className="font-semibold">
            © {new Date().getFullYear()} <span className="text-blu"> MuscleAndHealth</span> . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
