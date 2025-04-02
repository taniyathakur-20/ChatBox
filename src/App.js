import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/HomePage/pages/LandingPage/LandingPage";
import ChatPage from "./pages/HomePage/pages/ChatPage/ChatPage";
import PeoplePage from "./pages/HomePage/pages/PeoplePage/PeoplePage";
import { NewPeoplePage } from "./pages/HomePage/pages/PeoplePage/pages/NewPeoplePage/NewPeoplePage";
import AboutUsPage from "./pages/HomePage/pages/AboutUsPage/AboutUsPage";
import RequestPage from "./pages/HomePage/pages/PeoplePage/pages/RequestPage";
//import { NewPeoplePage } from "./pages/HomePage/pages/PeoplePage/pages/NewPeoplePage/NewPeoplePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/Request" element={<RequestPage/>}/>
        </Route>
        <Route path="/new-people" element={<NewPeoplePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
