import { FunctionComponent } from "react";

export type FooterContentType = {
  className?: string;
};

const FooterContent: FunctionComponent<FooterContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[77rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-lightcyan overflow-hidden flex flex-row items-end justify-between py-[0rem] px-[1.5rem] box-border max-w-full shrink-0 gap-[1.25rem] text-left text-[2.75rem] text-blackish-green font-tradegothic-bold-16 mq1100:flex-wrap ${className}`}
    >
      <div className="w-[37.063rem] flex flex-col items-start justify-between py-[1.5rem] px-[0rem] box-border min-w-[37.063rem] min-h-[19.063rem] max-w-full mq750:min-w-full mq1100:flex-1">
        <h1 className="m-0 w-[22.75rem] relative text-inherit leading-[3.375rem] font-bold font-inherit inline-block max-w-full mq450:text-[1.625rem] mq450:leading-[2rem] mq750:text-[2.188rem] mq750:leading-[2.688rem]">
          Subscribe Newsletter
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.25rem] text-gray-700">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[7.313rem] mq450:text-[1rem]">
              The Travel
            </h3>
            <div className="relative text-[1rem] font-medium font-montserrat-medium-14 text-gray-800">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[1rem] max-w-full text-[1rem] text-gray-300 font-montserrat-medium-14 mq750:flex-wrap">
            <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[19.188rem] max-w-full">
              <div className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-center py-[0.625rem] px-[0rem] box-border max-w-full">
                    <div className="bg-neutrals flex flex-row items-center justify-start whitespace-nowrap">
                      <div className="relative">Your email address</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
                <div className="flex-1 relative">Supporting text</div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
              <div className="rounded bg-blackish-green flex flex-row items-center justify-center py-[1.218rem] px-[1rem]">
                <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-neutrals text-left inline-block min-w-[4.5rem]">
                  Subscribe
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[25rem] relative max-h-full overflow-hidden shrink-0 max-w-full mq1100:flex-1"
        loading="lazy"
        alt=""
        src="/emojionev1openmailboxwithloweredflag.svg"
      />
    </div>
  );
};

export default FooterContent;
