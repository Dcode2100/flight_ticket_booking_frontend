import { FunctionComponent } from "react";

export type HeaderLoggedIn1Type = {
  className?: string;
  logo?: string;
};

const HeaderLoggedIn1: FunctionComponent<HeaderLoggedIn1Type> = ({
  className = "",
  logo,
}) => {
  return (
    <header
      className={`self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-neutrals flex flex-row items-end justify-center pt-[1.312rem] px-[1.25rem] pb-[0rem] box-border gap-[20.725rem] top-[0] z-[99] sticky max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 lg:gap-[10.375rem] mq750:gap-[5.188rem] mq450:gap-[2.563rem] ${className}`}
    >
      <div className="w-[40.025rem] flex flex-col items-start justify-start gap-[1.281rem] max-w-full">
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
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.688rem] whitespace-nowrap">
                Find Stays
              </a>
            </div>
          </div>
          <img
            className="h-[2.25rem] w-[6.9rem] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={logo}
          />
        </div>
        <div className="w-[15.125rem] flex flex-row items-start justify-start gap-[2rem]">
          <div className="h-[0.313rem] flex-1 relative bg-mint-green" />
          <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[1rem]">
        <div className="flex flex-row items-start justify-start gap-[2rem] mq450:gap-[1rem]">
          <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[1rem]">
              <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/heart.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.688rem]">
                    Favourites
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                <div className="relative font-semibold inline-block min-w-[0.313rem]">
                  |
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[0.875rem] pb-[0rem] pr-[0rem] pl-[1.937rem] relative gap-[0.25rem]">
            <div className="!m-[0] absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start">
              <img
                className="h-[2.813rem] w-[2.813rem] relative rounded-[50%] object-cover"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="h-[0.625rem] w-[0.625rem] absolute !m-[0] right-[0.125rem] bottom-[0.125rem] rounded-[50%] bg-blackish-green z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[0.875rem] h-[0.875rem] relative overflow-hidden shrink-0 object-contain z-[2]"
                alt=""
                src="/arrow-down@2x.png"
              />
            </div>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3.438rem] whitespace-nowrap">
              John D.
            </a>
          </div>
        </div>
        <div className="w-[6.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
          <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
        </div>
      </div>
    </header>
  );
};

export default HeaderLoggedIn1;
