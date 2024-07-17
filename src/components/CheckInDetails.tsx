import { FunctionComponent } from "react";

export type CheckInDetailsType = {
  className?: string;
};

const CheckInDetails: FunctionComponent<CheckInDetailsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-2xl bg-neutrals flex flex-row items-start justify-between py-[2rem] px-[1.5rem] box-border max-w-full gap-[1.25rem] text-left text-[1.25rem] text-blackish-green font-montserrat-medium-14 mq1050:flex-wrap ${className}`}
    >
      <div className="w-[43.563rem] flex flex-row items-start justify-start gap-[2rem] max-w-full mq750:flex-wrap">
        <div className="h-[5rem] w-[5rem] rounded-lg box-border flex flex-col items-center justify-center py-[0.625rem] px-[0.25rem] border-[0.5px] border-solid border-mint-green">
          <img
            className="w-[4.375rem] h-[4.375rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/download-2@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[23.75rem] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq750:flex-wrap">
            <div className="w-[9.625rem] flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative text-[1rem] text-gray-400 inline-block min-w-[4.5rem] shrink-0">
                  Check-In
                </div>
                <div className="self-stretch flex flex-row items-start justify-end mt-[-0.5rem]">
                  <div className="relative font-semibold inline-block min-w-[1.25rem] shrink-0 mq450:text-[1rem]">
                    —
                  </div>
                </div>
                <div className="relative font-semibold inline-block min-w-[7.375rem] shrink-0 mt-[-0.5rem] mq450:text-[1rem]">
                  Thur, Dec 8
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.812rem] pb-[0rem] pr-[0.5rem] pl-[0rem] text-[1rem] text-gray-400">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[5.375rem]">
                  Check Out
                </div>
                <div className="relative text-[1.25rem] font-semibold text-blackish-green inline-block min-w-[6rem] mq450:text-[1rem]">
                  Fri, Dec 9
                </div>
              </div>
            </div>
            <div className="h-[3.938rem] flex flex-col items-start justify-start pt-[0.937rem] pb-[0rem] pr-[0.437rem] pl-[0rem] box-border">
              <div className="w-[0.063rem] flex-1 relative box-border border-r-[1px] border-solid border-lavender" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.5rem] min-w-[11rem] text-[0.75rem] text-gray-1300">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative rounded"
                    loading="lazy"
                    alt=""
                    src="/frame-26086971.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-semibold inline-block min-w-[5.5rem]">
                      Check-In time
                    </div>
                    <div className="relative text-[1rem] font-medium text-blackish-green inline-block min-w-[4.25rem] whitespace-nowrap">
                      12:00pm
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative rounded"
                    alt=""
                    src="/frame-26086971.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-semibold inline-block min-w-[5rem]">
                      Check-In out
                    </div>
                    <div className="relative text-[1rem] font-medium text-blackish-green inline-block min-w-[3.875rem] whitespace-nowrap">
                      11:30am
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative rounded"
                    loading="lazy"
                    alt=""
                    src="/frame-26086941.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-semibold inline-block min-w-[3.688rem]">
                      Room no.
                    </div>
                    <div className="relative text-[1rem] font-medium text-blackish-green inline-block min-w-[4.938rem]">
                      On arrival
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
        <div className="flex flex-row items-start justify-start gap-[1rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
            <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1rem] whitespace-nowrap">
              <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[7.5rem]">
                Download Ticket
              </div>
            </div>
          </button>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[3rem] rounded box-border flex flex-row items-center justify-center py-[0.875rem] px-[0.937rem] border-[1px] border-solid border-mint-green">
              <img
                className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevron-forward1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInDetails;
