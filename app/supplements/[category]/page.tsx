// // // //

// // // import Image from "next/image";
// // // import Link from "next/link";

// // // const allSupplements = {
// // //   "whey-protein": [
// // //     { id: 1, name: "ON Gold Standard Whey", price: "₹5,199", image: "/images/supplement_img/ON_wheyiso.jpg" },
// // //     { id: 2, name: "MuscleBlaze Whey Protein", price: "₹3,999", image: "/images/supplement_img/Mb_whey_hydro.png" },
// // //     { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
// // //     { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", image: "/images/supplement_img/GNC_wheypro.jpg" },
// // //     { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
// // //   ],
// // //   "mass-gainers": [
// // //     { id: 5, name: "ON Serious Mass Gainer", price: "₹4,999", image: "/images/supplement_img/ON_massgainer.jpg" },
// // //     { id: 6, name: "MuscleBlaze Mass Gainer", price: "₹3,499", image: "/images/supplement_img/ON-massgainer.jpg" },
// // //     { id: 7, name: "BigMuscles Lean Mass Gainer", price: "₹2,999", image: "/images/supplement_img/BM_masgainer.jpg" },
// // //   ],
// // //   "bcaa-intra-workout": [
// // //     { id: 8, name: "Xtend BCAA", price: "₹2,499", image: "/images/supplement_img/xtend1.png" },
// // //     { id: 9, name: "MuscleBlaze BCAA Pro", price: "₹1,999", image: "/images/supplement_img/jymBCAA.jpg" },
// // //     { id: 10, name: "GNC AMP BCAA", price: "₹2,299", image: "/images/supplement_img/xtend1.png" },
// // //   ],
// // //   "pre-workout": [
// // //     { id: 11, name: "C4 Pre-Workout", price: "₹2,499", image: "/images/supplement_img/c4_preworkout.webp" },
// // //     { id: 12, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", image: "/images/supplement_img/MB_preworkout.webp" },
// // //   ],
// // //   creatine: [
// // //     { id: 13, name: "ON Micronized Creatine", price: "₹1,499", image: "/images/supplement_img/ON_creatine.png" },
// // //     { id: 14, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", image: "/images/supplement_img/On_creatine.webp" },
// // //   ]
// // // };

// // // export default function CategoryPage({ params }: { params: { category: string } }) {
// // //   const category = params.category.toLowerCase();
// // //   const supplements = allSupplements[category];

// // //   if (!supplements) {
// // //     return (
// // //       <div className="w-full min-h-screen flex flex-col items-center justify-center">
// // //         <h1 className="text-2xl font-bold text-red-600">Category Not Found</h1>
// // //         <p className="text-gray-500 mt-2">Oops! The category you are looking for does not exist.</p>
// // //         <Link href="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
// // //           Back to Home
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <section className="w-full px-4 py-8">
// // //       <h2 className="text-2xl font-bold text-center mb-6">{category.replace("-", " ").toUpperCase()}</h2>

// // //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //         {supplements.map((product) => (
// // //           <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white">
// // //             <div className="relative w-full h-40 flex items-center justify-center">
// // //               <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain" />
// // //             </div>
// // //             <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>
// // //             <p className="text-lg font-bold text-green-700 text-center">{product.price}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="text-center mt-6">
// // //         <Link href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
// // //           Back to Home
// // //         </Link>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import Image from "next/image";
// // import Link from "next/link";

