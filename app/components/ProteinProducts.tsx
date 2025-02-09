// import Image from "next/image";
// import Link from "next/link";

// import img1 from "public/images/supplement_img/ON_wheyiso.jpg";
// import img2 from "public/images/supplement_img/Mb_whey_hydro.png";
// import img3 from "public/images/supplement_img/myprotien_wheyiso.jpg";
// import img4 from "public/images/supplement_img/GNC_wheypro.jpg";
// import img5 from "public/images/supplement_img/ON_massgainer.jpg";
// import img6 from "public/images/supplement_img/ON-massgainer.jpg";
// import img7 from "public/images/supplement_img/BM_masgainer.jpg";
// import img8 from "public/images/supplement_img/xtend1.png";
// import img9 from "public/images/supplement_img/jymBCAA.jpg";
// import img10 from "public/images/supplement_img/xtend1.png";
// import img11 from "public/images/supplement_img/c4_preworkout.webp";
// import img12 from "public/images/supplement_img/MB_preworkout.webp";
// import img13 from "public/images/supplement_img/ON_creatine.png";
// import img14 from "public/images/supplement_img/On_creatine.webp";
// import img15 from "public/images/supplement_img/proantium2.jpg";
// import img16 from "public/images/supplement_img/syntha-6_1.png";

// const supplementCategories = {
//   "Whey Protein": [
//     { id: 1, name: "ON Gold Standard Whey", price: "₹5,199", oldPrice: "₹6,999", discount: "25%", image: img1 },
//     { id: 2, name: "MuscleBlaze Whey Protein", price: "₹3,999", oldPrice: "₹5,299", discount: "24%", image: img2 },
//     { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: img3 },
//     { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", oldPrice: "₹4,999", discount: "24%", image: img4 },
//     { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", oldPrice: "₹4,999", discount: "24%", image: img4 },
//   ],
//   "Mass Gainers": [
//     { id: 5, name: "ON Serious Mass Gainer", price: "₹4,999", oldPrice: "₹6,499", discount: "23%", image: img5 },
//     { id: 6, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: img6 },
//     { id: 7, name: "BigMuscles Lean Mass Gainer", price: "₹2,999", oldPrice: "₹3,899", discount: "23%", image: img7 },
//     { id: 6, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: img6 },
//     { id: 5, name: "ON Serious Mass Gainer", price: "₹4,999", oldPrice: "₹6,499", discount: "23%", image: img5 },
//   ],
//   "BCAA (Intra-workout)": [
//     { id: 8, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: img8 },
//     { id: 9, name: "MuscleBlaze BCAA Pro", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: img9 },
//     { id: 10, name: "GNC AMP BCAA", price: "₹2,299", oldPrice: "₹3,099", discount: "26%", image: img10 },
//     { id: 8, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: img8 },
//       { id: 10, name: "GNC AMP BCAA", price: "₹2,299", oldPrice: "₹3,099", discount: "26%", image: img10 },
//   ],
//   "Pre-Workout": [
//     { id: 11, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: img11 },
//     { id: 12, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: img12 },
//     { id: 11, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: img11 },
//     { id: 12, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: img12 },
//     { id: 11, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: img11 },
//   ],
//   "Creatine": [
//     { id: 13, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: img13 },
//     { id: 14, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: img14 },
//     { id: 13, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: img13 },
//     { id: 14, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: img14 },
//     { id: 13, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: img13 },
//   ] 
// };

// // Function to convert category name to slug format
// const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// export default function SupplementsSection() {
//   return (

//     <section id="SupplementsSection" className="w-full px-4 py-8">
//     <h2 className="text-2xl font-bold text-center mb-6">Top Supplements</h2>

//     {Object.entries(supplementCategories).map(([category, products]) => {
//       const categorySlug = slugify(category);
//       const rows = [];

//       for (let i = 0; i < products.length; i += 5) {
//         rows.push(products.slice(i, i + 5));
//       }

//       return (
//         <div key={category} className="mb-8">
//           <h3 className="text-xl font-semibold mb-4">{category}</h3>

