import { useState } from "react";
import Section1 from "./components/frontpage/Section1";
import Section2 from "./components/frontpage/Section2";
import Section3 from "./components/frontpage/Section3";
import Section4 from "./components/frontpage/Section4";
import Navbar from "./components/navbar/Navbar";
import ServicesSection1 from "./components/services/Section1";
import ServicesSection2 from "./components/services/Section2";
import Footer from "./components/footer/Footer";
import TalkToUs from "./components/talktous/TalkToUs";
import Company from "./components/company/Company";
import LinkedInLeadGeneration from "./components/services/LinkedInLeadGeneration";
import AppointmentSetting from "./components/services/AppointmentSetting";
import ColdEmailOutreach from "./components/services/ColdEmailOutreach";
import GrowthSolutions from "./components/services/GrowthSolutions";
import LeadGeneration from "./components/services/LeadGeneration";
import B2BData from "./components/services/B2BData";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <>
          <Section1 setCurrentPage={setCurrentPage} />
          <Section2 setCurrentPage={setCurrentPage} />
          <Section3 setCurrentPage={setCurrentPage} />
          <Section4 setCurrentPage={setCurrentPage} />
        </>
      )}
      {currentPage === 'services' && (
        <>
          <ServicesSection1 setCurrentPage={setCurrentPage} />
          <ServicesSection2 />
        </>
      )}
      {currentPage === 'linkedin-lead-gen' && (
        <LinkedInLeadGeneration setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'appointment-setting' && (
        <AppointmentSetting setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'cold-email-outreach' && (
        <ColdEmailOutreach setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'growth-solutions' && (
        <GrowthSolutions setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'lead-generation' && (
        <LeadGeneration setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'b2b-data' && (
        <B2BData setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'talk' && (
        <TalkToUs />
      )}
      {currentPage === 'company' && (
        <Company setCurrentPage={setCurrentPage} />
      )}
      <Footer />
    </>
  );
}

export default App;