// // const allSupplements = {
// //   "whey-protein": [
// //     { id: 1, name: "ON Gold Standard Whey", oldPrice: "₹5,999", price: "₹5,199", discount: "13% OFF", image: "/images/supplement_img/ON_wheyiso.jpg" },
// //     { id: 2, name: "MuscleBlaze Whey Protein", oldPrice: "₹4,499", price: "₹3,999", discount: "11% OFF", image: "/images/supplement_img/Mb_whey_hydro.png" },
// //     { id: 3, name: "MyProtein Impact Whey", oldPrice: "₹4,999", price: "₹4,499", discount: "10% OFF", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
// //     { id: 4, name: "GNC Pro Performance Whey", oldPrice: "₹4,199", price: "₹3,799", discount: "9% OFF", image: "/images/supplement_img/GNC_wheypro.jpg" },
// //   ],
// //   "mass-gainers": [
// //     { id: 5, name: "ON Serious Mass Gainer", oldPrice: "₹5,499", price: "₹4,999", discount: "9% OFF", image: "/images/supplement_img/ON_massgainer.jpg" },
// //     { id: 6, name: "MuscleBlaze Mass Gainer", oldPrice: "₹3,999", price: "₹3,499", discount: "13% OFF", image: "/images/supplement_img/ON-massgainer.jpg" },
// //     { id: 7, name: "BigMuscles Lean Mass Gainer", oldPrice: "₹3,499", price: "₹2,999", discount: "14% OFF", image: "/images/supplement_img/BM_masgainer.jpg" },
// //   ],
// //   "bcaa-intra-workout": [
// //     { id: 8, name: "Xtend BCAA", oldPrice: "₹2,899", price: "₹2,499", discount: "14% OFF", image: "/images/supplement_img/xtend1.png" },
// //     { id: 9, name: "MuscleBlaze BCAA Pro", oldPrice: "₹2,299", price: "₹1,999", discount: "13% OFF", image: "/images/supplement_img/jymBCAA.jpg" },
// //     { id: 10, name: "GNC AMP BCAA", oldPrice: "₹2,599", price: "₹2,299", discount: "12% OFF", image: "/images/supplement_img/xtend1.png" },
// //   ],
// //   "pre-workout": [
// //     { id: 11, name: "C4 Pre-Workout", oldPrice: "₹2,899", price: "₹2,499", discount: "14% OFF", image: "/images/supplement_img/c4_preworkout.webp" },
// //     { id: 12, name: "MuscleBlaze Pre-Workout Ripped", oldPrice: "₹2,299", price: "₹1,999", discount: "13% OFF", image: "/images/supplement_img/MB_preworkout.webp" },
// //   ],
// //   creatine: [
// //     { id: 13, name: "ON Micronized Creatine", oldPrice: "₹1,799", price: "₹1,499", discount: "17% OFF", image: "/images/supplement_img/ON_creatine.png" },
// //     { id: 14, name: "MuscleBlaze Creatine Monohydrate", oldPrice: "₹1,599", price: "₹1,299", discount: "18% OFF", image: "/images/supplement_img/On_creatine.webp" },
// //   ]
// // };

// // export default function CategoryPage({ params }: { params: { category: string } }) {
// //   const category = params.category.toLowerCase();
// //   const supplements = allSupplements[category];

// //   if (!supplements) {
// //     return (
// //       <div className="w-full min-h-screen flex flex-col items-center justify-center">
// //         <h1 className="text-2xl font-bold text-red-600">Category Not Found</h1>
// //         <p className="text-gray-500 mt-2">Oops! The category you are looking for does not exist.</p>
// //         <Link href="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
// //           Back to Home
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="w-full px-4 py-8">
// //       <h2 className="text-2xl font-bold text-center mb-6">{category.replace("-", " ").toUpperCase()}</h2>

// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //         {supplements.map((product) => (
// //           <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white relative overflow-hidden">

// //             {/* Discount Tag */}
// //             <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
// //               {product.discount}
// //             </div>

// //             {/* Product Image */}
// //             <div className="relative w-full h-40 flex items-center justify-center">
// //               <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain" />
// //             </div>

// //             {/* Product Name */}
// //             <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>

// //             {/* Pricing (Old Price Strike-through + New Price) */}
// //             <div className="text-center mt-1">
// //               <span className="text-gray-500 line-through text-sm mr-2">{product.oldPrice}</span>
// //               <span className="text-lg font-bold text-green-700">{product.price}</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center mt-6">
// //         <Link href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
// //           Back to Home
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // }

// import Image from "next/image";
// import Link from "next/link";

