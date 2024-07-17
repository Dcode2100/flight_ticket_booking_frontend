import { FunctionComponent } from "react";
import BookingsSummary from "../components/BookingsSummary";

const AccountHistory: FunctionComponent = () => {
  return (
    <div className="w-full h-[132.313rem] relative bg-gray-100 overflow-hidden leading-[normal] tracking-[normal] mq450:h-auto mq450:min-h-[2117]">
      <img
        className="absolute top-[8.438rem] left-[6.5rem] rounded-xl w-[77rem] h-[21.875rem] object-cover"
        alt=""
        src="/rectangle-34@2x.png"
      />
      <header className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-neutrals w-full flex flex-row items-end justify-center pt-[1.312rem] px-[1.25rem] pb-[0rem] box-border gap-[20.725rem] max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 lg:gap-[10.375rem] mq450:gap-[2.563rem] mq750:gap-[5.188rem]">
        <div className="w-[40.025rem] flex flex-col items-start justify-start gap-[1.281rem] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[2rem] mq1050:hidden">
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/airplane-1.svg"
                />
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.938rem] whitespace-nowrap">
                  Find Flight
                </a>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/ionbed-1.svg"
                />
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.688rem] whitespace-nowrap">
                  Find Stays
                </a>
              </div>
            </div>
            <img
              className="h-[2.25rem] w-[6.9rem] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/logo5@2x.png"
            />
          </div>
          <div className="w-[15.125rem] flex flex-row items-start justify-start gap-[2rem]">
            <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
            <div className="h-[0.313rem] flex-1 relative bg-mint-green" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="flex flex-row items-start justify-start gap-[2rem] mq450:gap-[1rem]">
            <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                    <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.688rem]">
                      Favourites
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[0.313rem]">
                    |
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.25rem]">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[2.813rem] w-[2.813rem] relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="h-[0.625rem] w-[0.625rem] absolute !m-[0] right-[0.125rem] bottom-[0.125rem] rounded-[50%] bg-blackish-green z-[1]" />
                <img
                  className="h-[0.875rem] w-[0.875rem] absolute !m-[0] right-[0rem] bottom-[0rem] overflow-hidden shrink-0 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/arrow-down@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3.438rem] whitespace-nowrap">
                  John D.
                </a>
              </div>
            </div>
          </div>
          <div className="w-[6.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
            <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
          </div>
        </div>
      </header>
      <BookingsSummary />
      <section className="absolute bottom-[0rem] left-[calc(50%_-_720px)] shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] rounded-11xl w-full flex flex-col items-center justify-end pt-[9.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:gap-[2rem] mq750:gap-[4rem]">
        <footer className="self-stretch h-[26.375rem] bg-mint-green flex flex-col items-center justify-end pt-[0rem] px-[1.25rem] pb-[4rem] box-border gap-[4rem] max-w-full text-left text-[2.75rem] text-blackish-green font-tradegothic-bold-16 lg:h-auto mq450:gap-[1rem] mq750:gap-[2rem]">
          <div className="w-[77rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-lightcyan overflow-hidden flex flex-row items-end justify-between py-[0rem] px-[1.5rem] box-border max-w-full shrink-0 gap-[1.25rem] lg:flex-wrap">
            <div className="w-[37.063rem] flex flex-col items-start justify-between py-[1.5rem] px-[0rem] box-border min-w-[37.063rem] min-h-[19.063rem] max-w-full lg:flex-1 mq750:min-w-full">
              <h1 className="m-0 w-[22.75rem] relative text-inherit leading-[3.375rem] font-bold font-inherit inline-block max-w-full mq450:text-[1.625rem] mq450:leading-[2rem] mq1050:text-[2.188rem] mq1050:leading-[2.688rem]">
                Subscribe Newsletter
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.25rem] text-gray-700">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <b className="relative inline-block min-w-[7.313rem] mq450:text-[1rem]">
                    The Travel
                  </b>
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
              className="w-[25rem] relative max-h-full overflow-hidden shrink-0 max-w-full lg:flex-1"
              loading="lazy"
              alt=""
              src="/emojionev1openmailboxwithloweredflag.svg"
            />
          </div>
          <div className="w-[77rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1rem] lg:flex-wrap">
            <div className="w-[7.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
              <img
                className="self-stretch h-[2.444rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/logo-12@2x.png"
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

export default AccountHistory;
