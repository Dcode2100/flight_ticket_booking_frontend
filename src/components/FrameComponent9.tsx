import { FunctionComponent } from "react";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2rem] text-black font-montserrat-medium-14 ${className}`}
    >
      <div className="w-[77rem] flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-[1.188rem] mq750:text-[1.625rem]">
            Let's go places together
          </h1>
          <div className="relative text-[1rem]">
            Discover the latest offers and news and start planning your next
            trip with us.
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[5rem] flex flex-col items-start justify-start">
          <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.625rem] px-[0.937rem] whitespace-nowrap border-[1px] border-solid border-mint-green">
            <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3rem]">
              See All
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent9;
