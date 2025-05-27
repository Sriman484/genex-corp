import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Highlights from "./components/Home/Highlights";
import HomeContent from "./components/Home/HomeContent";
import Support from "./components/Support";
import Jobs from "./components/Jobs";
import TrainingIntern from "./components/Trainings/TrainingIntern";
import RealtimeIntern from "./components/Trainings/RealtimeIntern";
import CorporateTraining from "./components/Trainings/CorporateTraining";
import ProductDev from "./components/Services/ProductDev";
import ItConsult from "./components/Services/ItConsult";
import ItResourcing from "./components/Services/ItResource";
import Objective from "./components/Home/Objective";
import Portfolio from "./components/Home/Portfolio";


function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Highlights />
      <HomeContent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/training-intern" element={<TrainingIntern />} />
        <Route path="/realtime-intern" element={<RealtimeIntern />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/product-dev" element={<ProductDev />} />
        <Route path="/it-consult" element={<ItConsult />} />
        <Route path="/it-resource" element={<ItResourcing />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
