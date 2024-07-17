import { FunctionComponent } from "react";

export type HeaderDefaultType = {
  className?: string;
};

const HeaderDefault: FunctionComponent<HeaderDefaultType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-neutrals flex flex-row items-start justify-center pt-[1.312rem] px-[1.25rem] pb-[0rem] box-border gap-[25.912rem] top-[0] z-[99] sticky max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 mq1225:gap-[12.938rem] mq450:gap-[3.25rem] mq750:gap-[6.5rem] ${className}`}
    >
      <div className="w-[40.025rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[2rem] mq1050:hidden">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/airplane-1.svg"
                />
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem] whitespace-nowrap">
                  Find Flight
                </a>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/ionbed-1.svg"
                />
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[4.688rem] whitespace-nowrap">
                  Find Stays
                </a>
              </div>
            </div>
            <img
              className="h-[2.25rem] w-[6.9rem] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div className="w-[15.125rem] flex flex-row items-start justify-start gap-[2rem]">
            <div className="h-[0.313rem] flex-1 relative bg-mint-green" />
            <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
          </div>
        </div>
      </div>
      <div className="w-[11.063rem] flex flex-row items-center justify-between gap-[1.25rem]">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[2.563rem]">
          Login
        </a>
        <button className="cursor-pointer [border:none] p-0 bg-blackish-green rounded-lg overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center py-[0.968rem] px-[1.5rem]">
            <a className="[text-decoration:none] relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-neutrals text-center inline-block min-w-[3.5rem] whitespace-nowrap">
              Sign up
            </a>
          </div>
        </button>
      </div>
    </header>
  );
};

export default HeaderDefault;