// const allSupplements = {
//   "whey-protein": [
//     { id: 1, name: "ON Gold Standard Whey", oldPrice: "₹5,999", price: "₹5,199", discount: "13% OFF", image: "/images/supplement_img/ON_wheyiso.jpg" },
//     { id: 2, name: "MuscleBlaze Whey Protein", oldPrice: "₹4,499", price: "₹3,999", discount: "11% OFF", image: "/images/supplement_img/Mb_whey_hydro.png" },
//     { id: 3, name: "MyProtein Impact Whey", oldPrice: "₹4,999", price: "₹4,499", discount: "10% OFF", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
//     { id: 4, name: "GNC Pro Performance Whey", oldPrice: "₹4,199", price: "₹3,799", discount: "9% OFF", image: "/images/supplement_img/GNC_wheypro.jpg" },
//     { id: 4, name: "GNC Pro Performance Whey", oldPrice: "₹4,199", price: "₹3,799", discount: "9% OFF", image: "/images/supplement_img/GNC_wheypro.jpg" },
//     { id: 4, name: "GNC Pro Performance Whey", oldPrice: "₹4,199", price: "₹3,799", discount: "9% OFF", image: "/images/supplement_img/GNC_wheypro.jpg" },
//   ],
//   "mass-gainers": [
//     { id: 5, name: "ON Serious Mass Gainer", oldPrice: "₹5,499", price: "₹4,999", discount: "9% OFF", image: "/images/supplement_img/ON_massgainer.jpg" },
//     { id: 6, name: "MuscleBlaze Mass Gainer", oldPrice: "₹3,999", price: "₹3,499", discount: "13% OFF", image: "/images/supplement_img/ON-massgainer.jpg" },
//     { id: 7, name: "BigMuscles Lean Mass Gainer", oldPrice: "₹3,499", price: "₹2,999", discount: "14% OFF", image: "/images/supplement_img/BM_masgainer.jpg" },
//   ],
//   "bcaa-intra-workout": [
//     { id: 8, name: "Xtend BCAA", oldPrice: "₹2,899", price: "₹2,499", discount: "14% OFF", image: "/images/supplement_img/xtend1.png" },
//     { id: 9, name: "MuscleBlaze BCAA Pro", oldPrice: "₹2,299", price: "₹1,999", discount: "13% OFF", image: "/images/supplement_img/jymBCAA.jpg" },
//     { id: 10, name: "GNC AMP BCAA", oldPrice: "₹2,599", price: "₹2,299", discount: "12% OFF", image: "/images/supplement_img/xtend1.png" },
//   ],
//   "pre-workout": [
//     { id: 11, name: "C4 Pre-Workout", oldPrice: "₹2,899", price: "₹2,499", discount: "14% OFF", image: "/images/supplement_img/c4_preworkout.webp" },
//     { id: 12, name: "MuscleBlaze Pre-Workout Ripped", oldPrice: "₹2,299", price: "₹1,999", discount: "13% OFF", image: "/images/supplement_img/MB_preworkout.webp" },
//   ],
//   creatine: [
//     { id: 13, name: "ON Micronized Creatine", oldPrice: "₹1,799", price: "₹1,499", discount: "17% OFF", image: "/images/supplement_img/ON_creatine.png" },
//     { id: 14, name: "MuscleBlaze Creatine Monohydrate", oldPrice: "₹1,599", price: "₹1,299", discount: "18% OFF", image: "/images/supplement_img/On_creatine.webp" },
//   ]
// };

// export default function CategoryPage({ params }: { params: { category: string } }) {
//   const category = params.category.toLowerCase();
//   const supplements = allSupplements[category];

//   if (!supplements) {
//     return (
//       <div className="w-full min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-bold text-red-600">Category Not Found</h1>
//         <p className="text-gray-500 mt-2">Oops! The category you are looking for does not exist.</p>
//         <Link href="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="w-full px-4 py-8">
//       <h2 className="text-2xl font-bold text-center mb-6">{category.replace("-", " ").toUpperCase()}</h2>

//       <div className="flex flex-wrap justify-center gap-6">
//         {supplements.map((product) => (
//           <div
//             key={product.id}
//             className="w-[220px] h-[330px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative"
//           >
//             {/* Discount Tag */}
//             <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//               {product.discount}
//             </span>

//             {/* Product Image */}
//             <div className="relative w-full h-36 flex items-center justify-center">
//               <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
//             </div>

//             {/* Product Name */}
//             <h3 className="text-sm font-semibold text-center mt-2">{product.name}</h3>

