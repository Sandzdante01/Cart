import { Minus, Plus, Trash2 } from "lucide-react";
import "./CartItem.css";

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cartItem">
      {/* Item Image */}
      <div className="itemImage">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Item Details */}
      <div className="itemDetails">
        <div className="itemHeader">
          <div className="itemInfo">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="removeButton"
            aria-label="Remove item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Price and Quantity Controls */}
        <div className="itemFooter">
          <div className="itemPrice">
            LKR {(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Quantity Controls */}
          <div className="quantityControls">
            <button
              onClick={handleDecrease}
              className="quantityButton"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="quantityValue">{item.quantity}</span>
            <button
              onClick={handleIncrease}
              className="quantityButton"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
