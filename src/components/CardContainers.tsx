import { FunctionComponent } from "react";

export type CardContainersType = {
  className?: string;
  cardBackgrounds?: string;
  istanbulTurkey?: string;
};

const CardContainers: FunctionComponent<CardContainersType> = ({
  className = "",
  cardBackgrounds,
  istanbulTurkey,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-2xl bg-neutrals flex flex-row items-center justify-start p-[1rem] box-border gap-[1rem] min-w-[23.125rem] max-w-full text-left text-[1rem] text-gray-800 font-montserrat-medium-14 mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-center justify-start">
        <img
          className="w-[5.625rem] h-[5.625rem] relative rounded-lg object-cover"
          loading="lazy"
          alt=""
          src={cardBackgrounds}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[0.5rem] min-w-[10.188rem]">
        <div className="self-stretch relative font-semibold">
          {istanbulTurkey}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.75rem] pl-[0rem] gap-[0.5rem] text-[0.875rem] text-blackish-green mq450:pr-[1.25rem] mq450:box-border">
          <div className="flex-1 relative font-medium inline-block min-w-[3.063rem]">
            Flights
          </div>
          <div className="relative font-medium inline-block min-w-[0.313rem]">
            •
          </div>
          <div className="flex-1 relative font-medium inline-block min-w-[2.875rem]">
            Hotels
          </div>
          <div className="relative font-medium inline-block min-w-[0.313rem]">
            •
          </div>
          <div className="flex-1 relative font-medium inline-block min-w-[3.375rem]">
            Resorts
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainers;
