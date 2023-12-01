import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import  LoginPage  from "./components/pages/login/LoginPage";
import  OrderPage  from "./components/pages/order/OrderPage";
import { UserProvider } from "./provider/UserProvider";
import ProfilPage from "./components/pages/login/ProfilPage";

function App() {

    return (
        <UserProvider>
            <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/order/:username" element={<OrderPage />}/>
            <Route path="/profil/:username" element={<ProfilPage />}/>
            <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </UserProvider>
    )
}

export default App;