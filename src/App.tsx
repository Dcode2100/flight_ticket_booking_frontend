import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FlightsSearch from "./pages/FlightsSearch";
import FlightListing from "./pages/FlightListing";
import FlightDetailPage from "./pages/FlightDetailPage";
import BookingDetail from "./pages/BookingDetail";
import BookingDetail1 from "./pages/BookingDetail1";
import BookingDetail2 from "./pages/BookingDetail2";
import BookingDetail3 from "./pages/BookingDetail3";
import AccountHistory from "./pages/AccountHistory";
import AccountPaymentMethods from "./pages/AccountPaymentMethods";
import Account from "./pages/Account";
import AccountHistory1 from "./pages/AccountHistory1";
import AccountPaymentMethods1 from "./pages/AccountPaymentMethods1";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPasswordVerifyCode from "./pages/ForgotPasswordVerifyCode";
import ForgotPasswordSetANewPas from "./pages/ForgotPasswordSetANewPas";
import SignUpAddAPaymentMethod from "./pages/SignUpAddAPaymentMethod";
import Login1 from "./pages/Login1";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate hook
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/flights-search":
        title = "";
        metaDescription = "";
        break;
      case "/flight-listing":
        title = "";
        metaDescription = "";
        break;
      case "/flight-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/booking-detail":
        title = "";
        metaDescription = "";
        break;
      case "/booking-detail1":
        title = "";
        metaDescription = "";
        break;
      case "/booking-detail2":
        title = "";
        metaDescription = "";
        break;
      case "/booking-detail3":
        title = "";
        metaDescription = "";
        break;
      case "/account-history":
        title = "";
        metaDescription = "";
        break;
      case "/account-payment-methods":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
      case "/account-history1":
        title = "";
        metaDescription = "";
        break;
      case "/account-payment-methods1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-verify-code":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-set-a-new-password":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-add-a-payment-method":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      // if (metaDescriptionTag) {
      //   metaDescriptionTag.content = metaDescription;
      // }
    }
  }, [pathname]);

  const routes = [
    { path: "/", label: "Landing Page" },
    { path: "/flights-search", label: "Flights Search" },
    { path: "/flight-listing", label: "Flight Listing" },
    { path: "/flight-detail-page", label: "Flight Detail Page" },
    { path: "/booking-detail", label: "Booking Detail" },
    { path: "/booking-detail1", label: "Booking Detail 1" },
    { path: "/booking-detail2", label: "Booking Detail 2" },
    { path: "/booking-detail3", label: "Booking Detail 3" },
    { path: "/account", label: "Account" },
    { path: "/account-history", label: "Account History" },
    { path: "/account-history1", label: "Account History 1" },
    { path: "/account-payment-methods", label: "Account Payment Methods" },
    { path: "/account-payment-methods1", label: "Account Payment Methods 1" },
    { path: "/sign-up", label: "Sign Up" },
    { path: "/login", label: "Login" },
    { path: "/login1", label: "Login 1" },
    { path: "/forgot-password", label: "Forgot Password" },
    { path: "/forgot-password-verify-code", label: "Forgot Password Verify Code" },
    { path: "/forgot-password-set-a-new-password", label: "Forgot Password Set New Password" },
    { path: "/sign-up-add-a-payment-method", label: "Sign Up Add Payment Method" },
  ];

  return (
    <>
      <div className="w-full overflow-x-auto p-4 bg-white shadow-md">
        <div className="flex flex-wrap gap-2">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => navigate(route.path)}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
            >
              {route.label}
            </button>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flights-search" element={<FlightsSearch />} />
        <Route path="/flight-listing" element={<FlightListing />} />
        <Route path="/flight-detail-page" element={<FlightDetailPage />} />
        <Route path="/booking-detail" element={<BookingDetail />} />
        <Route path="/booking-detail1" element={<BookingDetail1 />} />
        <Route path="/booking-detail2" element={<BookingDetail2 />} />
        <Route path="/booking-detail3" element={<BookingDetail3 />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account-history" element={<AccountHistory />} />
        <Route path="/account-history1" element={<AccountHistory1 />} />
        <Route path="/account-payment-methods" element={<AccountPaymentMethods />} />
        <Route path="/account-payment-methods1" element={<AccountPaymentMethods1 />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-verify-code" element={<ForgotPasswordVerifyCode />} />
        <Route path="/forgot-password-set-a-new-password" element={<ForgotPasswordSetANewPas />} />
        <Route path="/sign-up-add-a-payment-method" element={<SignUpAddAPaymentMethod />} />
      </Routes>
    </>
  );
}

export default App;
