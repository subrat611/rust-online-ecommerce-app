import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateProductForm from "./components/CreateProductForm";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<p>main content</p>} />
          <Route path="/create-product" element={<CreateProductForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
