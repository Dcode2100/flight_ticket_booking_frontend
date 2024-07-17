import { FunctionComponent } from "react";

export type FlightType = {
  className?: string;
};

const Flight: FunctionComponent<FlightType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals flex flex-col items-start justify-start py-[2rem] pr-[0.5rem] pl-[1.5rem] box-border gap-[2.5rem] max-w-full text-left text-[1.25rem] text-blackish-green font-tradegothic-bold-16 mq750:gap-[1.25rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
        <div className="w-[74.063rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
            Return Wed, Dec 8
          </h3>
          <div className="relative font-medium font-montserrat-medium-14 text-gray-400 inline-block min-w-[4.75rem] mq450:text-[1rem]">
            2h 28m
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1.5rem] font-montserrat-medium-14 mq750:flex-wrap">
          <div className="rounded-lg bg-neutrals flex flex-row items-end justify-start py-[0.937rem] px-[1.937rem] gap-[1.5rem] border-[0.5px] border-solid border-mint-green">
            <div className="w-[4rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.293rem] box-border">
              <img
                className="self-stretch h-[2.781rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/kisspngdubaiairbusa380emiratesairlinelogo5adaedbb89d2d6-1@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[6.875rem] mq450:text-[1.188rem]">
                Emirates
              </h2>
              <div className="relative text-[0.875rem] font-medium text-gray-1300 inline-block min-w-[5.375rem]">
                Airbus A320
              </div>
            </div>
          </div>
          <div className="w-[22.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch rounded-xl bg-neutrals flex flex-row items-start justify-between py-[1rem] px-[1.5rem] gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
              <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/airplane-1.svg"
                />
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
              <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/wifi.svg"
                />
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
              <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/ionstopwatch.svg"
                />
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
              <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/ionfastfood.svg"
                />
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
              <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icroundairlineseatreclinenormal.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[0rem] px-[12.25rem] gap-[5rem] text-[1.5rem] font-montserrat-medium-14 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[1.25rem] mq750:pl-[3.063rem] mq750:pr-[3.063rem] mq750:box-border mq1275:gap-[2.5rem] mq1275:pl-[6.125rem] mq1275:pr-[6.125rem] mq1275:box-border">
        <div className="flex-1 flex flex-row items-center justify-start gap-[1rem] min-w-[9.75rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative font-semibold inline-block min-w-[6.875rem] whitespace-nowrap mq450:text-[1.188rem]">
              12:00 pm
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-[1rem] text-gray-1300">
            <div className="relative font-medium inline-block min-w-[7.125rem]">
              Newark(EWR)
            </div>
          </div>
        </div>
        <img
          className="h-[3rem] w-[10.5rem] object-contain"
          loading="lazy"
          alt=""
          src="/frame-181@2x.png"
        />
        <div className="flex-1 flex flex-row items-center justify-start gap-[1rem] min-w-[9.75rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative font-semibold inline-block min-w-[6.875rem] whitespace-nowrap mq450:text-[1.188rem]">
              12:00 pm
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-[1rem] text-gray-1300">
            <div className="relative font-medium inline-block min-w-[7.125rem]">
              Newark(EWR)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
