import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<p>main content</p>} />
          <Route path="/create-product" element={<p>create product</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
