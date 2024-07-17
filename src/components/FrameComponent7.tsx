import { FunctionComponent } from "react";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full h-[53.688rem] absolute !m-[0] right-[0rem] bottom-[-19.625rem] left-[0rem] max-w-full ${className}`}
    >
      <div className="absolute top-[3.688rem] left-[0rem] bg-mint-green w-[90rem] h-[50rem] z-[1]" />
      <div className="absolute top-[0rem] left-[6.506rem] w-[76.931rem] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[1.5rem] w-[1.5rem] absolute !m-[0] right-[37.688rem] bottom-[18.088rem] overflow-hidden shrink-0"
          alt=""
          src="/fluentarrowforward20filled.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] absolute !m-[0] right-[37.688rem] bottom-[8.275rem] overflow-hidden shrink-0"
          alt=""
          src="/emojionev1worldmap.svg"
        />
        <img
          className="h-[37.713rem] flex-1 relative max-w-full overflow-hidden z-[2]"
          alt=""
          src="/group.svg"
        />
      </div>
      <img
        className="absolute top-[25.438rem] left-[28.5rem] w-[3.719rem] h-[1.788rem] z-[3]"
        loading="lazy"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[12.688rem] left-[60.063rem] w-[5.938rem] h-[2.875rem] z-[3]"
        loading="lazy"
        alt=""
        src="/vector-10.svg"
      />
      <img
        className="absolute top-[11.563rem] left-[21.938rem] w-[3.719rem] h-[1.788rem] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/vector-9.svg"
      />
    </div>
  );
};

export default FrameComponent7;
