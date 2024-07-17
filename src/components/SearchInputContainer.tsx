import { FunctionComponent } from "react";
import FilterOptions1 from "./FilterOptions1";
import FilterOptions from "./FilterOptions";
import ResultItems1 from "./ResultItems1";
import ResultItems from "./ResultItems";

export type SearchInputContainerType = {
  className?: string;
};

const SearchInputContainer: FunctionComponent<SearchInputContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[77rem] flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[0.875rem] text-gray-300 font-montserrat-medium-14 mq750:gap-[1rem] ${className}`}
    >
      <div className="self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-2xl bg-neutrals flex flex-col items-end justify-center py-[2rem] px-[1.5rem] mq750:gap-[1rem]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.5rem]">
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.063rem] text-blackish-green">
            <div className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] [row-gap:20px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[9.438rem] min-h-[2.5rem]">
                  <input
                    className="w-[8.125rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                    placeholder="Lahore - Karachi"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[4.188rem]">
                      From - To
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-[0.75rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/ionswaphorizontal.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-gray-300">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="rounded-t rounded-b-none flex flex-col items-start justify-start text-[1rem]">
            <div className="rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem]">
                <div className="h-[2.5rem] flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[1.25rem] pl-[0rem] box-border relative">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative inline-block min-w-[3.5rem]">
                      Return
                    </div>
                  </div>
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] text-[0.875rem] text-blackish-green">
                    <div className="relative inline-block min-w-[1.688rem]">
                      Trip
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-[0.75rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] text-[0.875rem]">
              <div className="flex-1 relative whitespace-nowrap">
                Supporting text
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.063rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="w-[13.144rem] flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[1.75rem] pl-[0rem] relative">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300 min-w-[6.25rem]"
                    placeholder="07 Nov 22 - 13 Nov 22"
                    type="text"
                  />
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                    <div className="relative inline-block min-w-[6.688rem]">
                      Depart- Return
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.063rem] text-[1rem]">
            <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] relative">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative">1 Passenger, Economy</div>
                  </div>
                  <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap text-[0.875rem]">
                    <div className="relative inline-block min-w-[7.625rem]">
                      Passenger - Class
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
              <div className="flex-1 relative">Supporting text</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="rounded bg-mint-green flex flex-row items-center justify-center p-[1rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.968rem] max-w-full text-[1rem] text-blackish-green mq1050:flex-wrap">
        <div className="w-[21.969rem] flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]">
          <a className="[text-decoration:none] relative text-[1.25rem] font-semibold text-[inherit] inline-block min-w-[4.063rem] mq450:text-[1rem]">
            Filters
          </a>
          <FilterOptions1
            price="Price"
            amPmCheckboxes="$50"
            timeLabels="$1200"
          />
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
          <FilterOptions1
            price="Departure Time"
            amPmCheckboxes="12:01Am"
            timeLabels="11:56Pm"
          />
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <div className="relative font-semibold inline-block min-w-[3.438rem]">
                Rating
              </div>
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.937rem] pl-[0rem] gap-[1rem] text-[0.75rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[2.438rem] max-w-[2.5rem]">
                <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.687rem] border-[1px] border-solid border-mint-green">
                  <div className="relative font-medium inline-block min-w-[1rem]">
                    0+
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[2.438rem] max-w-[2.5rem]">
                <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.812rem] border-[1px] border-solid border-mint-green">
                  <div className="relative font-medium inline-block min-w-[0.75rem]">
                    1+
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[2.438rem] max-w-[2.5rem]">
                <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.75rem] border-[1px] border-solid border-mint-green">
                  <div className="relative font-medium inline-block min-w-[0.875rem]">
                    2+
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[2.438rem] max-w-[2.5rem]">
                <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.75rem] border-[1px] border-solid border-mint-green">
                  <div className="relative font-medium inline-block min-w-[0.875rem]">
                    3+
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[2.438rem] max-w-[2.5rem]">
                <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.687rem] border-[1px] border-solid border-mint-green">
                  <div className="relative font-medium inline-block min-w-[1rem]">
                    4+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
          <FilterOptions
            airlines="Airlines"
            emirated="Emirated"
            flyDubai="Fly Dubai"
            qatar="Qatar"
            etihad="Etihad"
          />
          <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
          <FilterOptions
            airlines="Trips"
            emirated="Round trip"
            flyDubai="On Way"
            qatar="Multi-City"
            etihad="My Dates Are Flexible"
          />
        </div>
        <div className="h-[85rem] w-[0.031rem] relative bg-gray-1500 mq1050:hidden mq1050:w-full mq1050:h-[0.031rem]" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[34.125rem] max-w-full mq750:min-w-full">
          <div className="self-stretch h-[5rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border gap-[6.062rem] mq450:h-auto mq450:gap-[1.5rem] mq1050:gap-[3rem]">
            <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative font-semibold inline-block min-w-[4.875rem]">
                  Cheapest
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.25rem] text-[0.875rem] text-gray-600">
                  <div className="relative inline-block min-w-[1.625rem] whitespace-nowrap">
                    $99
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                    <div className="relative inline-block min-w-[0.188rem]">
                      .
                    </div>
                    <div className="relative inline-block min-w-[3.125rem]">
                      2h 18m
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[19.938rem] shrink-0 flex flex-row items-start justify-start gap-[0.687rem]">
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender" />
              <div className="flex-1 flex flex-row items-start justify-start gap-[1.437rem] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[8rem]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.75rem]">
                    <div className="h-[3rem] flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                          <div className="relative font-semibold inline-block min-w-[2.375rem]">
                            Best
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[0.25rem] text-[0.875rem] text-gray-600">
                            <div className="relative inline-block min-w-[1.625rem] whitespace-nowrap">
                              $99
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                              <div className="relative inline-block min-w-[0.188rem]">
                                .
                              </div>
                              <div className="relative inline-block min-w-[3.125rem]">
                                2h 18m
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender" />
                    </div>
                  </div>
                  <div className="w-[11.5rem] h-[0.25rem] relative box-border border-t-[4px] border-solid border-mint-green" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <div className="relative font-semibold inline-block min-w-[4.563rem]">
                      Quickest
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.25rem] text-[0.875rem] text-gray-600">
                      <div className="relative inline-block min-w-[1.625rem] whitespace-nowrap">
                        $99
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                        <div className="relative inline-block min-w-[0.188rem]">
                          .
                        </div>
                        <div className="relative inline-block min-w-[3.125rem]">
                          2h 18m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[3rem] flex flex-row items-start justify-start gap-[1.437rem] text-[0.875rem]">
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender" />
              <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/menu.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-medium inline-block min-w-[4.563rem]">
                      Other sort
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.875rem] mq450:flex-wrap">
            <div className="relative font-semibold">
              <span>{`Showing 4 of `}</span>
              <span className="text-slamon">257 places</span>
            </div>
            <div className="w-[11.75rem] flex flex-row items-start justify-start gap-[0.25rem] text-right">
              <div className="flex-1 relative">
                <span>Sort by</span>
                <span className="font-semibold"> Recommended</span>
              </div>
              <img
                className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 min-h-[1.125rem]"
                alt=""
                src="/chevron-down-6.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full text-[0.75rem] mq450:gap-[1rem]">
            <ResultItems1 image40="/image-40@2x.png" />
            <ResultItems1 image40="/image-41@2x.png" />
            <ResultItems image43="/image-43@2x.png" />
            <ResultItems image43="/image-45@2x.png" />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 rounded bg-blackish-green flex flex-row items-start justify-center py-[0.968rem] px-[1.25rem] box-border max-w-full">
              <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-neutrals text-left">
                Show more results
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInputContainer;
