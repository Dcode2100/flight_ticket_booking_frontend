import { FunctionComponent } from "react";
import LoginButtonSignUp from "../components/LoginButtonSignUp";

const Login: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-start justify-start py-[6.5rem] pr-[6.375rem] pl-[6.5rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-left text-[2.5rem] text-black font-tradegothic-bold-16 lg:flex-wrap lg:gap-[3.25rem] lg:pl-[3.25rem] lg:pr-[3.188rem] lg:box-border mq750:gap-[1.625rem] mq750:pl-[1.625rem] mq750:pr-[1.563rem] mq750:box-border">
      <div className="w-[32rem] flex flex-col items-start justify-start gap-[4rem] min-w-[32rem] max-w-full lg:flex-1 mq750:gap-[2rem] mq750:min-w-full mq450:gap-[1rem]">
        <img
          className="w-[6.9rem] h-[2.25rem] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/logo8@2x.png"
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-[0.875rem] text-gray-300 font-montserrat-medium-14">
            <div className="self-stretch h-[3.5rem] rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex-1 rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative max-w-full">
                    <input
                      className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                      placeholder="john.doe@gmail.com"
                      type="text"
                    />
                    <div className="w-[3rem] !m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.187rem] box-border">
                      <div className="relative inline-block min-w-[2.563rem]">
                        Email
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                <div className="flex-1 relative">Supporting text</div>
              </div>
            </div>
            <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-[1rem]">
              <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[18.188rem] min-h-[2.5rem] max-w-full">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative inline-block min-w-[7.375rem]">
                        •••••••••••••••••••••••••
                      </div>
                    </div>
                    <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] text-[0.875rem] text-blackish-green">
                      <div className="relative inline-block min-w-[4.25rem]">
                        Password
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-[0.75rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/eyeoff.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
                <div className="flex-1 relative">Supporting text</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-blackish-green mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <input
                  className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="relative font-medium inline-block min-w-[6.75rem]">
                  Remember me
                </div>
              </div>
              <div className="relative font-medium text-slamon text-right inline-block min-w-[7.5rem]">
                Forgot Password
              </div>
            </div>
          </div>
          <LoginButtonSignUp />
        </div>
      </div>
      <div className="flex-1 rounded-11xl flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border bg-[url('/public/rectangle-201@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[25.125rem] min-h-[51rem] max-w-full lg:min-h-[auto] mq750:min-w-full">
        <img
          className="w-[38.5rem] relative rounded-11xl max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-201@2x.png"
        />
        <div className="flex-1 rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] flex flex-row items-start justify-center py-[1.5rem] px-[1.25rem] box-border max-w-full z-[1]">
          <div className="h-[3.625rem] w-[38.5rem] relative rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] hidden max-w-full" />
          <div className="flex flex-row items-start justify-start gap-[0.5rem] z-[2]">
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals" />
            <div className="h-[0.625rem] w-[2rem] relative rounded-8xs bg-mint-green" />
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
