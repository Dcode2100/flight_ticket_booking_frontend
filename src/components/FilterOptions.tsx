import { FunctionComponent } from "react";

export type FilterOptionsType = {
  className?: string;
  airlines?: string;
  emirated?: string;
  flyDubai?: string;
  qatar?: string;
  etihad?: string;
};

const FilterOptions: FunctionComponent<FilterOptionsType> = ({
  className = "",
  airlines,
  emirated,
  flyDubai,
  qatar,
  etihad,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1rem] text-left text-[1rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
        <div className="relative font-semibold inline-block min-w-[3.875rem]">
          {airlines}
        </div>
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/chevron-down-1.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.875rem]">
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[15.312rem] pl-[0rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
          <input
            className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative font-medium inline-block min-w-[4.125rem]">
            {emirated}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[15.187rem] pl-[0rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
          <input
            className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative font-medium inline-block min-w-[4.25rem]">
            {flyDubai}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[16.875rem] pl-[0rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
          <input
            className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative font-medium inline-block min-w-[2.563rem]">
            {qatar}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[16.5rem] pl-[0rem] gap-[0.5rem] mq450:pr-[1.25rem] mq450:box-border">
          <input
            className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative font-medium inline-block min-w-[2.938rem]">
            {etihad}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
