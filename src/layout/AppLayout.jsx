import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";
import CtaSection from "../components/common/CtaSection";

import Lenis from "lenis";
import FloatingActionButtons from "../components/common/FloatingActionButtons";
import PageLoader from "../components/common/PageLoader";

const AppLayout = () => {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    lenisRef.current = new Lenis({ autoRaf: true });
    return () => lenisRef.current?.destroy();
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <PageLoader />

      <Navbar />
      <Outlet />
      <CtaSection />
      <Footer />

      <FloatingActionButtons />
    </>
  );
};

export default AppLayout;
