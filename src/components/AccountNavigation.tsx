import { FunctionComponent } from "react";

export type AccountNavigationType = {
  className?: string;
};

const AccountNavigation: FunctionComponent<AccountNavigationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem] box-border max-w-full text-left text-[1rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <div className="h-[5rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-x-auto flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border gap-[1.462rem] max-w-full">
        <div className="w-[48.338rem] shrink-0 flex flex-col items-end justify-start gap-[1rem] max-w-[calc(100%_-_411px)]">
          <div className="self-stretch h-[3rem] flex flex-row items-start justify-start gap-[1.468rem] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_411px)] shrink-0">
              <div className="self-stretch relative font-semibold">Account</div>
            </div>
            <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_411px)] shrink-0">
              <div className="self-stretch relative font-semibold">
                Tickets/Bookings
              </div>
            </div>
          </div>
          <div className="w-[41.9rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div className="h-[0.25rem] w-[17.75rem] relative box-border border-t-[4px] border-solid border-mint-green" />
          </div>
        </div>
        <div className="h-[3.063rem] w-[0.063rem] relative box-border shrink-0 border-r-[1px] border-solid border-lavender" />
        <div className="w-[22.669rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch relative font-semibold">
            Payment methods
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountNavigation;
