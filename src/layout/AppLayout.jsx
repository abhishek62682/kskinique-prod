import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

import Lenis from "lenis";
import FloatingActionButtons from "../components/common/FloatingActionButtons";

const AppLayout = () => {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    lenisRef.current = new Lenis({ autoRaf: true });
    return () => lenisRef.current?.destroy();
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <FloatingActionButtons />
    </>
  );
};

export default AppLayout;
