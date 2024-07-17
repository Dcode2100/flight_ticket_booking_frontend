import { FunctionComponent } from "react";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[5rem] box-border max-w-full text-left text-[2.813rem] text-neutrals font-tradegothic-bold-16 mq450:pb-[2.125rem] mq450:box-border mq1050:pb-[3.25rem] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[5rem] pb-[15.875rem] pr-[1.25rem] pl-[7.875rem] box-border gap-[0.5rem] bg-[url('/public/travel-offers@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pl-[1.25rem] mq450:box-border mq750:pl-[3.938rem] mq750:pt-[3.25rem] mq750:pb-[10.313rem] mq750:box-border">
        <h1 className="m-0 w-[27.5rem] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.688rem] mq750:text-[2.25rem]">
          Make your travel whishlist, we’ll do the rest
        </h1>
        <h3 className="m-0 w-[23.438rem] relative text-[1.25rem] font-medium font-montserrat-medium-14 inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-[1rem]">
          Special offers to suit your plan
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.625rem] pl-[1.25rem] box-border max-w-full mt-[-4.75rem] text-[0.875rem] text-blackish-green font-montserrat-medium-14">
        <div className="w-[77rem] shadow-[0px_4px_16px_rgba(141,_211,_187,_0.15)] rounded-2xl bg-neutrals flex flex-col items-end justify-center pt-[2rem] px-[1.5rem] pb-[3rem] box-border gap-[2rem] max-w-full z-[1] mq750:gap-[1rem]">
          <h3 className="m-0 self-stretch relative text-[1.25rem] font-semibold font-inherit mq450:text-[1rem]">{`Where are you flying? `}</h3>
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
          <div className="flex flex-row items-center justify-center py-[0rem] pr-[0rem] pl-[54.625rem] gap-[1.5rem] mq1225:flex-wrap mq1225:pl-[27.313rem] mq1225:box-border mq450:pl-[1.25rem] mq450:box-border mq750:pl-[13.625rem] mq750:box-border">
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
              <div className="rounded bg-slamon flex flex-row items-center justify-center py-[0.968rem] px-[1rem] gap-[0.25rem] whitespace-nowrap">
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
    </section>
  );
};

export default FrameComponent10;
