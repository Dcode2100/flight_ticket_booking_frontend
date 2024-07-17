import { FunctionComponent } from "react";
import Flight from "./Flight";

export type DestinationParentType = {
  className?: string;
};

const DestinationParent: FunctionComponent<DestinationParentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[77rem] flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[0.875rem] text-slamon font-montserrat-medium-14 mq750:gap-[1rem] ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq450:flex-wrap">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[3rem]">
          Turkey
        </a>
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-forward.svg"
          />
        </div>
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[3.625rem]">
          Istanbul
        </a>
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-forward.svg"
          />
        </div>
        <div className="relative font-medium text-gray-400">
          CVK Park Bosphorus Hotel Istanbul
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.5rem] text-blackish-green font-tradegothic-bold-16">
        <div className="flex-1 flex flex-col items-start justify-start pt-[8.5rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:pt-[5.5rem] mq750:box-border">
          <img
            className="self-stretch relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-33@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[29.187rem] max-w-full ml-[-77rem] mq450:gap-[3.625rem] mq750:gap-[7.313rem] mq1275:gap-[14.563rem]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[1rem] min-w-[23.375rem] max-w-full mq450:min-w-full mq750:flex-1">
              <div className="flex flex-row items-center justify-start">
                <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.188rem]">
                  Emirates A380 Airbus
                </h2>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[0.875rem] text-gray-400 font-montserrat-medium-14">
                <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 min-h-[1.125rem]"
                    loading="lazy"
                    alt=""
                    src="/location.svg"
                  />
                  <div className="relative font-medium">
                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem] text-blackish-green">
                  <div className="w-[2.5rem] flex flex-col items-start justify-start">
                    <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.625rem] border-[1px] border-solid border-mint-green">
                      <div className="relative font-medium inline-block min-w-[1.125rem]">
                        4.2
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <b>Very Good</b>
                    <span className="font-medium"> 54 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[1rem] min-w-[17.25rem] text-right text-[2rem] text-slamon font-montserrat-medium-14 mq750:flex-1">
              <b className="relative inline-block min-w-[5.188rem] whitespace-nowrap mq450:text-[1.188rem] mq750:text-[1.625rem]">
                $240
              </b>
              <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-[3rem] rounded box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.812rem] border-[1px] border-solid border-mint-green">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/heart-11.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="w-[3rem] rounded box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.812rem] border-[1px] border-solid border-mint-green">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/share.svg"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                  <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[2.375rem] whitespace-nowrap">
                    <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[4.563rem]">
                      Book now
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.188rem]">
                  Basic Economy Features
                </h2>
                <div className="flex flex-row items-start justify-start gap-[1.5rem] max-w-full text-[0.875rem] font-montserrat-medium-14 mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <input
                      className="m-0 h-[1.5rem] w-[1.5rem] relative"
                      type="checkbox"
                    />
                    <div className="relative font-medium inline-block min-w-[4.188rem]">
                      Economy
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <input
                      className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      type="checkbox"
                    />
                    <div className="relative font-medium inline-block min-w-[4.5rem]">
                      First Class
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <input
                      className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      type="checkbox"
                    />
                    <div className="relative font-medium inline-block min-w-[6.063rem]">
                      Busines Class
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[1.187rem] mq1275:flex-wrap mq1275:justify-center">
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-186@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-142@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-189@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-185@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-189@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-185@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-185@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-183@2x.png"
                />
                <img
                  className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem]"
                  loading="lazy"
                  alt=""
                  src="/frame-184@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-mediumaquamarine-100 flex flex-col items-start justify-start p-[1rem] box-border gap-[1rem] max-w-full">
              <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.188rem]">
                Emirates Airlines Policies
              </h2>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[6.562rem] pl-[0rem] box-border gap-[1rem] max-w-full text-[1rem] text-gray-400 font-montserrat-medium-14 mq750:pr-[1.625rem] mq750:box-border mq1275:pr-[3.25rem] mq1275:box-border">
                <div className="flex-1 flex flex-row items-center justify-start gap-[1rem] min-w-[23.188rem] max-w-full mq750:min-w-full">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/ionstopwatch.svg"
                  />
                  <div className="flex-1 relative font-medium inline-block max-w-[calc(100%_-_40px)]">
                    Pre-flight cleaning, installation of cabin HEPA filters.
                  </div>
                </div>
                <div className="w-[31.75rem] flex flex-row items-center justify-start py-[0rem] px-[0rem] box-border gap-[1rem] max-w-full">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/ionstopwatch.svg"
                  />
                  <div className="w-[77rem] relative font-medium inline-block shrink-0 max-w-[243%]">
                    Pre-flight health screening questions.
                  </div>
                </div>
              </div>
            </div>
            <Flight />
            <Flight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationParent;
