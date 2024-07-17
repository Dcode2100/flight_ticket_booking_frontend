import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  planYourPerfectTrip?: string;
  searchFlightsPlacesHireTo?: string;
  button?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  planYourPerfectTrip,
  searchFlightsPlacesHireTo,
  button,
  propAlignSelf,
  propWidth,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start gap-[1.5rem] max-w-full text-left text-[2rem] text-black font-montserrat-medium-14 ${className}`}
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[43rem] max-w-full mq750:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq750:text-[1.625rem] mq450:text-[1.188rem]">
          {planYourPerfectTrip}
        </h1>
        <div className="self-stretch relative text-[1rem] text-gray-400">
          {searchFlightsPlacesHireTo}
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
        <div className="rounded flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem] whitespace-nowrap border-[1px] border-solid border-mint-green">
          <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[7.313rem]">
            {button}
          </div>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent3;
