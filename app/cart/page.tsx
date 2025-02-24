"use client";
import { Button } from "@/app/components/ui/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartPage() {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <p className="text-gray-500 mt-2">No items in the cart yet.</p>
      <Button className="mt-4 flex items-center gap-2">
        <ShoppingCartIcon /> Continue Shopping
      </Button>
    </div>
  );
}
