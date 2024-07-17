import { FunctionComponent } from "react";
import SideContent from "../components/SideContent";

const SignUp: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-start justify-start pt-[6.5rem] px-[6.5rem] pb-[4.187rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-center text-[2.25rem] text-neutrals font-tradegothic-bold-16 mq750:gap-[3.25rem] mq750:pl-[3.25rem] mq750:pr-[3.25rem] mq750:box-border mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1125:flex-wrap">
      <div className="h-[51rem] w-[30.5rem] flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border relative min-w-[30.5rem] max-w-full mq750:min-w-full mq1125:flex-1">
        <img
          className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-11xl max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-20@2x.png"
        />
        <div className="flex-1 rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] flex flex-row items-start justify-center py-[1.5rem] px-[1.25rem] box-border max-w-full z-[1]">
          <div className="h-[3.625rem] w-[30.4rem] relative rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] hidden max-w-full" />
          <div className="w-[3.356rem] flex flex-row items-start justify-start gap-[0.5rem] z-[2]">
            <div className="h-[0.625rem] w-[2rem] relative rounded-8xs bg-mint-green shrink-0" />
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals shrink-0" />
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals shrink-0" />
          </div>
        </div>
      </div>
      <b className="w-[21.063rem] relative hidden shrink-0 max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
        Make your travel whishlist, we’ll do the rest
      </b>
      <SideContent />
    </div>
  );
};

export default SignUp;
