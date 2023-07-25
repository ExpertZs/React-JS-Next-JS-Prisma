import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpensePage from "./pages/ExpensePage";
import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
