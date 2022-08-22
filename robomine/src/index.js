import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css'
import Home from "./Pages/Home/home";
import About from "./Pages/About/About";
import Landing from "./Pages/Landing/Landing";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Referrals from "./Pages/Dashboard/Referrals/Referrals";
import FA2 from "./Pages/Dashboard/2FA/FA2";
import ChangePassword from "./Pages/Dashboard/ChangePassword/ChangePassword";
import ApiKeys from "./Pages/Dashboard/ApiKeys/ApiKeys";
import Sessions from "./Pages/Dashboard/Sessions/Sessions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/2fa" element={<FA2 />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/api-keys" element={<ApiKeys />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);