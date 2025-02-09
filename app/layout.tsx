// import { TogglerProvider } from "./context/toggler";
// import "./globals.css";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// export const metadata = {
//   title: "Muscle&Health",
//   description: "Website for Gym supplements - Arjun Bajaj ",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <TogglerProvider>
//       <html lang="en" className="scroll-smooth">
//         <head>
//           <script
//             src="https://kit.fontawesome.com/23cc326a28.js"
//             crossOrigin="anonymous"
//           ></script>
//         </head>
//         <body className={`${montserrat.className}`}>{children}</body>
//       </html>
//     </TogglerProvider>
//   );
// }



import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Muscle&Health",
  description: "Website for Gym supplements - Arjun Bajaj ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <script
            src="https://kit.fontawesome.com/23cc326a28.js"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body className={`${montserrat.className}`}>
          {children}
          <ScrollToTop /> {/* Add ScrollToTop here */}
        </body>
      </html>
    </TogglerProvider>
  );
}
