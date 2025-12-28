import "./OrderSummary.css";

export function OrderSummary({
  subtotal,
  deliveryFee,
  serviceFee,
  onCheckout,
}) {
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="orderSummary">
      <h2 className="summaryTitle">Order Summary</h2>

      <div className="summaryDetails">
        <div className="summaryRow">
          <span className="summaryLabel">Subtotal</span>
          <span>LKR {subtotal.toFixed(2)}</span>
        </div>
        <div className="summaryRow">
          <span className="summaryLabel">Delivery Fee</span>
          <span>LKR {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summaryRow">
          <span className="summaryLabel">Service Fee</span>
          <span>LKR {serviceFee.toFixed(2)}</span>
        </div>

        <div className="summaryDivider">
          <div className="totalRow">
            <span>Total</span>
            <span>LKR {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button onClick={onCheckout} className="checkoutButton">
        PROCEED TO CHECKOUT
      </button>

      <p className="summaryNote">
        Taxes and additional fees calculated at checkout
      </p>
    </div>
  );
}
