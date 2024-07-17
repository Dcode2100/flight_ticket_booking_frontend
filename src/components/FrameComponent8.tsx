import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent8Type = {
  className?: string;
  rectangle25?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
  rectangle25,
  propWidth,
  propPadding,
}) => {
  const passengerTwoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`w-[8.813rem] flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border text-left text-[0.625rem] text-blackish-green font-tradegothic-bold-16 ${className}`}
      style={passengerTwoStyle}
    >
      <div className="self-stretch rounded bg-neutrals flex flex-row items-start justify-start p-[0.25rem] gap-[0.5rem] z-[3]">
        <img
          className="h-[2.5rem] w-[2.5rem] relative rounded object-cover"
          alt=""
          src={rectangle25}
        />
        <div className="flex flex-col items-start justify-start pt-[0.531rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-col items-start justify-start">
            <b className="relative inline-block min-w-[3.875rem]">James Doe</b>
            <div className="relative text-[0.5rem] font-montserrat-medium-14 inline-block min-w-[5.063rem]">
              Boarding Pass N’123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
