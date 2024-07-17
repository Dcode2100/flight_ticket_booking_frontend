import { FunctionComponent } from "react";
import HeaderLoggedIn1 from "../components/HeaderLoggedIn1";
import SummaryParent from "../components/SummaryParent";
import Footer1 from "../components/Footer1";

const BookingDetail1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-start justify-start gap-[3rem] leading-[normal] tracking-[normal] mq750:gap-[1.5rem]">
      <HeaderLoggedIn1 logo="/logo2@2x.png" />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[5rem] pb-[4.5rem] box-border max-w-full lg:pb-[2.938rem] lg:box-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:pb-[1.938rem] mq750:box-border">
        <SummaryParent />
      </section>
      <Footer1 />
    </div>
  );
};

export default BookingDetail1;
