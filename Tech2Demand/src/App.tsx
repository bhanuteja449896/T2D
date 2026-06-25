import { useState } from "react";
import Section1 from "./components/frontpage/Section1";
import Section2 from "./components/frontpage/Section2";
import Section3 from "./components/frontpage/Section3";
import Section4 from "./components/frontpage/Section4";
import Navbar from "./components/navbar/Navbar";
import ServicesSection1 from "./components/services/Section1";
import ServicesSection2 from "./components/services/Section2";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
      {currentPage === 'services' && (
        <>
          <ServicesSection1 />
          <ServicesSection2 />
        </>
      )}
    </>
  );
}

export default App;
