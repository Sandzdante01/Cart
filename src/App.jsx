import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
