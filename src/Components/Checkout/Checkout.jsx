import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutItem } from "./CheckoutItem";
import "./Checkout.css";

const mockCartItems = [
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
];

export function Checkout() {
  const navigate = useNavigate();
  const [cartItems] = useState(mockCartItems);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryNotes: "",
    paymentMethod: "card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Redirecting to payment...");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 200;
  const serviceFee = 150;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="checkoutContainer">
      <div className="checkoutHeader">
        <h1>Complete Your Order</h1>
        <p className="checkoutSubtitle">
          Review your items and enter delivery details
        </p>
      </div>

      <div className="checkoutGrid">
        <div className="orderReviewSection">
          <div className="sectionHeader">
            <h2>Your Order ({cartItems.length} items)</h2>
            <button className="editCartButton" onClick={() => navigate("/")}>
              Edit Cart
            </button>
          </div>

          <div className="orderItemsList">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>

          <div className="orderSummaryCheckout">
            <div className="summaryRow">
              <span>Subtotal</span>
              <span>LKR {subtotal.toFixed(2)}</span>
            </div>
            <div className="summaryRow">
              <span>Delivery Fee</span>
              <span>LKR {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summaryRow">
              <span>Service Fee</span>
              <span>LKR {serviceFee.toFixed(2)}</span>
            </div>
            <div className="summaryRow totalRow">
              <span>Total</span>
              <span className="totalAmount">LKR {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="orderFormSection">
          <form onSubmit={handleSubmit} className="checkoutForm">
            <h2>Delivery Information</h2>

            <div className="formGroup">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Chang"
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+94 77 123 4567"
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="address">Delivery Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                placeholder="Street address, apartment, suite, etc."
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Colombo"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="postalCode">Postal Code *</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  placeholder="00100"
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="deliveryNotes">
                Delivery Instructions (Optional)
              </label>
              <textarea
                id="deliveryNotes"
                name="deliveryNotes"
                value={formData.deliveryNotes}
                onChange={handleInputChange}
                rows="2"
                placeholder="Gate code, building instructions, etc."
              />
            </div>

            <div className="formGroup">
              <label>Payment Method *</label>
              <div className="paymentMethods">
                <label className="paymentOption">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                  />
                  <span>Credit/Debit Card</span>
                  <div className="paymentIcons">💳</div>
                </label>
                <label className="paymentOption">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                  />
                  <span>Cash on Delivery</span>
                  <div className="paymentIcons">💰</div>
                </label>
                <label className="paymentOption">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="digital"
                    checked={formData.paymentMethod === "digital"}
                    onChange={handleInputChange}
                  />
                  <span>Digital Wallet</span>
                  <div className="paymentIcons">📱</div>
                </label>
              </div>
            </div>

            <div className="termsAgreement">
              <label className="checkboxLabel">
                <input type="checkbox" required />
                <span>
                  I agree to the <a href="/terms">Terms & Conditions</a> and
                  understand this order cannot be canceled once placed.
                </span>
              </label>
            </div>

            <div className="payNowSection">
              <button type="submit" className="payNowButton">
                <span className="buttonText">Pay Now</span>
                <span className="buttonAmount">LKR {total.toFixed(2)}</span>
              </button>
              <p className="securePaymentNote">
                🔒 Your payment is secure and encrypted
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
