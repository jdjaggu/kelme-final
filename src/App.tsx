import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import WishlistPage from "./pages/WishlistPage";

// New & Featured Pages
import NewArrivalsPage from "./pages/NewArrivalsPage";
import BestSellersPage from "./pages/BestSellersPage";
import LatestDropsPage from "./pages/LatestDropsPage";
import ShopNewPage from "./pages/ShopNewPage";
import ShopAllPage from "./pages/ShopAllPage";

// Custom Printing Pages
import CustomPrintingPage from "./pages/CustomPrintingPage";

// Trending Pages
import TrendingPage from "./pages/TrendingPage";
import KelmeFormCollectionPage from "./pages/trending/KelmeFormCollectionPage";
import KelmeStyleByPage from "./pages/trending/KelmeStyleByPage";

// Blog Pages
import BlogPage from "./pages/blog/BlogPage";
import LatestArticlesPage from "./pages/blog/LatestArticlesPage";
import BuyingGuidesPage from "./pages/blog/BuyingGuidesPage";
import StyleTipsPage from "./pages/blog/StyleTipsPage";
import PerformanceInsightsPage from "./pages/blog/PerformanceInsightsPage";

// Help Pages
import ContactUsPage from "./pages/help/ContactUsPage";
import FAQsPage from "./pages/help/FAQsPage";
import ShippingReturnsPage from "./pages/help/ShippingReturnsPage";
import OrderTrackingPage from "./pages/help/OrderTrackingPage";
import SizeGuidesPage from "./pages/help/SizeGuidesPage";

// About Pages
import AboutKelmePage from "./pages/about/AboutKelmePage";
import SustainabilityPage from "./pages/about/SustainabilityPage";
import CareersPage from "./pages/about/CareersPage";
import PressPage from "./pages/about/PressPage";

// Sales Pages
import SalesPage from "./pages/SalesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Home */}
            <Route index element={<HomePage />} />
            
            {/* New & Featured Routes */}
            <Route path="new-featured" element={<CategoryPage />} />
            <Route path="new-arrivals" element={<NewArrivalsPage />} />
            <Route path="best-sellers" element={<BestSellersPage />} />
            <Route path="latest-drops" element={<LatestDropsPage />} />
            <Route path="shop-new" element={<ShopNewPage />} />
            <Route path="shop-all" element={<ShopAllPage />} />
            
            {/* Sales Routes */}
            <Route path="sales" element={<SalesPage />} />
            <Route path="sales/30-percent" element={<SalesPage />} />
            <Route path="sales/50-percent" element={<SalesPage />} />
            
            {/* Custom Printing Routes */}
            <Route path="custom-printing" element={<CustomPrintingPage />} />
            <Route path="custom-printing/name-number" element={<CustomPrintingPage />} />
            <Route path="custom-printing/logo" element={<CustomPrintingPage />} />
            <Route path="custom-printing/team-jerseys" element={<CustomPrintingPage />} />
            <Route path="custom-printing/personal-design" element={<CustomPrintingPage />} />
            <Route path="custom-printing/bulk-orders" element={<CustomPrintingPage />} />
            
            {/* Trending Routes */}
            <Route path="trending" element={<TrendingPage />} />
            <Route path="kelme-form-collection" element={<KelmeFormCollectionPage />} />
            <Route path="kelme-style-by" element={<KelmeStyleByPage />} />
            
            {/* Search Route */}
            <Route path="search" element={<CategoryPage />} />
            
            {/* Category Routes */}
            <Route path="category/:category/:subcategory/:itemType/:subItemType" element={<CategoryPage />} />
            <Route path="category/:category/:subcategory/:itemType" element={<CategoryPage />} />
            <Route path="category/:category/:subcategory" element={<CategoryPage />} />
            <Route path="category/:category" element={<CategoryPage />} />
            
            {/* Sports Routes */}
            <Route path="sports" element={<CategoryPage />} />
            <Route path="sports/:sport" element={<CategoryPage />} />
            <Route path="sports/:sport/:category" element={<CategoryPage />} />
            
            {/* Blog Routes */}
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/latest-articles" element={<LatestArticlesPage />} />
            <Route path="blog/buying-guides" element={<BuyingGuidesPage />} />
            <Route path="blog/style-tips" element={<StyleTipsPage />} />
            <Route path="blog/performance-insights" element={<PerformanceInsightsPage />} />
            <Route path="blog/:category" element={<CategoryPage />} />
            
            {/* Main Routes */}
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            
            {/* Help Pages */}
            <Route path="help/contact-us" element={<ContactUsPage />} />
            <Route path="help/faqs" element={<FAQsPage />} />
            <Route path="help/shipping-returns" element={<ShippingReturnsPage />} />
            <Route path="help/order-tracking" element={<OrderTrackingPage />} />
            <Route path="help/size-guides" element={<SizeGuidesPage />} />
            
            {/* About Pages */}
            <Route path="about/about-kelme" element={<AboutKelmePage />} />
            <Route path="about/sustainability" element={<SustainabilityPage />} />
            <Route path="about/careers" element={<CareersPage />} />
            <Route path="about/press" element={<PressPage />} />
          </Route>
          
          {/* 404 Route - Outside MainLayout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
