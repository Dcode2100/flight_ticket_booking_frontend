import { FunctionComponent } from "react";

export type LoginButtonSignUpType = {
  className?: string;
};

const LoginButtonSignUp: FunctionComponent<LoginButtonSignUpType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.5rem] text-center text-[0.875rem] text-blackish-green font-montserrat-medium-14 mq750:gap-[1.25rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
            <a className="[text-decoration:none] relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[2.563rem]">
              Login
            </a>
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
  );
};

export default LoginButtonSignUp;
