
import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/custom/Header";
import Footer from "../ui/custom/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  console.log("MainLayout rendering...");
  const location = useLocation();
  console.log("MainLayout location:", location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
