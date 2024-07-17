import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import CardContainers from "./CardContainers";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[78.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.625rem] pr-[1.25rem] pl-[0rem] box-border max-w-full text-left text-[2rem] text-black font-montserrat-medium-14 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
        <FrameComponent3
          planYourPerfectTrip="Plan your perfect trip"
          searchFlightsPlacesHireTo={`Search Flights & Places Hire to our most popular destinations`}
          button="See more places"
        />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem_1.875rem] min-h-[26.875rem] max-w-full text-[1rem] text-gray-800 mq750:gap-[0.938rem]">
          <CardContainers
            cardBackgrounds="/rectangle-3@2x.png"
            istanbulTurkey="Istanbul, Turkey"
          />
          <CardContainers
            cardBackgrounds="/rectangle-3-1@2x.png"
            istanbulTurkey="Sydney, Australia"
          />
          <CardContainers
            cardBackgrounds="/rectangle-4@2x.png"
            istanbulTurkey="Baku, Azerbaijan"
          />
          <CardContainers
            cardBackgrounds="/rectangle-4-1@2x.png"
            istanbulTurkey="Malé, Maldives"
          />
          <CardContainers
            cardBackgrounds="/rectangle-3-2@2x.png"
            istanbulTurkey="Paris, France"
          />
          <CardContainers
            cardBackgrounds="/rectangle-4-2@2x.png"
            istanbulTurkey="New York, US"
          />
          <CardContainers
            cardBackgrounds="/rectangle-3-3@2x.png"
            istanbulTurkey="London, UK"
          />
          <CardContainers
            cardBackgrounds="/rectangle-3-4@2x.png"
            istanbulTurkey="Tokyo, Japan"
          />
          <CardContainers
            cardBackgrounds="/rectangle-4-3@2x.png"
            istanbulTurkey="Dubai, UAE"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
