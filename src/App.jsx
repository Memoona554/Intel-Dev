import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Industry from './pages/Industry';
import About from './pages/About';
import AiDevelopment from './pages/AiDevelopment';
import Service from './pages/Service';
import MPVDevelopment from './pages/MPVDevelopment';
import SDaaS from './pages/SDaaS';
import BlockChain from './pages/BlockChain';
import Portfolio from './pages/Portfolio';
import VividlyPorject from './pages/VividlyPorject';
import Kombo from './pages/Kombo';
import DexCheck from './pages/DexCheck'
import XANA from './pages/XANA';
import Careers from './pages/Careers';
import InformationSecurity from './pages/InformationSecurity';
import PrivacyPolicy from './pages/PrivacyPolicy'
import AntiSalveryPolicy from './pages/AntiSalveryPolicy'
import StaffAugmentationPage from './pages/StaffAugmentationPage';
import BlogBlockChain from './pages/BlogBlockChain';
import MobileDevelopment from './pages/MobileDevelopment'
import DeskTopWeb from './pages/DeskTopWeb';
import ProgramingBlog from './pages/ProgramingBlog';
import SoftwareMethodBlog from './pages/SoftwareMethodBlog';
import ReactDeveloper from './pages/ReactDeveloper';
import NodeDeveloper from './pages/NodeDeveloper';
import MernDeveloper from './pages/MernDeveloper';
import MevnDeveloper from './pages/MevnDeveloper';
import MeanDeveloper from './pages/MeanDeveloper';
import VueDeveloper from './pages/VueDeveloper';
import DjangoDeveloper from './pages/DjangoDeveloper';
import AndoridDeveloper from './pages/AndoridDeveloper'
import ScrollToTop from './ScrollToTop';
import Blog from './pages/Blog';
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

      <ScrollToTop />
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
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/portfolio/vividly' element={<VividlyPorject></VividlyPorject>}></Route>
        <Route path='/portfolio/kombo' element={<Kombo></Kombo>}></Route>
        <Route path='/portfolio/dex-check' element={<DexCheck></DexCheck>}></Route>
        <Route path='/portfolio/xana' element={<XANA></XANA>}></Route>
        <Route path='/careers' element={<Careers></Careers>}></Route>
        <Route path='/information-security' element={<InformationSecurity></InformationSecurity>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        <Route path='/anti-salvery-policy' element={<AntiSalveryPolicy></AntiSalveryPolicy>}></Route>
        <Route path='/staff-augmentation' element={<StaffAugmentationPage></StaffAugmentationPage>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/blog/exploring-blockchain-technology-real-world-use-cases-in-2024' element={<BlogBlockChain></BlogBlockChain>}></Route>
        <Route path='/blog/future-of-mobile-app-development' element={<MobileDevelopment></MobileDevelopment>}></Route>
        <Route path='/blog/desktop-vs-web' element={<DeskTopWeb></DeskTopWeb>}></Route>
        <Route path='/blog/top-10-programming-languages-in-future' element={<ProgramingBlog></ProgramingBlog>}></Route>
        <Route path='/blog/software-development-methodologies' element={<SoftwareMethodBlog></SoftwareMethodBlog>}></Route>
        <Route path='/staff-augmentation/react' element={<ReactDeveloper></ReactDeveloper>}></Route>
        <Route path='/staff-augmentation/node-js' element={<NodeDeveloper></NodeDeveloper>}></Route>
        <Route path='/staff-augmentation/mern-stack' element={<MernDeveloper></MernDeveloper>}></Route>
        <Route path='/staff-augmentation/mevn-stack' element={<MevnDeveloper></MevnDeveloper>}></Route>
        <Route path='/staff-augmentation/mean-stack' element={<MeanDeveloper></MeanDeveloper>}></Route>
        <Route path='/staff-augmentation/vue' element={<VueDeveloper></VueDeveloper>}></Route>
        <Route path='/staff-augmentation/django' element={<DjangoDeveloper></DjangoDeveloper>}></Route>
        <Route path='/staff-augmentation/android' element={<AndoridDeveloper></AndoridDeveloper>}></Route>


      </Routes>

    </>
  )
}

export default App
