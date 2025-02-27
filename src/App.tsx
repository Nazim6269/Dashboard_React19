import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Developer from "./components/screens/Developer";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import SingleStudent from "./components/screens/SingleStudent";
import SingleTeacher from "./components/screens/SingleTeacher";
import Students from "./components/screens/Students";
import Teachers from "./components/screens/Teachers";
import LeftSideBar from "./components/sidebar/LeftSideBar";
import { useAuth } from "./context/auth-context";
import ThemeProvider from "./context/theme-context";

function App() {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavBar />
        <div className="flex">
          {auth.user && <LeftSideBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<SingleStudent />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:id" element={<SingleTeacher />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
