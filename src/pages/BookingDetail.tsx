import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const BookingDetail: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-900 overflow-hidden flex flex-col items-start justify-start gap-[1.812rem] leading-[normal] tracking-[normal]">
      <MainContent />
      <section className="w-[59.375rem] flex flex-row items-start justify-start py-[0rem] px-[5rem] box-border max-w-full text-left text-[0.875rem] text-slamon font-montserrat-medium-14 mq1050:pl-[2.5rem] mq1050:pr-[2.5rem] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq750:flex-wrap">
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[3rem]">
                Turkey
              </a>
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-forward.svg"
                />
              </div>
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[3.625rem]">
                Istanbul
              </a>
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-forward.svg"
                />
              </div>
              <div className="relative font-medium text-gray-400">
                CVK Park Bosphorus Hotel Istanbul
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals flex flex-col items-start justify-start py-[2rem] px-[1.5rem] box-border gap-[2.5rem] max-w-full text-[1.5rem] text-blackish-green font-tradegothic-bold-16 mq450:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.188rem]">
                      Emirates A380 Airbus
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start text-right text-[2rem] text-slamon font-montserrat-medium-14">
                  <b className="relative inline-block min-w-[5.188rem] whitespace-nowrap mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    $240
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1rem] mq450:flex-wrap">
                <b className="relative">Return Wed, Dec 8</b>
                <div className="relative text-[1.25rem] font-medium font-montserrat-medium-14 text-gray-400 inline-block min-w-[4.75rem] mq450:text-[1rem]">
                  2h 28m
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] font-montserrat-medium-14 mq1050:flex-wrap">
                <div className="rounded-lg bg-neutrals flex flex-row items-end justify-start py-[0.937rem] px-[1.937rem] gap-[1.5rem] border-[0.5px] border-solid border-mint-green mq450:flex-wrap">
                  <div className="w-[4rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.293rem] box-border">
                    <img
                      className="self-stretch h-[2.781rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/kisspngdubaiairbusa380emiratesairlinelogo5adaedbb89d2d6-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                    <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[6.875rem] mq450:text-[1.188rem]">
                      Emirates
                    </a>
                    <div className="relative text-[0.875rem] font-medium text-gray-1300 inline-block min-w-[5.375rem]">
                      Airbus A320
                    </div>
                  </div>
                </div>
                <div className="w-[22.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border max-w-full">
                  <div className="self-stretch rounded-xl bg-neutrals flex flex-row items-start justify-between py-[1rem] px-[1.5rem] gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
                    <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/airplane-1.svg"
                      />
                    </div>
                    <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
                    <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/wifi.svg"
                      />
                    </div>
                    <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
                    <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/ionstopwatch.svg"
                      />
                    </div>
                    <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
                    <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/ionfastfood.svg"
                      />
                    </div>
                    <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
                    <div className="w-[1.5rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/icroundairlineseatreclinenormal.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] font-montserrat-medium-14 mq1050:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-semibold inline-block min-w-[6.875rem] whitespace-nowrap mq450:text-[1.188rem]">
                    12:00 pm
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start text-[1rem] text-gray-1300">
                  <div className="relative font-medium inline-block min-w-[7.125rem]">
                    Newark(EWR)
                  </div>
                </div>
              </div>
              <img
                className="h-[3rem] w-[10.5rem] object-contain"
                loading="lazy"
                alt=""
                src="/frame-181@2x.png"
              />
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-semibold inline-block min-w-[6.875rem] whitespace-nowrap mq450:text-[1.188rem]">
                    12:00 pm
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start text-[1rem] text-gray-1300">
                  <div className="relative font-medium inline-block min-w-[7.125rem]">
                    Newark(EWR)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-1200 z-[1]" />
      <section className="self-stretch flex flex-col items-start justify-end pt-[45.625rem] px-[0rem] pb-[0rem] box-border relative max-w-full text-left text-[1rem] text-blackish-green font-tradegothic-bold-16 lg:pt-[29.625rem] lg:box-border mq750:pt-[19.25rem] mq750:box-border">
        <Footer />
        <div className="w-[40rem] !m-[0] absolute top-[0rem] left-[25rem] flex flex-row items-start justify-start max-w-full">
          <div className="w-[49.375rem] !m-[0] absolute top-[0.688rem] left-[-20rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals flex flex-col items-start justify-start p-[1rem] box-border gap-[1rem]">
            <div className="self-stretch rounded-xl bg-mint-green flex flex-row items-start justify-between p-[1rem] gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <b className="relative inline-block min-w-[5.563rem]">
                  Pay in full
                </b>
                <div className="relative text-[0.875rem] font-montserrat-medium-14">
                  Pay the total and you are all set
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.25rem]">
                <div className="h-[2.5rem] w-[2.5rem] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-[0.5rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-end py-[0rem] px-[1rem] box-border gap-[2.875rem] max-w-full font-montserrat-medium-14">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[25.688rem] max-w-full mq750:min-w-full">
                <b className="self-stretch relative font-tradegothic-bold-16">
                  Pay part now, part later
                </b>
                <div className="self-stretch h-[3.438rem] relative text-[0.875rem] inline-block shrink-0">
                  <p className="m-0">
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </p>
                  <p className="m-0">{` `}</p>
                </div>
                <div className="relative text-[0.75rem] [text-decoration:underline] font-medium inline-block min-w-[3.625rem]">
                  More info
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.25rem]">
                <div className="h-[2.5rem] w-[2.5rem] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-[0.5rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[49.375rem] !m-[0] absolute bottom-[8.4rem] left-[-20rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals flex flex-col items-start justify-start p-[1rem] box-border gap-[1rem]">
            <div className="self-stretch rounded-xl bg-mint-green flex flex-row items-center justify-between p-[1rem] gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[2rem]">
                <img
                  className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/visa.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <b className="relative inline-block min-w-[5.25rem]">
                    **** 4321
                  </b>
                  <div className="relative text-[0.875rem] font-montserrat-medium-14 inline-block min-w-[2.438rem]">
                    02/27
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.25rem]">
                <div className="h-[2.5rem] w-[2.5rem] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center p-[0.5rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-mini flex flex-col items-center justify-center py-[2.937rem] px-[1.25rem] gap-[0.625rem] text-[0.75rem] text-gray-400 font-montserrat-medium-14 border-[2px] border-dashed border-mint-green">
              <img
                className="w-[4rem] h-[4rem] relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
              <div className="relative font-medium inline-block min-w-[6rem]">
                Add a new card
              </div>
            </div>
          </div>
          <div className="flex-1 !m-[0] absolute top-[-23.625rem] right-[-20rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-hidden flex flex-col items-start justify-start py-[1.5rem] pr-[1.437rem] pl-[1.5rem] box-border gap-[1rem] max-w-full font-montserrat-medium-14">
            <div className="flex flex-row items-center justify-start gap-[1.5rem] max-w-full text-gray-400 mq450:flex-wrap">
              <img
                className="h-[7.5rem] w-[7.5rem] rounded-xl object-cover min-h-[7.5rem] mq450:flex-1"
                loading="lazy"
                alt=""
                src="/frame-1861@2x.png"
              />
              <div className="flex flex-col items-start justify-center py-[0.625rem] px-[0rem] box-border gap-[1.25rem] min-w-[13.938rem] mq450:flex-1">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[4.813rem]">{`Economy `}</div>
                  <h3 className="m-0 relative text-[1.25rem] font-semibold font-inherit text-blackish-green mq450:text-[1rem]">
                    Emirates A380 Airbus
                  </h3>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.75rem] text-blackish-green">
                  <div className="w-[2.5rem] flex flex-col items-start justify-start">
                    <div className="self-stretch rounded flex flex-row items-center justify-center py-[0.437rem] px-[0.625rem] border-[1px] border-solid border-mint-green">
                      <div className="relative font-medium inline-block min-w-[1.125rem]">
                        4.2
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <b>Very Good</b>
                    <span className="font-medium"> 54 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
            <div className="relative">
              <span className="font-medium">{`Your booking is protected by `}</span>
              <b>golobe</b>
            </div>
            <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
            <b className="relative inline-block font-tradegothic-bold-16 min-w-[7.125rem]">
              Price Details
            </b>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[5rem]">{`Base Fare `}</div>
              <div className="relative font-semibold inline-block min-w-[2.688rem] whitespace-nowrap">
                $400
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[4.625rem]">
                Discount
              </div>
              <div className="relative font-semibold inline-block min-w-[2.688rem] whitespace-nowrap">
                $400
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[2.813rem]">
                Taxes
              </div>
              <div className="relative font-semibold inline-block min-w-[2.688rem] whitespace-nowrap">
                $400
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[5.813rem]">
                Service Fee
              </div>
              <div className="relative font-semibold inline-block min-w-[2.688rem] whitespace-nowrap">
                $400
              </div>
            </div>
            <div className="self-stretch h-[0.031rem] relative bg-gray-1500" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium inline-block min-w-[2.5rem]">{`Total `}</div>
              <div className="relative font-semibold inline-block min-w-[2.688rem] whitespace-nowrap">
                $400
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutrals flex flex-col items-start justify-start p-[4rem] box-border max-w-full shrink-0 z-[2] text-[2.5rem] text-black">
            <div className="self-stretch flex flex-col items-end justify-center p-[0.312rem]">
              <img
                className="w-[0.888rem] h-[0.888rem] relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.5rem] mq1050:text-[2rem]">
                Add a new Card
              </h1>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2.5rem] max-w-full text-[0.875rem] text-gray-300 font-montserrat-medium-14">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-blackish-green">
                    <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                      <div className="self-stretch rounded-t rounded-b-none flex flex-row flex-wrap items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px]">
                        <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[18.188rem] min-h-[2.5rem] max-w-full">
                          <input
                            className="w-[9.375rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                            placeholder="4321 4321 4321 4321"
                            type="text"
                          />
                          <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                            <div className="relative inline-block min-w-[6.063rem]">
                              Card Number
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-[0.75rem]">
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                            alt=""
                            src="/visa-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-gray-300">
                      <div className="flex-1 relative">Supporting text</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem]">
                    <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[9.938rem]">
                      <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
                        <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[9.812rem] pl-[0rem] relative">
                            <input
                              className="w-[2.75rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                              placeholder="02/27"
                              type="text"
                            />
                            <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                              <div className="relative inline-block min-w-[4.188rem]">
                                Exp. Date
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                        <div className="flex-1 relative">Supporting text</div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[9.938rem] text-[1rem]">
                      <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
                        <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[12.125rem] pl-[0rem] relative">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative inline-block min-w-[1.5rem]">
                                123
                              </div>
                            </div>
                            <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] text-[0.875rem]">
                              <div className="relative inline-block min-w-[1.875rem]">
                                CVC
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
                        <div className="flex-1 relative">Supporting text</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[3.5rem] rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex-1 rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                      <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[24.375rem] pl-[0rem] box-border relative max-w-full">
                          <input
                            className="w-[4.813rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                            placeholder="John Doe"
                            type="text"
                          />
                          <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap">
                            <div className="relative inline-block min-w-[6.375rem]">
                              Name on Card
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                      <div className="flex-1 relative">Supporting text</div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-[1rem]">
                    <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                      <div className="self-stretch rounded-t rounded-b-none flex flex-row flex-wrap items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px]">
                        <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[19.687rem] pl-[0rem] box-border relative min-w-[18.188rem] min-h-[2.5rem] max-w-full">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative inline-block min-w-[6.813rem]">
                              United States
                            </div>
                          </div>
                          <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem] whitespace-nowrap text-[0.875rem] text-blackish-green">
                            <div className="relative inline-block min-w-[8.063rem]">
                              Country or Region
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-[0.75rem]">
                          <img
                            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/chevron-down.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border text-[0.875rem]">
                      <div className="flex-1 relative">Supporting text</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.5rem] max-w-full text-blackish-green">
                    <input
                      className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                      type="checkbox"
                    />
                    <div className="relative font-medium">
                      Securely save my information for 1-click checkout
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[0rem] box-border gap-[1rem] max-w-full text-center text-[0.75rem] text-gray-400">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
                      <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[4.25rem]">
                        Add Card
                      </div>
                    </div>
                  </button>
                  <div className="w-[33.25rem] relative inline-block max-w-[104%] shrink-0">
                    By confirming your subscription, you allow The Outdoor Inn
                    Crowd Limited to charge your card for this payment and
                    future payments in accordance with their terms. You can
                    always cancel your subscription.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingDetail;
