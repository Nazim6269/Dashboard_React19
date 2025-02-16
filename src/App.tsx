import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/nav/NavBar";
import Home from "./components/screens/Home";
import SingleStudent from "./components/screens/SingleStudent";
import SingleTeacher from "./components/screens/SingleTeacher";
import Students from "./components/screens/Students";
import Teachers from "./components/screens/Teachers";
import LeftSideBar from "./components/sidebar/LeftSideBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex">
        <LeftSideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<SingleStudent />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<SingleTeacher />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
