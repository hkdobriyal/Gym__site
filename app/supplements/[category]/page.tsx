// // app\supplements\[category]\page.tsx
// 'use client'
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Footer from "../../components/Footer";
// import { notFound } from "next/navigation";
// import Header from "../../components/Header";
// // import Footer from "@/components/Footer";

// const allSupplements :Record<
// string,
// { id: number; name: string; oldPrice: string; price: string; discount: string; image: string }[]
// > = {
//   "whey-protein": [
//     {
//       id: 1,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//     },
//     {
//       id: 2,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//     },
//     {
//       id: 3,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//     },
//     {
//       id: 4,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//     },
//     {
//       id: 11,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//     },
//     {
//       id: 12,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//     },
//     {
//       id: 13,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//     },
//     {
//       id: 14,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//     },
//     {
//       id: 133,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//     },
//     {
//       id: 144,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//     },
//     {
//       id: 111,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//     },
//     {
//       id: 112,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//     },
//     {
//       id: 113,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//     },
//     {
//       id: 114,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//     },
//   ],
//   "mass-gainers": [
//     {
//       id: 5,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//     },
//     {
//       id: 6,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//     },
//     {
//       id: 7,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//     },
//     {
//       id: 15,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//     },
//     {
//       id: 16,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//     },
//     {
//       id: 17,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//     },
//     {
//       id: 115,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//     },
//     {
//       id: 116,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//     },
//     {
//       id: 117,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//     },
//   ],
//   "bcaa-intra-workout": [
//     {
//       id: 8,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//     {
//       id: 9,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//     },
//     {
//       id: 10,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//     {
//       id: 18,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//     {
//       id: 19,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//     },
//     {
//       id: 110,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//     {
//       id: 118,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//     {
//       id: 119,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//     },
//     {
//       id: 110,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//     },
//   ],
//   "pre-workout": [
//     {
//       id: 11,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//     },
//     {
//       id: 12,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//     },
//     {
//       id: 111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//     },
//     {
//       id: 112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//     },
//     {
//       id: 1111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//     },
//     {
//       id: 1112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//     },
//     {
//       id: 11111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//     },
//     {
//       id: 11112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//     },
//     {
//       id: 1111111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//     },
//     {
//       id: 120,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//     },
//   ],
//   creatine: [
//     {
//       id: 13,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//     },
//     {
//       id: 14,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//     },
//     {
//       id: 113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//     },
//     {
//       id: 114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//     },
//     {
//       id: 1113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//     },
//     {
//       id: 1114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//     },
//     {
//       id: 11113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//     },
//     {
//       id: 11114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//     },
//     {
//       id: 111113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//     },
//     {
//       id: 111114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//     },
//   ],
// };

// interface CategoryPageProps {
//   params: { category: string };
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   const category = params?.category?.toLowerCase() || "";
//   const supplements = allSupplements[category];

//   if (!supplements) {
//     notFound();
//   }

//   const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

//   const toggleWishlist = (id: number) => {
//     setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div>
//       {/* <Header/> */}
//       <section className="w-full px-4 py-8 pt-28">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {category.replace("-", " ").toUpperCase()}
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {supplements.map((product) => (
//             <div
//               key={product.id}
//               className="w-[220px] h-[370px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative"
//             >
//               {/* Wishlist Button with SVG */}
//               <button
//                 className="absolute top-2 z-20 right-2 p-2 transition"
//                 onClick={() => toggleWishlist(product.id)}
//               >
//                 {wishlist[product.id] ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="red"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="red"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="gray"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                     />
//                   </svg>
//                 )}
//               </button>

//               <div className="relative w-full h-36 flex items-center justify-center">
//                 <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
//                   Upto {product.discount} OFF
//                 </span>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={140}
//                   height={140}
//                   className="object-contain"
//                 />
//               </div>

//               <h3 className="text-sm font-semibold text-center mt-2">
//                 {product.name}
//               </h3>

//               <div className="text-center">
//                 <p className="text-lg font-bold text-green-700">{product.price}</p>
//                 <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div className="text-center mt-6">
//           <Link
//             href="/"
//             className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
//           >
//             Back to Home
//           </Link>
//         </div> */}
//       </section>
//       <Footer />
//     </div>
//   );
// }

// ------------------------------above coce is wokring fine ------------------------------------------------------



// ---------------------------------------above below  is working -with  wishlist  button and add to cart and go to cart  code --------------------------------------------------------------------

// app\supplements\[category]\page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { allSupplements } from "../../data/supplementsData"; // Import the data


interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params?.category?.toLowerCase() || "";
  const supplements = allSupplements[category];

  const router = useRouter();

  if (!supplements) {
    notFound();
  }

  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [cart, setCart] = useState<Record<number, number>>({}); // Stores product IDs and their quantities

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  const incrementQuantity = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrementQuantity = (id: number) => {
    setCart((prev) => {
      if (prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      } else {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
    });
  };

  return (
    <div>
      <Header />

      <section className="w-full px-4 py-8 pt-28">
        <h2 className="text-2xl font-bold text-center mb-6">
          {category.replace("-", " ").toUpperCase()}
        </h2>  

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {supplements.map((product) => (
               <Link
               href={`/supplements/${category}/${encodeURIComponent(product.name)}`}>
            <div
              key={product.id}
              className="w-[220px] h-[370px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative"
            >
              <button
                className="absolute top-2 right-2 p-2 transition z-20 bg-white bg-opacity-60 rounded-full"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist[product.id] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="gray"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                )}
              </button>

              <div className="relative w-full h-36 flex items-center justify-center">
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
                  Upto {product.discount} OFF
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold text-center mt-2">
                {product.name}
              </h3>

              <div className="text-center">
                <p className="text-lg font-bold text-green-700">
                  {product.price}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  {product.oldPrice}
                </p>
              </div>

              {/* Add to Cart Button */}
              {cart[product.id] ? (
                <button
                  onClick={() => router.push("/cart")}
                  className="bg-blu text-white px-4 py-2 font-bold shadow-xl rounded-md w-full"
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-blu/70 text-black/80 px-4 py-2 shadow-lg font-bold rounded-md w-full"
                >
                  Add to Cart
                </button>
              )}
            </div>
            </Link>
          ))}
        </div>

       
      </section>
      <Footer />
    </div>
  );
}