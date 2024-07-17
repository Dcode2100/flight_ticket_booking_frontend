import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TripInfoType = {
  className?: string;
  date?: string;
  date1?: string;
  prop?: string;
  time?: string;
  flightTime?: string;
  newarkEWR?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const TripInfo: FunctionComponent<TripInfoType> = ({
  className = "",
  date,
  date1,
  prop,
  time,
  flightTime,
  newarkEWR,
  propFlex,
}) => {
  const tripInfoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[0.5rem] text-left text-[0.75rem] text-gray-1300 font-montserrat-medium-14 ${className}`}
      style={tripInfoStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <img className="h-[2rem] w-[2rem] relative rounded" alt="" src={date} />
        <div className="flex flex-col items-start justify-center">
          <div className="relative font-semibold inline-block min-w-[1.875rem]">
            {date1}
          </div>
          <div className="relative text-[1rem] font-medium text-blackish-green inline-block min-w-[3.563rem]">
            {prop}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <img className="h-[2rem] w-[2rem] relative rounded" alt="" src={time} />
        <div className="flex flex-col items-start justify-center">
          <div className="relative font-semibold inline-block min-w-[4.313rem]">
            {flightTime}
          </div>
          <div className="relative text-[1rem] font-medium text-blackish-green inline-block min-w-[7.125rem]">
            {newarkEWR}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
