import { FunctionComponent } from "react";
import FooterBottom from "./FooterBottom";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] rounded-11xl flex flex-col items-center justify-end pt-[9.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:gap-[4rem] mq750:pt-[6.125rem] mq750:box-border mq450:gap-[2rem] ${className}`}
    >
      <footer className="self-stretch h-[26.375rem] bg-mint-green flex flex-col items-center justify-end pt-[0rem] px-[1.25rem] pb-[4rem] box-border gap-[4rem] max-w-full text-left text-[2.75rem] text-blackish-green font-tradegothic-bold-16 lg:h-auto mq750:gap-[2rem] mq750:pb-[2.625rem] mq750:box-border mq450:gap-[1rem]">
        <div className="w-[77rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-lightcyan overflow-hidden flex flex-row items-end justify-between py-[0rem] px-[1.5rem] box-border max-w-full shrink-0 gap-[1.25rem] lg:flex-wrap">
          <div className="w-[37.063rem] flex flex-col items-start justify-between py-[1.5rem] px-[0rem] box-border min-w-[37.063rem] min-h-[19.063rem] max-w-full lg:flex-1 mq750:min-w-full">
            <h1 className="m-0 w-[22.75rem] relative text-inherit leading-[3.375rem] font-bold font-inherit inline-block max-w-full mq450:text-[1.625rem] mq450:leading-[2rem] mq1050:text-[2.188rem] mq1050:leading-[2.688rem]">
              Subscribe Newsletter
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.25rem] text-gray-700">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[7.313rem] mq450:text-[1rem]">
                  The Travel
                </h3>
                <div className="relative text-[1rem] font-medium font-montserrat-medium-14 text-gray-800">
                  Get inspired! Receive travel discounts, tips and behind the
                  scenes stories.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[1rem] max-w-full text-[0.875rem] text-gray-300 font-montserrat-medium-14 mq750:flex-wrap">
                <div className="h-[3.5rem] flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[18.75rem] max-w-full">
                  <div className="w-[29.563rem] h-[3.5rem] rounded bg-neutrals flex flex-col items-start justify-start">
                    <div className="w-[29.563rem] h-[3.5rem] rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border">
                      <div className="h-[2.5rem] flex-1 flex flex-col items-start justify-center py-[0.625rem] px-[0rem] box-border">
                        <div className="w-[9.563rem] h-[1.25rem] bg-neutrals flex flex-row items-center justify-start whitespace-nowrap">
                          <input
                            className="w-[9.563rem] [border:none] [outline:none] font-montserrat-medium-14 text-[1rem] bg-[transparent] h-[1.25rem] relative text-gray-300 text-left inline-block"
                            placeholder="Your email address"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                    <div className="flex-1 relative">Supporting text</div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                  <div className="rounded bg-blackish-green flex flex-row items-center justify-center py-[1.218rem] px-[1rem]">
                    <a className="[text-decoration:none] relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-neutrals text-left inline-block min-w-[4.5rem]">
                      Subscribe
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="w-[25rem] relative max-h-full overflow-hidden shrink-0 max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src="/emojionev1openmailboxwithloweredflag.svg"
          />
        </div>
        <FooterBottom logo="/logo-11@2x.png" />
      </footer>
    </div>
  );
};

export default Footer;
