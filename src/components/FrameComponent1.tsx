import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[78.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.5rem] max-w-full text-center text-[2.5rem] text-neutrals font-tradegothic-bold-16 mq1050:flex-wrap ${className}`}
    >
      <div className="flex-1 rounded-xl flex flex-row items-end justify-start bg-[url('/public/rectangle-40@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[24.563rem] min-h-[34.938rem] max-w-full mq750:min-w-full mq1050:min-h-[auto]">
        <img
          className="w-[37.75rem] relative rounded-xl max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-40@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center pt-[5.812rem] pb-[1.5rem] pr-[1.25rem] pl-[2.062rem] box-border relative max-w-full z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[17.5rem] right-[-37.75rem] bottom-[-17.5rem] left-[37.75rem] rounded-t-none rounded-b-3xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(18,_18,_18,_0.75)_48.67%)] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          <div className="w-[24.313rem] flex flex-col items-center justify-start gap-[1rem] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <h1 className="m-0 self-stretch h-[3.188rem] relative text-inherit font-bold font-inherit inline-block mq750:text-[2rem] mq450:text-[1.5rem]">
                Flights
              </h1>
              <div className="self-stretch relative text-[1rem] font-montserrat-medium-14">{`Search Flights & Places Hire to our most popular destinations`}</div>
            </div>
            <div className="flex flex-col items-start justify-start text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14">
              <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1rem] gap-[0.25rem] whitespace-nowrap">
                <img
                  className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/paper-plane.svg"
                />
                <div className="relative font-medium inline-block min-w-[5.75rem]">
                  Show Filghts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl flex flex-row items-end justify-start bg-[url('/public/rectangle-41@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[24.563rem] min-h-[34.938rem] max-w-full mq750:min-w-full mq1050:min-h-[auto]">
        <img
          className="w-[37.719rem] relative rounded-xl max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-41@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center pt-[5.812rem] pb-[1.5rem] pr-[1.25rem] pl-[2.062rem] box-border relative max-w-full z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[17.5rem] right-[-37.75rem] bottom-[-17.5rem] left-[37.75rem] rounded-t-none rounded-b-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(18,_18,_18,_0.75)_48.67%)] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          <div className="w-[24.313rem] flex flex-col items-center justify-start gap-[1rem] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <h1 className="m-0 self-stretch h-[3.188rem] relative text-inherit font-bold font-inherit inline-block mq750:text-[2rem] mq450:text-[1.5rem]">
                Hotels
              </h1>
              <div className="self-stretch relative text-[1rem] font-montserrat-medium-14">{`Search hotels & Places Hire to our most popular destinations`}</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
              <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1rem] gap-[0.25rem] whitespace-nowrap">
                <img
                  className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/paper-plane.svg"
                />
                <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[5.563rem]">
                  Show Hotels
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
