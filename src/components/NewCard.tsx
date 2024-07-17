import { FunctionComponent } from "react";

export type NewCardType = {
  className?: string;
};

const NewCard: FunctionComponent<NewCardType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.218rem] gap-[1rem] text-left text-[1.5rem] text-blackish-green font-montserrat-medium-14 mq750:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[12.438rem]">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
          **** **** ****
        </h2>
        <div className="relative text-[2rem] font-semibold inline-block min-w-[4.438rem] mt-[-0.625rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          4321
        </div>
      </div>
      <img
        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/bin.svg"
      />
    </div>
  );
};

export default NewCard;
