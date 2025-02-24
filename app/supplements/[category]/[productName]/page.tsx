// import { useParams } from "next/navigation";
// import data from "@/data/products"; // Assume product data is stored here
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";

// export default function ProductDetailPage() {
//   const { productName } = useParams(); // Get product name from URL
//   const product = data.find((item) => item.name.replace(/\s+/g, "-").toLowerCase() === productName);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <main className="container mx-auto p-4 pt-20">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <img src={product.image} alt={product.name} className="w-full max-w-md" />
//         <p className="text-lg">{product.description}</p>
//         <p className="text-xl font-bold">₹{product.price}</p>
//         <button className="bg-orange-500 text-white px-4 py-2 mt-4">Add to Cart</button>
//       </main>
//       <Footer />
//     </div>
//   );
// }



// app\supplements\[category]\[productName]\page.tsx
import allSupplements from "../../../data/supplementsData";

export default function ProductPage({ params }: { params: { category: string; productName: string } }) {
  const { category, productName } = params;

  if (!category || !allSupplements[category]) {
    return <p>Category not found</p>;
  }

  const product = allSupplements[category].find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>
        <span className="old-price">{product.oldPrice}</span>
        <span className="new-price">{product.price}</span>
        <span className="discount">{product.discount} OFF</span>
      </p>
    </div>
  );
}
