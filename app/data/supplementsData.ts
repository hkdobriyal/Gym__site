// app\data\supplementsData.ts
export  const allSupplements :Record<
string,
{ id: number; name: string; oldPrice: string; price: string; discount: string; image: string }[]
> = {
  // const allSupplements = {
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
      id: 11,
      name: "ON Gold Standard Whey",
      oldPrice: "₹5,999",
      price: "₹5,199",
      discount: "13% ",
      image: "/images/supplement_img/ON_wheyiso.jpg",
    },
    {
      id: 12,
      name: "MuscleBlaze Whey Protein",
      oldPrice: "₹4,499",
      price: "₹3,999",
      discount: "11% ",
      image: "/images/supplement_img/Mb_whey_hydro.png",
    },
    {
      id: 13,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 14,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
    {
      id: 133,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 144,
      name: "GNC Pro Performance Whey",
      oldPrice: "₹4,199",
      price: "₹3,799",
      discount: "9% ",
      image: "/images/supplement_img/GNC_wheypro.jpg",
    },
    {
      id: 111,
      name: "ON Gold Standard Whey",
      oldPrice: "₹5,999",
      price: "₹5,199",
      discount: "13% ",
      image: "/images/supplement_img/ON_wheyiso.jpg",
    },
    {
      id: 112,
      name: "MuscleBlaze Whey Protein",
      oldPrice: "₹4,499",
      price: "₹3,999",
      discount: "11% ",
      image: "/images/supplement_img/Mb_whey_hydro.png",
    },
    {
      id: 113,
      name: "MyProtein Impact Whey",
      oldPrice: "₹4,999",
      price: "₹4,499",
      discount: "10% ",
      image: "/images/supplement_img/myprotien_wheyiso.jpg",
    },
    {
      id: 114,
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
      id: 15,
      name: "ON Serious Mass Gainer",
      oldPrice: "₹5,499",
      price: "₹4,999",
      discount: "9% ",
      image: "/images/supplement_img/ON_massgainer.jpg",
    },
    {
      id: 16,
      name: "MuscleBlaze Mass Gainer",
      oldPrice: "₹3,999",
      price: "₹3,499",
      discount: "13% ",
      image: "/images/supplement_img/ON-massgainer.jpg",
    },
    {
      id: 17,
      name: "BigMuscles Lean Mass Gainer",
      oldPrice: "₹3,499",
      price: "₹2,999",
      discount: "14% ",
      image: "/images/supplement_img/BM_masgainer.jpg",
    },
    {
      id: 115,
      name: "ON Serious Mass Gainer",
      oldPrice: "₹5,499",
      price: "₹4,999",
      discount: "9% ",
      image: "/images/supplement_img/ON_massgainer.jpg",
    },
    {
      id: 116,
      name: "MuscleBlaze Mass Gainer",
      oldPrice: "₹3,999",
      price: "₹3,499",
      discount: "13% ",
      image: "/images/supplement_img/ON-massgainer.jpg",
    },
    {
      id: 117,
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
      id: 18,
      name: "Xtend BCAA",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 19,
      name: "MuscleBlaze BCAA Pro",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/jymBCAA.jpg",
    },
    {
      id: 110,
      name: "GNC AMP BCAA",
      oldPrice: "₹2,599",
      price: "₹2,299",
      discount: "12% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 118,
      name: "Xtend BCAA",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/xtend1.png",
    },
    {
      id: 119,
      name: "MuscleBlaze BCAA Pro",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/jymBCAA.jpg",
    },
    {
      id: 110,
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
      id: 111,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 112,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 1111,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 1112,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 11111,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 11112,
      name: "MuscleBlaze Pre-Workout Ripped",
      oldPrice: "₹2,299",
      price: "₹1,999",
      discount: "13% ",
      image: "/images/supplement_img/MB_preworkout.webp",
    },
    {
      id: 1111111,
      name: "C4 Pre-Workout",
      oldPrice: "₹2,899",
      price: "₹2,499",
      discount: "14% ",
      image: "/images/supplement_img/c4_preworkout.webp",
    },
    {
      id: 120,
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
      id: 113,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 114,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 1113,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 1114,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 11113,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 11114,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
    {
      id: 111113,
      name: "ON Micronized Creatine",
      oldPrice: "₹1,799",
      price: "₹1,499",
      discount: "17% ",
      image: "/images/supplement_img/ON_creatine.png",
    },
    {
      id: 111114,
      name: "MuscleBlaze Creatine Monohydrate",
      oldPrice: "₹1,599",
      price: "₹1,299",
      discount: "18% ",
      image: "/images/supplement_img/On_creatine.webp",
    },
  ],
};


// export default allSupplements;