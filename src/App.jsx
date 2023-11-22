import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import  LoginPage  from "./components/pages/login/LoginPage";
import  OrderPage  from "./components/pages/order/OrderPage";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Routes>
        <Route path="/" element={<LoginPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/order/:username" element={<OrderPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
