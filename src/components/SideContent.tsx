import { FunctionComponent } from "react";

export type SideContentType = {
  className?: string;
};

const SideContent: FunctionComponent<SideContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[2.5rem] min-w-[26rem] max-w-full text-left text-[0.875rem] text-black font-montserrat-medium-14 mq750:gap-[1.25rem] mq750:min-w-full ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem]">
        <img
          className="h-[2.25rem] w-[6.9rem] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/logo7@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[1rem] max-w-full text-[2.5rem] font-tradegothic-bold-16">
        <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap mq450:text-[1.5rem] mq1050:text-[2rem]">
          Sign up
        </h1>
        <div className="relative text-[1rem] font-montserrat-medium-14 text-gray-400">
          Let’s get you all st up so you can access your personal account.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-gray-300">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] mq750:flex-wrap">
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
                  <input
                    className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="john.doe@gmail.com"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[4.875rem]">
                      First Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
                  <input
                    className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="john.doe@gmail.com"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[4.75rem]">
                      Last Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] mq750:flex-wrap">
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
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
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
                  <input
                    className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="john.doe@gmail.com"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[6.875rem]">
                      Phone Number
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-[1rem]">
          <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
            <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[23.375rem] min-h-[2.5rem] max-w-full mq750:min-w-full">
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
        <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-[1rem]">
          <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
            <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[27.75rem] pl-[0rem] box-border relative min-w-[23.375rem] min-h-[2.5rem] max-w-full mq750:pr-[13.875rem] mq750:box-border mq750:min-w-full mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative inline-block min-w-[7.375rem]">
                    •••••••••••••••••••••••••
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap text-[0.875rem] text-blackish-green">
                  <div className="relative inline-block min-w-[8rem]">
                    Confirm Password
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
        <div className="flex flex-row items-center justify-start gap-[0.5rem] max-w-full text-blackish-green">
          <input
            className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative">
            <span className="font-medium">{`I agree to all the `}</span>
            <span className="font-semibold text-slamon">Terms</span>
            <span className="font-medium">{` and `}</span>
            <span className="font-semibold text-slamon">Privacy Policies</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-center text-blackish-green">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
            <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[6.875rem]">
              Create account
            </div>
          </div>
        </button>
        <div className="self-stretch relative">
          <span className="font-medium">{`Already have an account? `}</span>
          <span className="font-semibold text-slamon">Login</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-gray-500 mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.518rem] px-[0rem] pb-[0rem] box-border min-w-[10.125rem]">
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
        </div>
        <div className="relative inline-block min-w-[6.875rem]">
          Or Sign up with
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.518rem] px-[0rem] pb-[0rem] box-border min-w-[10.125rem]">
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.993rem] mq750:flex-wrap">
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-[0.875rem] px-[1.5rem] min-w-[9.5rem] border-[1px] border-solid border-mint-green">
          <img
            className="w-[1.5rem] h-[1.5rem] relative"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <button className="cursor-pointer py-[0.875rem] px-[1.5rem] bg-[transparent] flex-1 rounded box-border flex flex-col items-center justify-center min-w-[9.5rem] border-[1px] border-solid border-mint-green">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/flatcoloriconsgoogle1.svg"
          />
        </button>
        <div className="flex-1 rounded box-border flex flex-col items-center justify-center py-[0.875rem] px-[1.5rem] min-w-[9.5rem] border-[1px] border-solid border-mint-green">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/antdesignapplefilled.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContent;
