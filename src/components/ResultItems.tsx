import { FunctionComponent } from "react";

export type ResultItemsType = {
  className?: string;
  image43?: string;
};

const ResultItems: FunctionComponent<ResultItemsType> = ({
  className = "",
  image43,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals flex flex-row items-start justify-start p-[1rem] box-border max-w-full [row-gap:20px] text-left text-[0.75rem] text-blackish-green font-montserrat-medium-14 mq750:flex-wrap ${className}`}
    >
      <img
        className="h-[5.6rem] w-[10rem] relative object-cover"
        loading="lazy"
        alt=""
        src={image43}
      />
      <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutrals flex flex-col items-start justify-start py-[0rem] px-[1.5rem] box-border gap-[1rem] min-w-[26.313rem] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
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
          <div className="w-[6.375rem] flex flex-col items-end justify-start text-gray-400">
            <div className="self-stretch relative font-medium">
              starting from
            </div>
            <b className="relative leading-[1.85rem] inline-block text-slamon text-right min-w-[6.375rem] whitespace-nowrap text-[1.5rem]">
              <span>$104</span>
              <span className="text-[0.875rem]">/night</span>
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1rem] text-gray-1400">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[11.062rem] pl-[0rem] gap-[2.5rem] mq750:flex-wrap mq750:gap-[1.25rem] mq750:pr-[5.5rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border">
              <div className="w-[12.875rem] flex flex-row items-start justify-start gap-[0.75rem] text-blackish-green">
                <input
                  className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 flex flex-col items-start justify-center gap-[0.25rem]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="flex-1 relative font-semibold inline-block min-w-[4.625rem] whitespace-nowrap">
                      12:00 pm
                    </div>
                    <div className="relative font-semibold inline-block min-w-[0.438rem]">
                      -
                    </div>
                    <div className="flex-1 relative font-semibold inline-block min-w-[4.563rem] whitespace-nowrap">
                      01:28 pm
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] text-gray-600 inline-block min-w-[3.875rem]">
                    Emirates
                  </div>
                </div>
              </div>
              <div className="relative text-[0.875rem] font-semibold inline-block min-w-[4rem]">
                non stop
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <div className="relative font-semibold inline-block min-w-[3.875rem]">
                  2h 28m
                </div>
                <div className="relative text-[0.875rem] text-gray-600 inline-block min-w-[4.563rem]">
                  EWR-BNA
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[11.062rem] pl-[0rem] gap-[2.5rem] mq750:flex-wrap mq750:gap-[1.25rem] mq750:pr-[5.5rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border">
              <div className="w-[12.875rem] flex flex-row items-start justify-start gap-[0.75rem] text-blackish-green">
                <input
                  className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 flex flex-col items-start justify-center gap-[0.25rem]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="flex-1 relative font-semibold inline-block min-w-[4.625rem] whitespace-nowrap">
                      12:00 pm
                    </div>
                    <div className="relative font-semibold inline-block min-w-[0.438rem]">
                      -
                    </div>
                    <div className="flex-1 relative font-semibold inline-block min-w-[4.563rem] whitespace-nowrap">
                      01:28 pm
                    </div>
                  </div>
                  <div className="relative text-[0.875rem] text-gray-600 inline-block min-w-[3.875rem]">
                    Emirates
                  </div>
                </div>
              </div>
              <div className="relative text-[0.875rem] font-semibold inline-block min-w-[4rem]">
                non stop
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <div className="relative font-semibold inline-block min-w-[3.875rem]">
                  2h 28m
                </div>
                <div className="relative text-[0.875rem] text-gray-600 inline-block min-w-[4.563rem]">
                  EWR-BNA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[3rem] rounded box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.812rem] border-[1px] border-solid border-mint-green">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-start justify-start min-w-[21.75rem] max-w-full mq750:min-w-full">
            <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
              <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[5rem]">
                View Deals
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultItems;
