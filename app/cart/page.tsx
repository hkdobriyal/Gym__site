"use client";
import { Button } from "@/app/components/ui/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function CartPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto mt-10 py-28  text-center">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="text-gray-500 mt-2">No items in the cart yet.</p>
       <Link href={"/"}>
        <Button className="mt-4 flex items-center gap-2">
          <ShoppingCartIcon /> Continue Shopping
        </Button>
       </Link>
      </div>
      <Footer />
    </main>
  );
}
