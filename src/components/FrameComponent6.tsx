import { FunctionComponent } from "react";
import FrameComponent8 from "./FrameComponent8";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[50.688rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full text-left text-[0.625rem] text-blackish-green font-tradegothic-bold-16 mq750:flex-wrap mq750:justify-center ${className}`}
    >
      <div className="w-[8.813rem] rounded bg-neutrals flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.5rem] z-[3]">
        <img
          className="h-[2.5rem] w-[2.5rem] relative rounded-sm object-cover"
          alt=""
          src="/rectangle-25-2@2x.png"
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
      <FrameComponent8
        rectangle25="/rectangle-25-3@2x.png"
        propWidth="12.313rem"
        propPadding="0rem 0rem 0.875rem"
      />
      <FrameComponent8
        rectangle25="/rectangle-25-4@2x.png"
        propWidth="8.813rem"
        propPadding="0rem 0rem 2.125rem"
      />
    </div>
  );
};

export default FrameComponent6;
