import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 ${className}`}
    >
      <div className="w-[77rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq450:gap-[1rem] mq750:gap-[2rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq450:flex-wrap">
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
              <div className="relative font-medium text-gray-600">
                CVK Park Bosphorus Hotel Istanbul
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-[1.5rem] font-tradegothic-bold-16 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full">
                <div className="flex flex-row items-center justify-start">
                  <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.188rem]">
                    Emirates A380 Airbus
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-start text-[0.875rem] text-gray-400 font-montserrat-medium-14">
                  <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                    <img
                      className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 min-h-[1.125rem]"
                      alt=""
                      src="/location.svg"
                    />
                    <div className="relative font-medium">
                      Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[1rem] min-w-[13.313rem] text-right text-[2rem] font-montserrat-medium-14 mq750:flex-1">
                <b className="relative inline-block min-w-[5.188rem] whitespace-nowrap mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  $240
                </b>
                <div className="flex flex-row items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[3rem] rounded box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.812rem] border-[1px] border-solid border-mint-green">
                      <img
                        className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/share.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                    <div className="rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[2.375rem]">
                      <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[4.625rem]">
                        Download
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-right text-[2rem] mq1050:flex-wrap">
            <div className="flex-1 rounded-2xl bg-neutrals box-border overflow-hidden flex flex-row items-start justify-start max-w-full [row-gap:20px] border-[1px] border-solid border-whitesmoke mq750:flex-wrap mq750:min-w-full">
              <img
                className="h-[23.981rem] w-[45.731rem] relative hidden max-w-full"
                alt=""
                src="/group1.svg"
              />
              <div className="w-[15.375rem] bg-mintcream flex flex-col items-start justify-start py-[2.156rem] px-[1.5rem] box-border gap-[1rem] min-w-[15.375rem] mq750:flex-1">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-semibold whitespace-nowrap mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    12:00 pm
                  </div>
                  <div className="relative text-[0.75rem] font-medium text-gray-1300 inline-block min-w-[5.375rem]">
                    Newark(EWR)
                  </div>
                </div>
                <div className="rounded flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.25rem] h-[1.625rem] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/airplane-11@2x.png"
                    />
                  </div>
                  <img
                    className="w-[2.25rem] h-[1.625rem] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.25rem] text-left">
                  <div className="relative font-semibold whitespace-nowrap mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    12:00 pm
                  </div>
                  <div className="relative text-[0.75rem] font-medium text-gray-1300 inline-block min-w-[5.375rem]">
                    Newark(EWR)
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[2.531rem] min-w-[24.75rem] max-w-full text-left text-[1.25rem] font-tradegothic-bold-16 mq750:gap-[1.25rem] mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch bg-mint-green flex flex-row items-start justify-start p-[1.5rem] box-border max-w-full mq750:gap-[1.438rem]">
                    <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                      <div className="w-[19.313rem] flex flex-row items-center justify-start gap-[1rem]">
                        <img
                          className="h-[3rem] w-[3rem] relative rounded-[50%] object-cover"
                          alt=""
                          src="/ellipse-1-1@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-center py-[0rem] pr-[1.25rem] pl-[0rem]">
                          <h3 className="m-0 w-[8.813rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1rem]">
                            James Doe
                          </h3>
                          <div className="relative text-[0.875rem] font-montserrat-medium-14">
                            Boarding Pass N’123
                          </div>
                        </div>
                      </div>
                      <b className="relative text-[0.875rem] inline-block text-right min-w-[7.375rem]">
                        Busniess Class
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start p-[1.5rem] gap-[2rem] text-[0.875rem] text-gray-1300 font-montserrat-medium-14 mq750:flex-wrap mq750:gap-[1rem]">
                    <div className="w-[8rem] flex flex-row items-start justify-start gap-[0.5rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative rounded min-h-[2rem]"
                        loading="lazy"
                        alt=""
                        src="/frame-2608694.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="self-stretch relative font-semibold">
                          Date
                        </div>
                        <div className="relative text-[0.75rem] font-medium text-blackish-green inline-block min-w-[5.5rem]">
                          Newark(EWR)
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.75rem] flex flex-row items-start justify-start gap-[0.5rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative rounded min-h-[2rem]"
                        loading="lazy"
                        alt=""
                        src="/frame-2608697.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="relative font-semibold inline-block min-w-[5.25rem]">
                          Flight time
                        </div>
                        <div className="self-stretch relative text-[0.75rem] font-medium text-blackish-green whitespace-nowrap">
                          12:00
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.375rem] flex flex-row items-center justify-start gap-[0.5rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative rounded min-h-[2rem]"
                        loading="lazy"
                        alt=""
                        src="/frame-2608695.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="self-stretch relative font-semibold">
                          Gate
                        </div>
                        <div className="self-stretch relative text-[0.75rem] font-medium text-blackish-green">
                          A12
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem] min-w-[3.875rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative rounded min-h-[2rem]"
                        loading="lazy"
                        alt=""
                        src="/frame-2608698.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="self-stretch relative font-semibold">
                          Seat
                        </div>
                        <div className="self-stretch relative text-[0.75rem] font-medium text-blackish-green">
                          128
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[36.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[2rem] font-montserrat-medium-14 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[2.813rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                      EK
                    </h1>
                    <div className="relative text-[0.75rem] font-medium text-gray-1300 inline-block min-w-[3.75rem]">
                      ABC12345
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.718rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-row items-start justify-start p-[1rem]">
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        loading="lazy"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                      <img
                        className="self-stretch w-[1.5rem] relative max-h-full min-h-[3.063rem]"
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23.438rem] rounded-2xl bg-neutrals box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[1.812rem] px-[0rem] min-w-[23.438rem] max-w-full text-left text-[0.5rem] font-tradegothic-bold-16 border-[1px] border-solid border-whitesmoke mq450:min-w-full mq1050:flex-1">
              <div className="ml-[-1.063rem] w-[25.563rem] flex flex-col items-end justify-start pt-[1.25rem] pb-[1.343rem] pr-[2.437rem] pl-[2.187rem] box-border relative gap-[0.181rem] shrink-0 max-w-[110%]">
                <img
                  className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-3@2x.png"
                />
                <div className="w-[5.813rem] h-[2.188rem] relative shadow-[0px_2px_7px_rgba(17,_34,_17,_0.06)] z-[1]">
                  <div className="absolute top-[0rem] left-[0rem] rounded bg-neutrals w-full flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.5rem]">
                    <img
                      className="h-[1.5rem] w-[1.5rem] relative rounded-sm object-cover"
                      alt=""
                      src="/name-background@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem]">
                      <div className="flex flex-col items-start justify-start">
                        <b className="relative inline-block min-w-[3.063rem]">
                          James Doe
                        </b>
                        <div className="relative text-[0.25rem] font-montserrat-medium-14 inline-block min-w-[2.563rem]">
                          Boarding Pass N’123
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[1.813rem] left-[3.625rem] rounded-12xs-7 w-[1rem] h-[0.5rem] z-[1]"
                    alt=""
                    src="/polygon-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.812rem] pl-[0rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.65rem]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.062rem]">
                      <div className="h-[7.669rem] flex-1 relative">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
                          alt=""
                          src="/vector-6.svg"
                        />
                        <img
                          className="absolute top-[0.581rem] left-[0rem] w-[17.025rem] h-[7.081rem] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/vector-7.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[5.813rem] h-[2.188rem] relative shadow-[0px_2px_7px_rgba(17,_34,_17,_0.06)] z-[1]">
                      <div className="absolute top-[0.188rem] left-[0rem] rounded bg-neutrals w-full flex flex-row items-start justify-start p-[0.25rem] box-border gap-[0.5rem]">
                        <img
                          className="h-[1.5rem] w-[1.5rem] relative rounded-sm object-cover"
                          alt=""
                          src="/name-background@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative inline-block min-w-[3.063rem]">
                              James Doe
                            </b>
                            <div className="relative text-[0.25rem] font-montserrat-medium-14 inline-block min-w-[2.563rem]">
                              Boarding Pass N’123
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="absolute top-[-0.125rem] left-[1.813rem] rounded-12xs-7 w-[0.75rem] h-[0.5rem] z-[1]"
                        alt=""
                        src="/polygon-1-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.125rem] text-[1.5rem] mq750:gap-[1.063rem]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[1.188rem]">
              Terms and Conditions
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[0.875rem]">
            <div className="self-stretch flex flex-row items-start justify-start text-[1.25rem]">
              <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[6.438rem] mq450:text-[1rem]">
                Payments
              </h3>
            </div>
            <div className="self-stretch relative leading-[1.25rem]">
              <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                <li>{`If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. `}</li>
              </ul>
            </div>
            <div className="self-stretch relative leading-[1.25rem]">
              <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                <li>
                  If you do not supply the correct card billing address and/or
                  cardholder information, your booking will not be confirmed and
                  the overall cost may increase. We reserve the right to cancel
                  your booking if payment is declined for any reason or if you
                  have supplied incorrect card information. If we become aware
                  of, or is notified of, any fraud or illegal activity
                  associated with the payment for the booking, the booking will
                  be cancelled and you will be liable for all costs and expenses
                  arising from such cancellation, without prejudice to any
                  action that may be taken against us.
                </li>
              </ul>
            </div>
            <div className="self-stretch relative leading-[1.25rem]">
              <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                <li>
                  Golobe may require the card holder to provide additional
                  payment verification upon request by either submitting an
                  online form or visiting the nearest Golobe office, or at the
                  airport at the time of check-in. Golobe reserves the right to
                  deny boarding or to collect a guarantee payment (in cash or
                  from another credit card) if the card originally used for the
                  purchase cannot be presented by the cardholder at check-in or
                  when collecting the tickets, or in the case the original
                  payment has been withheld or disputed by the card issuing
                  bank. Credit card details are held in a secured environment
                  and transferred through an internationally accepted system.
                </li>
              </ul>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1.25rem]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[7rem] mq450:text-[1rem]">
                Contact Us
              </h3>
            </div>
            <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] inline-block min-h-[8.75rem]">
              <p className="m-0">
                If you have any questions about our Website or our Terms of Use,
                please contact:
              </p>
              <p className="m-0">Golobe Group Q.C.S.C</p>
              <p className="m-0">Golobe Tower</p>
              <p className="m-0">P.O. Box: 22550</p>
              <p className="m-0">Doha, State of Qatar</p>
              <p className="m-0">
                {`Further contact details can be found at `}
                <span className="[text-decoration:underline]">
                  golobe.com/help
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
