

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HederComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import './App.css';
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
    <Route path="/" element={<ListEmployeeComponent />} />
    <Route path="/add-employee" element={<EmployeeComponent />} />
    <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
</Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;







