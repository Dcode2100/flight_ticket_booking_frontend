import { FunctionComponent } from "react";

const SignUpAddAPaymentMethod: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutrals overflow-hidden flex flex-row items-start justify-start p-[6.5rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-center text-[2.25rem] text-neutrals font-tradegothic-bold-16 mq750:gap-[3.25rem] mq750:pl-[3.25rem] mq750:pr-[3.25rem] mq750:box-border mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1125:flex-wrap">
      <div className="h-[51rem] w-[30.5rem] flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border relative min-w-[30.5rem] max-w-full mq750:min-w-full mq1125:flex-1">
        <img
          className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-11xl max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-20@2x.png"
        />
        <div className="flex-1 rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] flex flex-row items-start justify-center py-[1.5rem] px-[1.25rem] box-border max-w-full z-[1]">
          <div className="h-[3.625rem] w-[30.4rem] relative rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0))] hidden max-w-full" />
          <div className="w-[3.356rem] flex flex-row items-start justify-start gap-[0.5rem] z-[2]">
            <div className="h-[0.625rem] w-[2rem] relative rounded-8xs bg-mint-green shrink-0" />
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals shrink-0" />
            <div className="h-[0.625rem] w-[0.625rem] relative rounded-[50%] bg-neutrals shrink-0" />
          </div>
        </div>
      </div>
      <b className="w-[21.063rem] relative hidden shrink-0 max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
        Make your travel whishlist, we’ll do the rest
      </b>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4rem] min-w-[26rem] max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 mq750:gap-[2rem] mq750:min-w-full mq450:gap-[1rem]">
        <img
          className="w-[6.9rem] h-[2.25rem] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/logo8@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full mq750:gap-[1.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevron-back.svg"
              />
              <div className="relative font-medium inline-block min-w-[2.25rem]">
                Back
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1rem] max-w-full text-[2.5rem] text-black font-tradegothic-bold-16">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.5rem] mq1050:text-[2rem]">
                Add a payment method
              </h1>
              <div className="relative text-[1rem] font-montserrat-medium-14 text-gray-400 inline-block max-w-full">
                Let’s get you all st up so you can access your personal account.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-gray-300 mq750:gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full text-blackish-green">
                <div className="self-stretch rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] px-[0rem] box-border relative min-w-[23.375rem] min-h-[2.5rem] max-w-full mq750:min-w-full">
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
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] mq750:flex-wrap">
                <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
                  <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
                    <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[13.812rem] pl-[0rem] relative mq450:pr-[1.25rem] mq450:box-border">
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
                <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start min-w-[12.5rem]">
                  <div className="self-stretch h-[3.5rem] rounded bg-neutrals box-border flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
                    <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem]">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[16.125rem] pl-[0rem] relative mq450:pr-[1.25rem] mq450:box-border">
                        <input
                          className="w-[1.5rem] [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex flex-row items-center justify-start font-montserrat-medium-14 text-[1rem] text-gray-300"
                          placeholder="123"
                          type="text"
                        />
                        <div className="!m-[0] absolute top-[-1rem] left-[-0.25rem] bg-neutrals flex flex-row items-center justify-start py-[0rem] px-[0.25rem]">
                          <div className="relative inline-block min-w-[1.875rem]">
                            CVC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[13.125rem] hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border">
                    <div className="flex-1 relative">Supporting text</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[3.5rem] rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex-1 rounded bg-neutrals box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gray-200">
                  <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.5rem] pr-[0rem] pl-[1rem] box-border max-w-full">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[32.375rem] pl-[0rem] box-border relative max-w-full mq750:pr-[16.188rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border">
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
                  <div className="self-stretch rounded-t rounded-b-none flex flex-row items-center justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-center pt-[0rem] pb-[0.625rem] pr-[27.687rem] pl-[0rem] box-border relative min-w-[23.375rem] min-h-[2.5rem] max-w-full mq750:pr-[13.813rem] mq750:box-border mq750:min-w-full mq450:pr-[1.25rem] mq450:box-border">
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
            <div className="self-stretch flex flex-col items-center justify-start gap-[1rem] max-w-full text-center text-[0.75rem] text-gray-400">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded bg-mint-green flex flex-row items-center justify-center py-[0.968rem] px-[1.25rem]">
                  <div className="relative text-[0.875rem] font-semibold font-montserrat-medium-14 text-blackish-green text-left">
                    Add payment method
                  </div>
                </div>
              </button>
              <div className="w-[33.25rem] relative inline-block max-w-full">
                By confirming your subscription, you allow The Outdoor Inn Crowd
                Limited to charge your card for this payment and future payments
                in accordance with their terms. You can always cancel your
                subscription.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAddAPaymentMethod;
