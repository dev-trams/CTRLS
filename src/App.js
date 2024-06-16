import { Route, Routes, HashRouter } from "react-router-dom";
import LoginPage from "./pages/account/LoginPage";
import SignupPage from "./pages/account/SignupPage";
import HomePage from './pages/HomePage';
import JLoginPage from "./jvak/pages/LoginPage";
import JHomePage from "./jvak/pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from "./pages/detailPage";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/detail/*" element={<DetailPage />} />
        <Route path="/user/*" element={<></>} />
        <Route path="/community" element={<></>} />
        <Route path="/team/" element={<></>} />
        <Route path="/team/*" element={<></>} />
        <Route path="/projects/*" element={<></>} />

        <Route path="/jvak/login" element={<JLoginPage />} />
        <Route path="/jvak" element={<JHomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
