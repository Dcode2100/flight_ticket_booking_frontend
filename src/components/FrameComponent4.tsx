import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.875rem] pb-[19.75rem] box-border max-w-full mq450:pb-[12.813rem] mq450:box-border ${className}`}
    >
      <header className="flex-1 flex flex-row items-center justify-between py-[1.5rem] px-[2rem] box-border relative gap-[1.25rem] max-w-full z-[2] text-left text-[0.875rem] text-neutrals font-montserrat-medium-14">
        <div className="w-[44.65rem] flex flex-row items-center justify-start gap-[22.625rem] max-w-full mq750:gap-[11.313rem] mq1050:w-[29.525rem] mq450:gap-[5.625rem]">
          <div className="flex flex-row items-start justify-start gap-[2rem] mq1050:hidden">
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/airplane.svg"
              />
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem] whitespace-nowrap">
                Find Flight
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/ionbed.svg"
              />
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.688rem] whitespace-nowrap">
                Find Stays
              </a>
            </div>
          </div>
          <img
            className="h-[2.25rem] w-[6.9rem] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="w-[11.063rem] flex flex-row items-center justify-start gap-[2rem]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[2.563rem]">
            Login
          </a>
          <button className="cursor-pointer [border:none] p-0 bg-neutrals rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center py-[0.968rem] px-[1.5rem]">
              <a className="[text-decoration:none] relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-center inline-block min-w-[3.5rem] whitespace-nowrap">
                Sign up
              </a>
            </div>
          </button>
        </div>
        <div className="w-full !m-[0] absolute right-[0rem] bottom-[-30.312rem] left-[0rem] flex flex-col items-center justify-start pt-[9.375rem] px-[1.25rem] pb-[14.312rem] box-border gap-[1rem] max-w-full text-center text-[2.813rem] font-tradegothic-bold-16">
          <img
            className="w-full h-[37.438rem] absolute !m-[0] right-[0rem] bottom-[-1.125rem] left-[0rem] rounded-3xl max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/rectangle-31@2x.png"
          />
          <div className="w-full h-full absolute !m-[0] top-[36.313rem] right-[-86.25rem] bottom-[-36.312rem] left-[86.25rem] rounded-t-none rounded-b-3xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
          <div className="w-[47.063rem] flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <h1 className="m-0 h-[3.563rem] w-[23.563rem] relative text-inherit font-bold font-inherit inline-block whitespace-nowrap max-w-full z-[2]">
                Helping Others
              </h1>
            </div>
            <h1 className="m-0 self-stretch h-[6.313rem] relative text-[5rem] uppercase font-bold font-inherit inline-block whitespace-nowrap z-[2]">{`Live & Travel`}</h1>
          </div>
          <div className="w-[47.125rem] flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full text-[1.25rem] font-montserrat-medium-14">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap z-[2]">
              Special offers to suit your plan
            </h3>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent4;
