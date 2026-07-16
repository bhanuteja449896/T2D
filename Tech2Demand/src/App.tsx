import { useState, useEffect, useCallback } from "react";
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
import EngagementModels from "./components/engagement/EngagementModels";
import PayPerMeeting from "./components/engagement/PayPerMeeting";
import RetainerModel from "./components/engagement/RetainerModel";
import MultipleCampaigns from "./components/engagement/MultipleCampaigns";
import B2BDataService from "./components/engagement/B2BDataService";

// ─── Route helpers ────────────────────────────────────────────────────────────
// We store the current page in location.hash so the browser back/forward buttons
// work and users can share / bookmark links.
// Format:  /#/page-name   (e.g. /#/lead-generation)

const PAGE_FROM_HASH = (hash: string): string => {
  // hash looks like "#/lead-generation" or "" (home)
  const slug = hash.replace(/^#\//, "").trim();
  return slug || "home";
};

const HASH_FROM_PAGE = (page: string): string =>
  page === "home" ? "#/" : `#/${page}`;

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [currentPage, setCurrentPageState] = useState<string>(() =>
    PAGE_FROM_HASH(window.location.hash)
  );

  // Wrapped setter: updates state + browser history + scrolls to top
  const setCurrentPage = useCallback((page: string) => {
    const newHash = HASH_FROM_PAGE(page);
    // Only push a new history entry if the page is actually changing
    if (window.location.hash !== newHash) {
      window.history.pushState({ page }, "", newHash);
    }
    setCurrentPageState(page);
    // Always scroll to top on navigation - use instant to avoid flash
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Listen to browser back / forward
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const page = e.state?.page ?? PAGE_FROM_HASH(window.location.hash);
      setCurrentPageState(page);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);

    // On first load, replace the current history entry so state is populated
    window.history.replaceState(
      { page: currentPage },
      "",
      HASH_FROM_PAGE(currentPage)
    );

    return () => window.removeEventListener("popstate", handlePopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll reveal — add a lightweight CSS class to enable entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t2d-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all elements with the scroll-reveal class
    const revealEls = document.querySelectorAll(".t2d-reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]); // re-run whenever the page changes

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {currentPage === "home" && (
        <>
          <Section1 setCurrentPage={setCurrentPage} />
          <Section2 setCurrentPage={setCurrentPage} />
          <Section3 setCurrentPage={setCurrentPage} />
          <Section4 setCurrentPage={setCurrentPage} />
        </>
      )}
      {currentPage === "services" && (
        <>
          <ServicesSection1 setCurrentPage={setCurrentPage} />
          <ServicesSection2 />
        </>
      )}
      {currentPage === "linkedin-lead-gen" && (
        <LinkedInLeadGeneration setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "appointment-setting" && (
        <AppointmentSetting setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "cold-email-outreach" && (
        <ColdEmailOutreach setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "growth-solutions" && (
        <GrowthSolutions setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "lead-generation" && (
        <LeadGeneration setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "b2b-data" && (
        <B2BData setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "talk" && <TalkToUs />}
      {currentPage === "company" && (
        <Company setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "engagement-models" && (
        <EngagementModels setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "pay-per-meeting" && (
        <PayPerMeeting setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "retainer-model" && (
        <RetainerModel setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "multiple-campaigns" && (
        <MultipleCampaigns setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "b2b-data-service" && (
        <B2BDataService setCurrentPage={setCurrentPage} />
      )}

      <Footer />
    </>
  );
}

export default App;
