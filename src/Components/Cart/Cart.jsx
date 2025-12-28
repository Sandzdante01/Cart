import { useState } from "react";
import { CartItem } from "../CartItem/CartItem";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import "./Cart.css";

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    name: "Scotch Eggs",
    description: "Crispy breaded eggs with a creamy filling",
    price: 950,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1600659451464-6a6b4e77a20e?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Prawn Cocktail",
    description: "Juicy prawns on a bed of lettuce, tangy sauce",
    price: 1250,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Welsh Rarebit",
    description: "Toasted bread with rich, cheesy mushrooms",
    price: 890,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Black Pudding",
    description: "Traditional delicacy, blackberry glaze, creamy dips",
    price: 1050,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b847259d3f?w=400&h=400&fit=crop",
  },
];

export function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 200;
  const serviceFee = 150;

  return (
    <div className="cartContainer">
      {/* Page Header */}
      <div className="cartHeader">
        <h1>Your Shopping Cart</h1>
        <div className="headerDivider" />
      </div>

      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <p>Your cart is empty</p>
          <button className="continueButton">CONTINUE SHOPPING</button>
        </div>
      ) : (
        <div className="cartGrid">
          {/* Cart Items */}
          <div className="cartItemsSection">
            <div className="itemsHeader">
              <h2>Cart Items ({cartItems.length})</h2>
            </div>
            <div className="itemsList">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="summarySection">
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              serviceFee={serviceFee}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
}
