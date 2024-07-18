import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import Navigation1 from "../components/Navigation1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Newsletter from "../components/Newsletter";
import FooterBottom from "../components/FooterBottom";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

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
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[1.875rem] px-[0rem] pb-[0rem] box-border gap-[5.625rem] leading-[normal] tracking-[normal] mq750:gap-[2.813rem] mq450:gap-[1.375rem]">
    

      <FrameComponent4 />
      <section className="w-[84.75rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem]  box-border gap-[4.375rem] max-w-full mq750:gap-[2.188rem] mq450:gap-[1.063rem]">
        <Navigation1 />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <section className="self-stretch shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] rounded-11xl flex flex-col items-center justify-end pt-[9.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:gap-[4rem] mq750:pt-[6.125rem] mq750:box-border mq450:gap-[2rem]">
        <footer className="self-stretch h-[26.375rem] bg-mint-green flex flex-col items-center justify-end pt-[0rem] px-[1.25rem] pb-[4rem] box-border gap-[4rem] max-w-full mq750:gap-[2rem] mq750:pb-[2.625rem] mq750:box-border mq450:gap-[1rem] mq1225:h-auto">
          <Newsletter />
          <FooterBottom logo="/logo-1@2x.png" />
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;