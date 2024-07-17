import { FunctionComponent } from "react";

const ForgotPasswordSetANewPas: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-start justify-start py-[6.5rem] pr-[6.375rem] pl-[6.5rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-left text-[2.5rem] text-black font-tradegothic-bold-16 lg:flex-wrap lg:gap-[3.25rem] lg:pl-[3.25rem] lg:pr-[3.188rem] lg:box-border mq750:gap-[1.625rem] mq750:pl-[1.625rem] mq750:pr-[1.563rem] mq750:box-border">
      <div className="w-[32rem] flex flex-col items-start justify-start gap-[4rem] min-w-[32rem] max-w-full lg:flex-1 mq750:gap-[2rem] mq750:min-w-full mq450:gap-[1rem]">
        <img
          className="w-[6.9rem] h-[2.25rem] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/logo9@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full mq750:gap-[1.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1.5rem] mq1050:text-[2rem]">
              Set a password
            </h1>
            <div className="self-stretch relative text-[1rem] font-montserrat-medium-14 text-gray-400">
              Your previous password has been reseted. Please set a new password
              for your account.
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[18.188rem] min-h-[2.5rem] max-w-full">
                      <input
                        className="w-[10.813rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                        placeholder={`7789BM6X@@H&$K_`}
                        type="text"
                      />
                      <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                        <div className="relative text-[0.875rem] font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[7.313rem]">
                          Create Password
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[0.75rem]">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                  <div className="flex-1 relative text-[0.875rem] font-montserrat-medium-14 text-gray-300 text-left">
                    Supporting text
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[18.188rem] min-h-[2.5rem] max-w-full">
                      <input
                        className="w-[10.813rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                        placeholder={`7789BM6X@@H&$K_`}
                        type="text"
                      />
                      <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                        <div className="relative text-[0.875rem] font-montserrat-medium-14 text-blackish-green text-left">
                          Re-enter Password
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[0.75rem]">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                  <div className="flex-1 relative text-[0.875rem] font-montserrat-medium-14 text-gray-300 text-left">
                    Supporting text
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
                <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[6.063rem]">
                  Set password
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[25.125rem] max-w-full mq750:min-w-full">
        <img
          className="self-stretch h-[51rem] relative rounded-11xl max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/page-background@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full mt-[-3.625rem]">
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
    </div>
  );
};

export default ForgotPasswordSetANewPas;
