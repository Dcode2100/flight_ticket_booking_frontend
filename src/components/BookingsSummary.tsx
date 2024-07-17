import { FunctionComponent } from "react";
import AccountSummary from "./AccountSummary";
import AccountNavigation from "./AccountNavigation";
import CheckInDetails from "./CheckInDetails";

export type BookingsSummaryType = {
  className?: string;
};

const BookingsSummary: FunctionComponent<BookingsSummaryType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[25.688rem] left-[6.5rem] w-[77rem] flex flex-col items-start justify-start gap-[1rem] max-w-full text-left text-[1.5rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <AccountSummary />
      <AccountNavigation />
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[2rem]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-black font-tradegothic-bold-16 mq450:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Tickets/Bookings
          </h1>
          <div className="flex flex-col items-start justify-start pt-[1.375rem] px-[0rem] pb-[0rem] text-right text-[0.875rem] text-blackish-green font-montserrat-medium-14">
            <div className="flex flex-row items-start justify-start gap-[0.25rem]">
              <div className="relative font-semibold inline-block min-w-[4.75rem]">
                Upcoming
              </div>
              <img
                className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 min-h-[1.125rem]"
                alt=""
                src="/chevron-down-6.svg"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-x-auto flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border gap-[1.468rem] max-w-full text-[1rem]">
          <div className="w-[36rem] shrink-0 flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_604px)]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/airplane-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[22.125rem] max-w-full mq450:min-w-full">
                <div className="self-stretch relative font-semibold">
                  Flights
                </div>
              </div>
            </div>
          </div>
          <div className="h-[3.063rem] w-[0.063rem] relative box-border shrink-0 border-r-[1px] border-solid border-lavender" />
          <div className="h-[3rem] w-[34.75rem] shrink-0 flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_624px)] mq750:h-auto">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem] max-w-full shrink-0">
              <div className="w-[34rem] flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/ionbed-1.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[20.813rem] max-w-full">
                  <div className="self-stretch relative font-semibold">
                    Stays
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.25rem] relative box-border border-t-[4px] border-solid border-mint-green" />
            </div>
          </div>
        </div>
        <CheckInDetails />
      </div>
      <CheckInDetails />
      <CheckInDetails />
    </section>
  );
};

export default BookingsSummary;
