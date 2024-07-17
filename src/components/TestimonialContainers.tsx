import { FunctionComponent } from "react";

export type TestimonialContainersType = {
  className?: string;
  theFacilitiesAreSuperbCle?: string;
  aRealSenseOfCommunityNurt?: string;
  thomas?: string;
  weaveStudiosOlympic?: string;
  reviewImageTwo?: string;
};

const TestimonialContainers: FunctionComponent<TestimonialContainersType> = ({
  className = "",
  theFacilitiesAreSuperbCle,
  aRealSenseOfCommunityNurt,
  thomas,
  weaveStudiosOlympic,
  reviewImageTwo,
}) => {
  return (
    <div
      className={`h-[38.125rem] w-[28.063rem] relative shrink-0 max-w-full text-left text-[1.5rem] text-blackish-green font-tradegothic-bold-16 mq450:h-auto mq450:min-h-[610] ${className}`}
    >
      <div className="absolute top-[1.5rem] left-[1.5rem] rounded-xl bg-mediumaquamarine-200 w-[26.563rem] h-[36.625rem]" />
      <div className="absolute top-[0rem] left-[0rem] shadow-[2px_4px_16px_rgba(17,_34,_17,_0.1)] rounded-xl bg-neutrals w-[26.563rem] flex flex-col items-center justify-start p-[1.5rem] box-border gap-[2.5rem] max-w-full z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <h2 className="m-0 h-[5rem] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[1.188rem]">
              <p className="m-0">{theFacilitiesAreSuperbCle}</p>
            </h2>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-500 font-montserrat-medium-14">
              <div className="self-stretch relative font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                <p className="m-0">{aRealSenseOfCommunityNurt}</p>
              </div>
              <b className="self-stretch relative text-[1rem] font-tradegothic-bold-16 text-blackish-green text-right">
                View more
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[0.875rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[13.062rem] pl-[0rem] gap-[0.75rem] mq450:flex-wrap">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/ionstar.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/ionstar.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/ionstar.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/ionstar.svg"
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/ionstar.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                <b className="self-stretch relative">{thomas}</b>
                <div className="self-stretch relative text-[0.75rem] font-medium font-montserrat-medium-14 text-gray-500">
                  {weaveStudiosOlympic}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] max-w-full text-[0.75rem] text-gray-600">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/flatcoloriconsgoogle.svg"
                />
                <b className="flex-1 relative inline-block max-w-[calc(100%_-_32px)]">
                  Google
                </b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[12.5rem] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={reviewImageTwo}
        />
      </div>
    </div>
  );
};

export default TestimonialContainers;
