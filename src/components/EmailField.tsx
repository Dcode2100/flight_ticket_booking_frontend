import { FunctionComponent } from "react";

export type EmailFieldType = {
  className?: string;
};

const EmailField: FunctionComponent<EmailFieldType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[0.875rem] text-gray-300 font-montserrat-medium-14 ${className}`}
    >
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
  );
};

export default EmailField;
