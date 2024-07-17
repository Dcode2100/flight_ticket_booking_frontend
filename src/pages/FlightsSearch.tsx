import { FunctionComponent } from "react";
import HeaderDefault from "../components/HeaderDefault";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";

const FlightsSearch: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderDefault />
      <FrameComponent10 />
      <section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[5rem] box-border gap-[1.5rem] max-w-full text-left text-[0.625rem] text-blackish-green font-tradegothic-bold-16 mq750:pb-[3.25rem] mq750:box-border">
        <FrameComponent9 />
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[4.5rem] px-[10.125rem] pb-[9rem] box-border relative gap-[7.687rem] max-w-full mq450:gap-[1.938rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[3.813rem] mq750:pt-[2.938rem] mq750:px-[5.063rem] mq750:pb-[5.875rem] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.5rem] pl-[1.25rem] box-border max-w-full">
            <div className="w-[51.625rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
              <div className="w-[8.813rem] rounded bg-neutrals flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.5rem] z-[3]">
                <img
                  className="h-[2.5rem] w-[2.5rem] relative rounded object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-25@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[0.531rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative inline-block min-w-[3.875rem]">
                      James Doe
                    </b>
                    <div className="relative text-[0.5rem] font-montserrat-medium-14 inline-block min-w-[5.063rem]">
                      Boarding Pass N’123
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent8 rectangle25="/rectangle-25-1@2x.png" />
            </div>
          </div>
          <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden z-[1]" />
          <FrameComponent7 />
          <FrameComponent6 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[7.5rem] box-border max-w-full text-left text-[1.5rem] text-neutrals font-montserrat-medium-14 mq1225:pb-[4.875rem] mq1225:box-border mq750:pb-[3.188rem] mq750:box-border">
        <div className="w-[77rem] flex flex-col items-start justify-start gap-[5rem] max-w-full mq450:gap-[1.25rem] mq750:gap-[2.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
            <FrameComponent5 />
            <div className="self-stretch grid flex-row items-start justify-start gap-[1rem] grid-cols-[repeat(4,_minmax(222px,_1fr))] mq450:grid-cols-[minmax(222px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(222px,_385px))]">
              <div className="h-[26.25rem] flex flex-col items-center justify-start relative">
                <img
                  className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className="w-[15.5rem] !m-[0] absolute top-[17.875rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-end justify-end gap-[0.125rem]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
                        Melbourne
                      </h2>
                      <div className="self-stretch relative text-[0.875rem]">
                        An amazing journey
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[4.313rem] whitespace-nowrap mq450:text-[1.188rem]">
                      $ 700
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-blackish-green">
                    <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem] whitespace-nowrap">
                      <div className="relative font-medium inline-block min-w-[5.188rem]">
                        Book Flight
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[26.25rem] flex flex-col items-center justify-start relative">
                <img
                  className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-42@2x.png"
                />
                <div className="w-[15.563rem] !m-[0] absolute top-[17.875rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-end justify-end gap-[0.125rem]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
                        Paris
                      </h2>
                      <div className="self-stretch relative text-[0.875rem]">
                        A Paris Adventure
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[4.375rem] whitespace-nowrap mq450:text-[1.188rem]">
                      $ 600
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-blackish-green">
                    <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem] whitespace-nowrap">
                      <div className="relative font-medium inline-block min-w-[5.188rem]">
                        Book Flight
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[26.25rem] flex flex-col items-center justify-start relative">
                <img
                  className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-5@2x.png"
                />
                <div className="w-[15.5rem] !m-[0] absolute top-[17.875rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-end justify-end gap-[0.125rem]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
                        London
                      </h2>
                      <div className="self-stretch relative text-[0.875rem]">
                        London eye adventure
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[4.125rem] whitespace-nowrap mq450:text-[1.188rem]">
                      $ 350
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-blackish-green">
                    <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem] whitespace-nowrap">
                      <div className="relative font-medium inline-block min-w-[5.188rem]">
                        Book Flight
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[26.25rem] flex flex-col items-center justify-start relative">
                <img
                  className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-6@2x.png"
                />
                <div className="w-[15.5rem] !m-[0] absolute top-[17.875rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1rem] z-[1]">
                  <div className="self-stretch flex flex-row items-end justify-end gap-[0.125rem]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
                        Columbia
                      </h2>
                      <div className="self-stretch relative text-[0.875rem]">
                        Amazing streets
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[4.313rem] whitespace-nowrap mq450:text-[1.188rem]">
                      $ 700
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-blackish-green">
                    <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem] whitespace-nowrap">
                      <div className="relative font-medium inline-block min-w-[5.188rem]">
                        Book Flight
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] max-w-full text-[2.5rem] text-blackish-green font-tradegothic-bold-16">
            <FrameComponent5 />
            <div className="self-stretch flex flex-row items-center justify-start gap-[1.5rem] max-w-full mq1050:flex-wrap">
              <div className="flex-1 rounded-xl bg-mint-green flex flex-col items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[1.312rem] box-border gap-[7.5rem] min-w-[22.438rem] max-w-full mq450:gap-[1.875rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq450:min-w-full mq750:gap-[3.75rem]">
                <div className="self-stretch flex flex-col items-start justify-center gap-[1.5rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                    <h1 className="m-0 w-[22.688rem] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-[1.5rem] mq750:text-[2rem]">
                      Backpacking Sri Lanka
                    </h1>
                    <div className="rounded-lg bg-neutrals flex flex-col items-center justify-center p-[0.5rem] gap-[0.25rem] text-[0.875rem]">
                      <div className="relative inline-block min-w-[2.563rem]">
                        From
                      </div>
                      <div className="relative text-[1.25rem] font-semibold font-montserrat-medium-14 inline-block min-w-[3.25rem] whitespace-nowrap mq450:text-[1rem]">
                        $700
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[0.875rem] font-montserrat-medium-14">
                    Traveling is a unique experience as it's the best way to
                    unplug from the pushes and pulls of daily life. It helps us
                    to forget about our problems, frustrations, and fears at
                    home. During our journey, we experience life in different
                    ways. We explore new places, cultures, cuisines, traditions,
                    and ways of living.
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded bg-neutrals flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
                    <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[5.188rem]">
                      Book Flight
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-[41rem] flex flex-col items-start justify-start gap-[1.5rem] min-w-[41rem] max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
                  <img
                    className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover min-w-[12.938rem] min-h-[12.5rem]"
                    alt=""
                    src="/rectangle-3-11@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover min-w-[12.938rem] min-h-[12.5rem]"
                    alt=""
                    src="/rectangle-3-21@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
                  <img
                    className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover min-w-[12.938rem] min-h-[12.5rem]"
                    alt=""
                    src="/rectangle-3-31@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover min-w-[12.938rem] min-h-[12.5rem]"
                    alt=""
                    src="/rectangle-3-41@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] rounded-11xl flex flex-col items-center justify-end pt-[9.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:gap-[2rem] mq750:gap-[4rem] mq750:pt-[6.125rem] mq750:box-border">
        <footer className="self-stretch h-[26.375rem] bg-mint-green flex flex-col items-center justify-end pt-[0rem] px-[1.25rem] pb-[4rem] box-border gap-[4rem] max-w-full text-left text-[2.75rem] text-blackish-green font-tradegothic-bold-16 mq1225:h-auto mq450:gap-[1rem] mq750:gap-[2rem] mq750:pb-[2.625rem] mq750:box-border">
          <div className="w-[77rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-lightcyan overflow-hidden flex flex-row items-end justify-between py-[0rem] px-[1.5rem] box-border max-w-full shrink-0 gap-[1.25rem] mq1225:flex-wrap">
            <div className="w-[37.063rem] flex flex-col items-start justify-between py-[1.5rem] px-[0rem] box-border min-w-[37.063rem] min-h-[19.063rem] max-w-full mq1225:flex-1 mq750:min-w-full">
              <h1 className="m-0 w-[22.75rem] relative text-inherit leading-[3.375rem] font-bold font-inherit inline-block max-w-full mq450:text-[1.625rem] mq450:leading-[2rem] mq750:text-[2.188rem] mq750:leading-[2.688rem]">
                Subscribe Newsletter
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.25rem] text-gray-700">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[7.313rem] mq450:text-[1rem]">
                    The Travel
                  </h3>
                  <div className="relative text-[1rem] font-medium font-montserrat-medium-14 text-gray-800">
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[1rem] max-w-full text-[1rem] text-gray-300 font-montserrat-medium-14 mq750:flex-wrap">
                  <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[19.188rem] max-w-full">
                    <div className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start max-w-full">
                      <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-center py-[0.625rem] px-[0rem] box-border max-w-full">
                          <div className="bg-neutrals flex flex-row items-center justify-start whitespace-nowrap">
                            <div className="relative">Your email address</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
                      <div className="flex-1 relative">Supporting text</div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                    <div className="rounded bg-blackish-green flex flex-row items-center justify-center py-[1.218rem] px-[1rem]">
                      <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-neutrals text-left inline-block min-w-[4.5rem]">
                        Subscribe
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className="w-[25rem] relative max-h-full overflow-hidden shrink-0 max-w-full mq1225:flex-1"
              loading="lazy"
              alt=""
              src="/emojionev1openmailboxwithloweredflag.svg"
            />
          </div>
          <div className="w-[77rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1rem] mq1225:flex-wrap">
            <div className="w-[7.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
              <img
                className="self-stretch h-[2.444rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/logo-1@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/akariconsfacebookfill.svg"
                />
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/akariconstwitterfill.svg"
                />
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/akariconsyoutubefill.svg"
                />
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/antdesigninstagramfilled.svg"
                />
              </div>
            </div>
            <div className="w-[60.75rem] flex flex-row items-start justify-end gap-[1.5rem] max-w-full mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
                <b className="relative">Our Destinations</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium">
                    Canada
                  </div>
                  <div className="self-stretch relative font-medium">
                    Alaksa
                  </div>
                  <div className="self-stretch relative font-medium">
                    France
                  </div>
                  <div className="self-stretch relative font-medium">
                    Iceland
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
                <b className="relative inline-block min-w-[7.625rem]">
                  Our Activities
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium">
                    Northern Lights
                  </div>
                  <div className="self-stretch relative font-medium">{`Cruising & sailing`}</div>
                  <div className="self-stretch relative font-medium">
                    Multi-activities
                  </div>
                  <div className="self-stretch relative font-medium">
                    Kayaing
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
                <b className="relative inline-block min-w-[6.875rem]">
                  Travel Blogs
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium">
                    Bali Travel Guide
                  </div>
                  <div className="self-stretch relative font-medium">
                    Sri Lanks Travel Guide
                  </div>
                  <div className="self-stretch relative font-medium">
                    Peru Travel Guide
                  </div>
                  <div className="self-stretch relative font-medium">
                    Bali Travel Guide
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
                <b className="relative inline-block min-w-[5.313rem]">
                  About Us
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium">
                    Our Story
                  </div>
                  <div className="self-stretch relative font-medium">
                    Work with us
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
                <b className="relative inline-block min-w-[6.375rem]">
                  Contact Us
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
                  <div className="self-stretch relative font-medium">
                    Our Story
                  </div>
                  <div className="self-stretch relative font-medium">
                    Work with us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default FlightsSearch;
