import { FunctionComponent } from "react";
import DestinationParent from "../components/DestinationParent";
import FooterContent from "../components/FooterContent";

const FlightDetailPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[3rem] leading-[normal] tracking-[normal] mq750:gap-[1.5rem]">
      <header className="self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-neutrals flex flex-row items-end justify-center pt-[1.312rem] px-[1.25rem] pb-[0rem] box-border gap-[20.725rem] top-[0] z-[99] sticky max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 mq450:gap-[2.563rem] mq750:gap-[5.188rem] mq1275:gap-[10.375rem]">
        <div className="w-[40.025rem] flex flex-col items-start justify-start gap-[1.281rem] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[2rem] mq1100:hidden">
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
              src="/logo2@2x.png"
            />
          </div>
          <div className="w-[15.125rem] flex flex-row items-start justify-start gap-[2rem]">
            <div className="h-[0.313rem] flex-1 relative bg-mint-green" />
            <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
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
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4.5rem] box-border max-w-full mq450:pb-[1.25rem] mq450:box-border mq1100:pb-[1.938rem] mq1100:box-border mq1275:pb-[2.938rem] mq1275:box-border">
        <DestinationParent />
      </section>
      <section className="self-stretch shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] rounded-11xl flex flex-col items-center justify-end pt-[9.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:gap-[2rem] mq750:gap-[4rem] mq750:pt-[6.125rem] mq750:box-border">
        <footer className="self-stretch h-[26.375rem] bg-mint-green flex flex-col items-center justify-end pt-[0rem] px-[1.25rem] pb-[4rem] box-border gap-[4rem] max-w-full text-left text-[1rem] text-blackish-green font-tradegothic-bold-16 mq450:gap-[1rem] mq750:gap-[2rem] mq750:pb-[2.625rem] mq750:box-border mq1100:h-auto">
          <FooterContent />
          <div className="w-[77rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1275:flex-wrap">
            <div className="w-[7.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
              <img
                className="self-stretch h-[2.444rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/logo-11@2x.png"
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
            <div className="w-[60.75rem] flex flex-row items-start justify-end gap-[1.5rem] max-w-full mq1100:flex-wrap">
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

export default FlightDetailPage;
