import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AccountSummaryType = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const AccountSummary: FunctionComponent<AccountSummaryType> = ({
  className = "",
  propHeight,
}) => {
  const accountSummaryStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`self-stretch h-[16.313rem] relative max-w-full text-center text-[1.5rem] text-blackish-green font-montserrat-medium-14 ${className}`}
      style={accountSummaryStyle}
    >
      <div className="absolute top-[0.25rem] left-[0rem] w-full h-[15.063rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full z-[1]">
        <div className="self-stretch w-[11.563rem] flex flex-col items-start justify-center relative gap-[1.5rem]">
          <div className="w-[10rem] h-[10rem] relative rounded-[50%] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.2)]"
              alt=""
              src="/ellipse-1-11@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
              John Doe.
            </h3>
            <div className="self-stretch relative text-[1rem] text-gray-400 whitespace-nowrap">
              john.doe@gmail.com
            </div>
          </div>
          <div className="w-[2.75rem] h-[2.75rem] !m-[0] absolute top-[7.25rem] left-[7.25rem] rounded-26xl bg-slamon flex flex-row items-start justify-start p-[0.625rem] box-border z-[1]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/pen.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[64.125rem] flex flex-row items-start justify-start z-[2] text-left text-[0.875rem]">
        <div className="rounded bg-mint-green flex flex-row items-start justify-start py-[0.968rem] px-[1rem] gap-[0.25rem] whitespace-nowrap">
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/upload.svg"
          />
          <div className="relative font-medium inline-block min-w-[8rem]">
            Upload new cover
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
