import { FunctionComponent } from "react";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[78.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.625rem] pr-[1.25rem] pl-[0rem] box-border max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_16px_rgba(141,_211,_187,_0.15)] rounded-2xl bg-neutrals flex flex-col items-start justify-start pt-[1rem] pb-[2rem] pr-[1rem] pl-[2rem] box-border gap-[1.906rem] max-w-full z-[2] mq750:gap-[0.938rem]">
        <div className="w-[14.313rem] flex flex-row items-start justify-start gap-[1.937rem] text-[1rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.937rem]">
            <div className="self-stretch h-[3rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/airplane-1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem]">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3.563rem]">
                  Flights
                </a>
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender" />
            </div>
            <div className="w-[6.375rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border">
              <div className="h-[0.25rem] flex-1 relative box-border border-t-[4px] border-solid border-mint-green" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/ionbed-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="relative font-semibold inline-block min-w-[2.75rem]">
                  Stays
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.5rem] max-w-full text-gray-300">
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[13.188rem] max-w-full text-blackish-green">
            <div className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] [row-gap:20px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[10.563rem] min-h-[2.5rem]">
                  <input
                    className="w-[8.125rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="Lahore - Karachi"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[4.188rem]">
                      From - To
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-[0.75rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/ionswaphorizontal.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-gray-300">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="rounded-t rounded-b-none flex flex-col items-start justify-start text-[1rem]">
            <div className="rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem]">
                <div className="h-[2.5rem] flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[1.25rem] pl-[0rem] box-border relative">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative inline-block min-w-[3.5rem]">
                      Return
                    </div>
                  </div>
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] text-[0.875rem] text-blackish-green">
                    <div className="relative inline-block min-w-[1.688rem]">
                      Trip
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-[0.75rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] text-[0.875rem]">
              <div className="flex-1 relative whitespace-nowrap">
                Supporting text
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[13.188rem] max-w-full">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="w-[13.125rem] flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[1.75rem] pl-[0rem] relative">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300 min-w-[6.25rem]"
                    placeholder="07 Nov 22 - 13 Nov 22"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[6.688rem]">
                      Depart- Return
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[13.188rem] max-w-full">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
                  <input
                    className="w-[11.125rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="1 Passenger, Economy"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[7.625rem]">
                      Passenger - Class
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-[0rem] pr-[1rem] pl-[53.625rem] gap-[1.5rem] mq750:pl-[13.375rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border mq1225:flex-wrap mq1225:pl-[26.813rem] mq1225:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] py-[0.968rem] px-[0rem] bg-[transparent] rounded flex flex-row items-center justify-center gap-[0.25rem]">
              <img
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/addoutline.svg"
              />
              <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[7.625rem]">
                Add Promo Code
              </div>
            </button>
          </button>
          <div className="flex flex-col items-start justify-start">
            <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1rem] gap-[0.25rem] whitespace-nowrap">
              <img
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/paper-plane.svg"
              />
              <div className="relative font-medium inline-block min-w-[5.75rem]">
                Show Filghts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
