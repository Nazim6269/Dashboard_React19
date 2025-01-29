import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import Home from "../components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
