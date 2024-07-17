import { FunctionComponent } from "react";
import HeaderLoggedIn1 from "../components/HeaderLoggedIn1";
import Main from "../components/Main";
import Footer1 from "../components/Footer1";

const BookingDetail2: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-start justify-start gap-[3rem] leading-[normal] tracking-[normal] mq750:gap-[1.5rem]">
      <HeaderLoggedIn1 logo="/logo2@2x.png" />
      <Main />
      <Footer1 />
    </div>
  );
};

export default BookingDetail2;
