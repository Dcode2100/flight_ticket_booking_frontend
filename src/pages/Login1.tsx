import { FunctionComponent } from "react";
import EmailField from "../components/EmailField";

const Login1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-start justify-start py-[6.5rem] pr-[6.375rem] pl-[6.5rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-left text-[2.5rem] text-black font-tradegothic-bold-16 lg:flex-wrap lg:gap-[3.25rem] lg:pl-[3.25rem] lg:pr-[3.188rem] lg:box-border mq750:gap-[1.625rem] mq750:pl-[1.625rem] mq750:pr-[1.563rem] mq750:box-border">
      <div className="w-[32rem] flex flex-col items-start justify-start gap-[4rem] min-w-[32rem] max-w-full lg:flex-1 mq750:gap-[2rem] mq750:min-w-full mq450:gap-[1rem]">
        <img
          className="w-[6.9rem] h-[2.25rem] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/logo7@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] gap-[1rem]">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[7.688rem] mq450:text-[1.5rem] mq1050:text-[2rem]">
              Login
            </h1>
            <div className="relative text-[1rem] font-montserrat-medium-14 text-gray-400">
              Login to access your Golobe account
            </div>
          </div>
          <EmailField />
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] text-center text-[0.875rem] text-blackish-green font-montserrat-medium-14 mq750:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
                  <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[2.563rem]">
                    Login
                  </div>
                </div>
              </button>
              <div className="self-stretch relative">
                <span className="font-medium">{`Don’t have an account? `}</span>
                <span className="font-semibold text-slamon">Sign up</span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-left text-gray-500 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.518rem] px-[0rem] pb-[0rem] box-border min-w-[7.875rem]">
                <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
              </div>
              <div className="relative inline-block min-w-[5.75rem]">
                Or login with
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.518rem] px-[0rem] pb-[0rem] box-border min-w-[7.875rem]">
                <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
              <button className="cursor-pointer py-[0.875rem] px-[1.5rem] bg-[transparent] flex-1 rounded box-border flex flex-col items-center justify-center min-w-[7.5rem] border-[1px] border-solid border-mint-green">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative"
                  alt=""
                  src="/social-login-icon.svg"
                />
              </button>
              <button className="cursor-pointer py-[0.875rem] px-[1.5rem] bg-[transparent] flex-1 rounded box-border flex flex-col items-center justify-center min-w-[7.5rem] border-[1px] border-solid border-mint-green">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/flatcoloriconsgoogle2.svg"
                />
              </button>
              <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-[0.875rem] px-[1.5rem] min-w-[7.5rem] border-[1px] border-solid border-mint-green">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/antdesignapplefilled1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border relative min-w-[25.125rem] min-h-[51rem] max-w-full mq750:min-w-full">
        <img
          className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-11xl max-h-full object-cover"
          alt=""
          src="/page-background@2x.png"
        />
        <div className="flex-1 rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] flex flex-row items-start justify-center py-[1.5rem] px-[1.25rem] box-border max-w-full z-[1]">
          <div className="h-[3.625rem] w-[38.5rem] relative rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] hidden max-w-full" />
          <div className="w-[4.25rem] flex flex-row items-start justify-start gap-[0.5rem] z-[2]">
            <div className="h-[0.625rem] flex-1 relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-mint-green w-[2rem] h-[0.625rem]" />
              <div className="absolute top-[0rem] left-[2.5rem] rounded-[50%] bg-neutrals w-[0.625rem] h-[0.625rem]" />
            </div>
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
