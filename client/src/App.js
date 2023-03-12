import "./App.css";
import Client from "./Layout/Client";
import { Route, Routes } from "react-router-dom";
import Admin from "./Layout/Admin";
import Auth from "./Layout/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