//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex items-center space-x-4 mb-4">
//               {row.map((product) => (
//                 <div
//                   key={product.id}
//                   className="w-[220px] h-[330px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
//                 >
//                   <div className="relative w-full h-36 flex items-center justify-center">
//                     <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
//                     <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                       Upto {product.discount} OFF
//                     </span>
//                   </div>
//                   <h3 className="text-sm font-semibold text-center mt-2">{product.name}</h3>
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-green-700">{product.price}</p>
//                     <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
//                   </div>
//                 </div>
//               ))}

//               {/* "Explore More" Button after 5th Card */}
//               {rowIndex === rows.length - 1 && (
//                 <Link
//                   href={`/supplements/${categorySlug}`}
//                   className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
//                 >
//                   Explore More →
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     })}
//   </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

const supplementCategories = {
  "Whey Protein": [
    { id: 1, name: "ON Gold Standard Whey", price: "₹5,199", oldPrice: "₹6,999", discount: "25%", image: "/images/supplement_img/ON_wheyiso.jpg" },
    { id: 2, name: "MuscleBlaze Whey Protein", price: "₹3,999", oldPrice: "₹5,299", discount: "24%", image: "/images/supplement_img/Mb_whey_hydro.png" },
    { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
    { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", oldPrice: "₹4,999", discount: "24%", image: "/images/supplement_img/GNC_wheypro.jpg" },
    { id: 5, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
  ],
  "Mass Gainers": [
    { id: 6, name: "ON Serious Mass Gainer", price: "₹4,999", oldPrice: "₹6,499", discount: "23%", image: "/images/supplement_img/ON_massgainer.jpg" },
    { id: 7, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
    { id: 8, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
    { id: 9, name: "BigMuscles Lean Mass Gainer", price: "₹2,999", oldPrice: "₹3,899", discount: "23%", image: "/images/supplement_img/BM_masgainer.jpg" },
    { id: 10, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
  ],
  "BCAA (Intra-workout)": [
    { id: 11, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: "/images/supplement_img/xtend1.png" },
    { id: 12, name: "MuscleBlaze BCAA Pro", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/jymBCAA.jpg" },
    { id: 13, name: "GNC AMP BCAA", price: "₹2,299", oldPrice: "₹3,099", discount: "26%", image: "/images/supplement_img/xtend1.png" },
    { id: 14, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: "/images/supplement_img/xtend1.png" },
    { id: 15, name: "MuscleBlaze BCAA Pro", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/jymBCAA.jpg" },
  ],
  "Pre-Workout": [
    { id: 16, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
    { id: 17, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/MB_preworkout.webp" },
    { id: 18, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
    { id: 19, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/MB_preworkout.webp" },
    { id: 20, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
  ],
  "Creatine": [
    { id: 21, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
    { id: 22, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: "/images/supplement_img/On_creatine.webp" },
    { id: 23, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
    { id: 24, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: "/images/supplement_img/On_creatine.webp" },
    { id: 25, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
  ],
};

// Function to convert category name to slug format
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export default function SupplementsSection() {
  return (
    <section id="SupplementsSection" className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Top Supplements</h2>

      {Object.entries(supplementCategories).map(([category, products]) => {
        const categorySlug = slugify(category);
        const rows = [];

        for (let i = 0; i < products.length; i += 5) {
          rows.push(products.slice(i, i + 5));
        }

        return (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center space-x-4 mb-4">
                {row.map((product) => (
                  <div
                    key={product.id}
                    className="w-[220px] h-[330px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="relative w-full h-36 flex items-center justify-center">
                      <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
                      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Upto {product.discount} OFF
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-center mt-2">{product.name}</h3>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-700">{product.price}</p>
                      <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                    </div>
                  </div>
                ))}

                {/* "Explore More" Button after 5th Card */}
                {rowIndex === rows.length - 1 && (
                  <Link
                    href={`/supplements/${categorySlug}`}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    Explore More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
