import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
