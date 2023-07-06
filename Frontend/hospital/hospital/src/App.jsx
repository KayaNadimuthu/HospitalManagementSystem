import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin";
import Doctor from "./pages/doctor/doctor";
import { Patients } from "./pages/patients/Patients";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<Admin />} />
      <Route path="doctor" element={<Doctor />} />
      <Route path="patient" element={<Patients />} />
    </Routes>
  );
}

export default App;
