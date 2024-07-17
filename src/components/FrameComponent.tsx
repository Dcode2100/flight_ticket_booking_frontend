import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import TestimonialContainers from "./TestimonialContainers";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[87.25rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-[105%] shrink-0 text-left text-[1.5rem] text-blackish-green font-tradegothic-bold-16 mq750:gap-[1.25rem] ${className}`}
    >
      <FrameComponent3
        planYourPerfectTrip="Reviews"
        searchFlightsPlacesHireTo="What people says about Golobe facilities"
        button="See All"
        propAlignSelf="unset"
        propWidth="78.25rem"
        propPadding="0rem 1.25rem 0rem 0rem"
      />
      <div className="w-[84.75rem] overflow-x-auto flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.5rem] max-w-full">
        <div className="h-[38rem] w-[28.125rem] relative shrink-0 max-w-full mq450:h-auto mq450:min-h-[608]">
          <div className="absolute top-[1.375rem] left-[1.563rem] rounded-xl bg-mediumaquamarine-200 w-[26.563rem] h-[36.625rem]" />
          <div className="absolute top-[0rem] left-[-0.062rem] shadow-[2px_4px_16px_rgba(17,_34,_17,_0.1)] rounded-xl bg-neutrals w-[26.563rem] flex flex-col items-center justify-start p-[1.5rem] box-border gap-[2.5rem] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <h2 className="m-0 h-[5rem] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[1.188rem]">
                  <p className="m-0">“A real sense of community, nurtured”</p>
                </h2>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-500 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    <p className="m-0">
                      Really appreciate the help and support from the staff
                      during these tough times. Shoutout to Katie for helping me
                      always, even when I was out of the country. And always
                      available when needed.
                    </p>
                  </div>
                  <b className="self-stretch relative font-tradegothic-bold-16 text-blackish-green text-right">
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
                    loading="lazy"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/ionstar.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                    <b className="self-stretch relative">Olga</b>
                    <div className="self-stretch relative text-[0.75rem] font-medium font-montserrat-medium-14 text-gray-500">
                      Weave Studios – Kai Tak
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] max-w-full text-[0.75rem] text-gray-600">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
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
              src="/rectangle-36@2x.png"
            />
          </div>
        </div>
        <TestimonialContainers
          theFacilitiesAreSuperbCle="“The facilities are superb. Clean, slick, bright.”"
          aRealSenseOfCommunityNurt="“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle"
          thomas="Thomas"
          weaveStudiosOlympic="Weave Studios – Olympic"
          reviewImageTwo="/rectangle-36-1@2x.png"
        />
        <TestimonialContainers
          theFacilitiesAreSuperbCle="“A real sense of community, nurtured”"
          aRealSenseOfCommunityNurt="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
          thomas="Eliot"
          weaveStudiosOlympic="Weave Studios – Kai Tak"
          reviewImageTwo="/rectangle-36-2@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
