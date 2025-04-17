import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';
import Industry from './pages/Industry';
import About from './pages/About';
import AiDevelopment from './pages/AiDevelopment';
import Service from './pages/Service';
import MPVDevelopment from './pages/MPVDevelopment';
import SDaaS from './pages/SDaaS';
import BlockChain from './pages/BlockChain';
import SecurityService from './pages/SecurityService';
import LeagacyService from './pages/LeagacyService';
import Portfolio from './pages/Portfolio';
import VividlyPorject from './pages/VividlyPorject';
import Kombo from './pages/Kombo';
import DexCheck from './pages/DexCheck'
import XANA from './pages/XANA';
import Careers from './pages/Careers';
import InformationSecurity from './pages/InformationSecurity';
import PrivacyPolicy from './pages/PrivacyPolicy'
import AntiSalveryPolicy from './pages/AntiSalveryPolicy'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        easing: "ease-in-out",
    });
}, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/industries' element={<Industry></Industry>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services/ai-development' element={<AiDevelopment></AiDevelopment>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path='/services/mpv-development' element={<MPVDevelopment></MPVDevelopment>}></Route>
        <Route path='/services/saas' element={<SDaaS></SDaaS>}></Route>
        <Route path='/services/block-chain-development' element={<BlockChain></BlockChain>}></Route>
        <Route path='/services/security-as-a-service' element={<SecurityService></SecurityService>}></Route>
        <Route path='/services/legacy-software-modernization' element={<LeagacyService></LeagacyService>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/portfolio/vividly' element={<VividlyPorject></VividlyPorject>}></Route>
        <Route path='/portfolio/kombo' element={<Kombo></Kombo>}></Route>
        <Route path='/portfolio/dex-check' element={<DexCheck></DexCheck>}></Route>
        <Route path='/portfolio/xana' element={<XANA></XANA>}></Route>
        <Route path='/careers' element={<Careers></Careers>}></Route>
        <Route path='/information-security' element={<InformationSecurity></InformationSecurity>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        <Route path='/anti-salvery-policy' element={<AntiSalveryPolicy></AntiSalveryPolicy>}></Route>

      </Routes>
    </>
  )
}

export default App
