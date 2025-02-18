// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useEffect, useRef } from "react";
// // import { useTogglerContext } from "../context/toggler";
// // import { usePathname } from "next/navigation";

// // function Header() {
// //   const { setMobileNavbar, setAboutSidebar } = useTogglerContext();
// //   const headerRef = useRef<HTMLElement>(null);

// //   return (
// //     <section id="header">
// //       <header
// //         ref={headerRef}
// //         className="w-full text-3xl text-white font-bold flex justify-between items-center py-2 px-8 absolute top-0 left-0 z-50"
// //         style={{ background: "transparent !important" }} 
// //       >
// //         <div>
// //           <Link href="/">
// //             <Image
// //               src="/images/logo/logoblack.png" // ✅ Fixed: Directly referencing from `public/`
// //               alt="logo"
// //               width={180}
// //               height={180}
// //             />
// //           </Link>
// //         </div>
// //         <div className="hidden lg:flex items-center gap-6">
// //           <Link
// //             href="/"
// //             className={`hover:text-blu ${usePathname() === "/" ? "text-blu" : ""} duration-300 ease-linear`}
// //           >
// //             Home
// //           </Link>
// //           <Link
// //             href="/about"           
// //             className={`hover:text-blu ${usePathname() === "/about" ? "text-blu" : ""} duration-300 ease-linear`}
// //           >
// //             About
// //           </Link>
// //           <Link
// //             href="/contact"
// //             className={`hover:text-blu ${usePathname() === "/contact" ? "text-blu" : ""} duration-300 ease-linear`}
// //           >
// //             Contact
// //           </Link>
// //         </div>
// //         <div className="flex items-center gap-6">
// //           <button
// //             onClick={() => setMobileNavbar(true)}
// //             className="text-2xl hover:text-blu ease-in duration-200 lg:hidden"
// //           >
// //             <i className="fa-solid fa-bars"></i>
// //           </button>
// //           <Link
// //             href="/register"
// //             className="text-2xl hover:text-blu ease-in duration-200"
// //           >
// //             <i className="fa-regular fa-user"></i>
// //           </Link>
// //         </div>
// //       </header>
// //     </section>
// //   );
// // }

// // export default Header;



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useTogglerContext } from "../context/toggler";
// import { usePathname } from "next/navigation";

// function Header() {
//   const { setMobileNavbar } = useTogglerContext();
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Search Query:", searchQuery);
//     // Implement search functionality here
//   };

//   return (
//     <section id="header">
//       <header className="w-full text-3xl text-white font-bold flex justify-between items-center py-2 px-8 absolute top-0 left-0 z-50">
//         {/* Logo */}
//         <div>
//           <Link href="/">
//             <Image
//               src="/images/logo/logoblack.png"
//               alt="logo"
//               width={150}
//               height={150}
//             />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden lg:flex items-center gap-6">
//           <Link
//             href="/"
//             className={`hover:text-blu ${usePathname() === "/" ? "text-blu" : ""} duration-300 ease-linear`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className={`hover:text-blu ${usePathname() === "/about" ? "text-blu" : ""} duration-300 ease-linear`}
//           >
//             About
//           </Link>
//           <Link
//             href="/contact"
//             className={`hover:text-blu ${usePathname() === "/contact" ? "text-blu" : ""} duration-300 ease-linear`}
//           >
//             Contact
//           </Link>
//         </div>

//         {/* 🔍 Beautiful Search Bar */}
//         <form 
//           onSubmit={handleSearch} 
//           className="hidden lg:flex items-center bg-white text-black rounded-full shadow-lg px-4 py-2 border border-gray-300 w-80 transition-all duration-300 hover:border-blue-500 focus-within:border-blue-500"
//         >
//           <input
//             type="text"
//             className="bg-transparent flex-1 p-2 outline-none text-sm placeholder-gray-500 text-black focus:ring-0"
//             placeholder="Search your supplements..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button 
//             type="submit" 
//             className="text-gray-500 px-3 hover:text-blue-500 transition duration-200"
//           >
//             <i className="fa fa-search text-lg"></i>
//           </button>
//         </form>

//         {/* Mobile Menu & User Icon */}
//         <div className="flex items-center gap-6">
//           <button
//             onClick={() => setMobileNavbar(true)}
//             className="text-2xl hover:text-blu ease-in duration-200 lg:hidden"
//           >
//             <i className="fa-solid fa-bars"></i>
//           </button>
//           <Link href="/register" className="text-2xl hover:text-blu ease-in duration-200">
//             <i className="fa-regular fa-user"></i>
//           </Link>
//         </div>
//       </header>
//     </section>
//   );
// }

// export default Header;


"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTogglerContext } from "../context/toggler";
import { usePathname } from "next/navigation";

function Header() {
  const { setMobileNavbar } = useTogglerContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Implement search functionality here
  };

  return (
    <section id="header">
      <header className="w-full text-3xl text-white font-bold flex justify-between items-center py-2 px-8 absolute top-0 left-0 z-50">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo/logoblack.png"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-blu ${usePathname() === "/" ? "text-blu" : ""} duration-300 ease-linear`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-blu ${usePathname() === "/about" ? "text-blu" : ""} duration-300 ease-linear`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`hover:text-blu ${usePathname() === "/contact" ? "text-blu" : ""} duration-300 ease-linear`}
          >
            Contact
          </Link>
        </div>

        {/* 🔍 Beautiful Search Bar */}
        <form 
          onSubmit={handleSearch} 
          className="hidden lg:flex items-center bg-white text-black rounded-full shadow-lg px-4 py-2 border border-gray-400 w-96 outline outline-2 outline-offset-2 outline-gray-300 transition-all duration-300 hover:border-blue-500 focus-within:border-blue-500 focus-within:outline-blue-500"
        >
          <input
            type="text"
            className="bg-transparent flex-1 p-2 outline-none text-sm placeholder-gray-500 text-black focus:ring-0 caret-blue-500 caret-w-2"
            placeholder="Search your supplements..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="text-gray-500 px-3 hover:text-blue-500 transition duration-200"
          >
            <i className="fa fa-search text-xl"></i>
          </button>
        </form>

        {/* Mobile Menu & User Icon */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileNavbar(true)}
            className="text-2xl hover:text-blu ease-in duration-200 lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link href="/register" className="text-2xl hover:text-blu ease-in duration-200">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
