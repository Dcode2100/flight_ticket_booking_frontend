import { FunctionComponent } from "react";

export type FilterOptions1Type = {
  className?: string;
  price?: string;
  amPmCheckboxes?: string;
  timeLabels?: string;
};

const FilterOptions1: FunctionComponent<FilterOptions1Type> = ({
  className = "",
  price,
  amPmCheckboxes,
  timeLabels,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1rem] text-left text-[1rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
        <div className="relative font-semibold inline-block min-w-[2.625rem]">
          {price}
        </div>
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/chevron-down-1.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.75rem]">
        <img
          className="self-stretch h-[1.5rem] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/group-2.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="relative font-medium inline-block min-w-[1.438rem] whitespace-nowrap">
            {amPmCheckboxes}
          </div>
          <div className="relative font-medium text-right inline-block min-w-[2.188rem] whitespace-nowrap">
            {timeLabels}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions1;
