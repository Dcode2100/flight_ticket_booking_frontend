import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start gap-[1.5rem] max-w-full text-left text-[2rem] text-black font-montserrat-medium-14 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[45.813rem] max-w-full mq1050:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem] mq750:text-[1.625rem]">
          <p className="m-0">Fall into travel</p>
        </h1>
        <div className="w-[53.188rem] relative text-[1rem] inline-block max-w-full">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got the travel tools to get you to your
          destination.
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[1.25rem] px-[0rem] bg-[transparent] w-[5rem] flex flex-col items-start justify-start box-border">
        <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem] whitespace-nowrap border-[1px] border-solid border-mint-green">
          <a className="[text-decoration:none] relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3rem]">
            See All
          </a>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent5;
