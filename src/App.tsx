import { Suspense } from "react";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Products />
    </Suspense>
  );
}

export default App;
