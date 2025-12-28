import "./CheckoutItem.css";

export function CheckoutItem({ item }) {
  return (
    <div className="checkoutItem">
      <div className="itemImage">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="itemDetails">
        <div className="itemHeader">
          <h3>{item.name}</h3>
          <div className="itemPrice">
            LKR {(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
        <p className="itemDescription">{item.description}</p>
        <div className="itemMeta">
          <span className="itemQuantity">Qty: {item.quantity}</span>
          <span className="itemUnitPrice">
            LKR {item.price.toFixed(2)} each
          </span>
        </div>
      </div>
    </div>
  );
}