//             {/* Pricing (Old Price Strike-through + New Price) */}
//             <div className="text-center">
//               <p className="text-lg font-bold text-green-700">{product.price}</p>
//               <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Back to Home Button */}
//       <div className="text-center mt-6">
//         <Link href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
//           Back to Home
//         </Link>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const allSupplements :Record<
string,
{ id: number; name: string; oldPrice: string; price: string; discount: string; image: string }[]
> = {
  "whey-protein": [
    {
      id: 1,
      name: "ON Gold Standard Whey",
      oldPrice: "₹5,999",
      price: "₹5,199",
      discount: "13% ",
      image: "/images/supplement_img/ON_wheyiso.jpg",
    },
    {
      id: 2,
      name: "MuscleBlaze Whey Protein",
      oldPrice: "₹4,499",
      price: "₹3,999",
      discount: "11% ",
      image: "/images/supplement_img/Mb_whey_hydro.png",
    },
    {
      id: 3,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 4,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
    {
      id: 1,
      name: "ON Gold Standard Whey",
      oldPrice: "₹5,999",
      price: "₹5,199",
      discount: "13% ",
      image: "/images/supplement_img/ON_wheyiso.jpg",
    },
    {
      id: 2,
      name: "MuscleBlaze Whey Protein",
      oldPrice: "₹4,499",
      price: "₹3,999",
      discount: "11% ",
      image: "/images/supplement_img/Mb_whey_hydro.png",
    },
    {
      id: 3,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 4,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
    {
      id: 3,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 4,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
    {
      id: 1,
      name: "ON Gold Standard Whey",
      oldPrice: "₹5,999",
      price: "₹5,199",
      discount: "13% ",
      image: "/images/supplement_img/ON_wheyiso.jpg",
    },
    {
      id: 2,
      name: "MuscleBlaze Whey Protein",
      oldPrice: "₹4,499",
      price: "₹3,999",
      discount: "11% ",
      image: "/images/supplement_img/Mb_whey_hydro.png",
    },
    {
      id: 3,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 4,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
  ],
  "mass-gainers": [
    {
      id: 5,
      name: "ON Serious Mass Gainer",
      oldPrice: "₹5,499",
      price: "₹4,999",
      discount: "9% ",
      image: "/images/supplement_img/ON_massgainer.jpg",
    },
    {
      id: 6,
      name: "MuscleBlaze Mass Gainer",
      oldPrice: "₹3,999",
      price: "₹3,499",
      discount: "13% ",
      image: "/images/supplement_img/ON-massgainer.jpg",
    },
    {
      id: 7,
      name: "BigMuscles Lean Mass Gainer",
      oldPrice: "₹3,499",
      price: "₹2,999",
      discount: "14% ",
      image: "/images/supplement_img/BM_masgainer.jpg",
    },
    {
      id: 5,
      name: "ON Serious Mass Gainer",
      oldPrice: "₹5,499",
      price: "₹4,999",
      discount: "9% ",
      image: "/images/supplement_img/ON_massgainer.jpg",
    },
    {
      id: 6,
      name: "MuscleBlaze Mass Gainer",
      oldPrice: "₹3,999",
      price: "₹3,499",
      discount: "13% ",
      image: "/images/supplement_img/ON-massgainer.jpg",
    },
    {
      id: 7,
      name: "BigMuscles Lean Mass Gainer",
      oldPrice: "₹3,499",
      price: "₹2,999",
      discount: "14% ",
      image: "/images/supplement_img/BM_masgainer.jpg",
    },
    {
      id: 5,
      name: "ON Serious Mass Gainer",
      oldPrice: "₹5,499",
      price: "₹4,999",
      discount: "9% ",
      image: "/images/supplement_img/ON_massgainer.jpg",
    },
    {
      id: 6,
      name: "MuscleBlaze Mass Gainer",
      oldPrice: "₹3,999",
      price: "₹3,499",
      discount: "13% ",
      image: "/images/supplement_img/ON-massgainer.jpg",
    },
    {
      id: 7,
      name: "BigMuscles Lean Mass Gainer",
      oldPrice: "₹3,499",
      price: "₹2,999",
      discount: "14% ",
      image: "/images/supplement_img/BM_masgainer.jpg",
    },
  ],
  "bcaa-intra-workout": [
    {
      id: 8,
      name: "Xtend BCAA",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 9,
      name: "MuscleBlaze BCAA Pro",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/jymBCAA.jpg",
    },
    {
      id: 10,
      name: "GNC AMP BCAA",
      oldPrice: "₹2,599",
      price: "₹2,299",
      discount: "12% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 8,
      name: "Xtend BCAA",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 9,
      name: "MuscleBlaze BCAA Pro",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/jymBCAA.jpg",
    },
    {
      id: 10,
      name: "GNC AMP BCAA",
      oldPrice: "₹2,599",
      price: "₹2,299",
      discount: "12% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 8,
      name: "Xtend BCAA",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 9,
      name: "MuscleBlaze BCAA Pro",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/jymBCAA.jpg",
    },
    {
      id: 10,
      name: "GNC AMP BCAA",
      oldPrice: "₹2,599",
      price: "₹2,299",
      discount: "12% ",
      image: "/images/supplement_img/xtend1.png",
    },
  ],
  "pre-workout": [
    {
      id: 11,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 12,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 11,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 12,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 11,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 12,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 11,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 12,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 11,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 12,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
  ],
  creatine: [
    {
      id: 13,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 14,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 13,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 14,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 13,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 14,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 13,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 14,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 13,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 14,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
  ],
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category.toLowerCase();
  const supplements = allSupplements[category];

  if (!supplements) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Category Not Found</h1>
        <p className="text-gray-500 mt-2">
          Oops! The category you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {category.replace("-", " ").toUpperCase()}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {supplements.map((product) => (
            <div
              key={product.id}
              className="w-[220px] h-[330px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative"
            >
              {/* Product Image Container */}
              <div className="relative w-full h-36 flex items-center justify-center">
                {/* Discount Tag - Positioned on top of the image */}
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
                  {/* {product.discount} */}
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

              {/* Product Name */}
              <h3 className="text-sm font-semibold text-center mt-2">
                {product.name}
              </h3>

              {/* Pricing (Old Price Strike-through + New Price) */}
              <div className="text-center">
                <p className="text-lg font-bold text-green-700">
                  {product.price}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  {product.oldPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
