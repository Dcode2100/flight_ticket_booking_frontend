import { FunctionComponent } from "react";
import AccountSummary from "../components/AccountSummary";
import NewCard from "../components/NewCard";
import Footer2 from "../components/Footer2";

const AccountPaymentMethods1: FunctionComponent = () => {
  return (
    <div className="w-full h-[113.563rem] relative bg-gray-100 overflow-hidden leading-[normal] tracking-[normal] mq1050:h-auto mq1050:min-h-[1817]">
      <img
        className="absolute top-[8.438rem] left-[6.5rem] rounded-xl w-[77rem] h-[21.875rem] object-cover"
        alt=""
        src="/rectangle-34@2x.png"
      />
      <header className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-neutrals w-full flex flex-row items-end justify-center pt-[1.312rem] px-[1.25rem] pb-[0rem] box-border gap-[20.725rem] max-w-full text-left text-[0.875rem] text-blackish-green font-montserrat-medium-14 lg:gap-[10.375rem] mq750:gap-[5.188rem] mq450:gap-[2.563rem]">
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
              src="/logo6@2x.png"
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
            <div className="flex flex-row items-start justify-start pt-[0.875rem] pb-[0rem] pr-[0rem] pl-[1.937rem] relative gap-[0.25rem]">
              <div className="!m-[0] absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start">
                <img
                  className="h-[2.813rem] w-[2.813rem] relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="h-[0.625rem] w-[0.625rem] absolute !m-[0] right-[0.125rem] bottom-[0.125rem] rounded-[50%] bg-blackish-green z-[1]" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.875rem] h-[0.875rem] relative overflow-hidden shrink-0 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/arrow-down@2x.png"
                />
              </div>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3.438rem] whitespace-nowrap">
                John D.
              </a>
            </div>
          </div>
          <div className="w-[6.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
            <div className="h-[0.313rem] flex-1 relative bg-mint-green opacity-[0]" />
          </div>
        </div>
      </header>
      <section className="absolute top-[25.688rem] left-[6.5rem] w-[77rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-left text-[1rem] text-blackish-green font-montserrat-medium-14">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full">
          <AccountSummary propHeight="15.313rem" />
          <div className="shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-x-auto flex flex-row items-start justify-start py-[1rem] px-[1.5rem] gap-[1.462rem]">
            <div className="w-[22.669rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative font-semibold">Account</div>
            </div>
            <div className="h-[3.063rem] w-[0.063rem] relative box-border shrink-0 border-r-[1px] border-solid border-lavender" />
            <div className="w-[22.669rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative font-semibold">History</div>
            </div>
            <div className="h-[3.063rem] w-[0.063rem] relative box-border shrink-0 border-r-[1px] border-solid border-lavender" />
            <div className="h-[3rem] w-[22.688rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] shrink-0">
                <div className="self-stretch relative font-semibold">
                  Payment methods
                </div>
                <div className="self-stretch h-[0.25rem] relative box-border border-t-[4px] border-solid border-mint-green" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[2rem] text-black font-tradegothic-bold-16">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Payment methods
          </h1>
          <div className="self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-3xl bg-neutrals flex flex-row items-start justify-start py-[1.5rem] pr-[26.75rem] pl-[1.5rem] box-border gap-[1.5rem] max-w-full text-[0.75rem] text-blackish-green font-montserrat-medium-14 mq1050:flex-wrap">
            <div className="flex-1 rounded-2xl bg-mint-green flex flex-col items-start justify-start p-[1rem] box-border gap-[3.562rem] min-w-[15.375rem] max-w-full mq1050:flex-1">
              <NewCard />
              <div className="self-stretch flex flex-row items-center justify-start pt-[0.706rem] px-[0rem] pb-[0.7rem] gap-[1rem] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[11.313rem]">
                  <div className="relative font-medium inline-block min-w-[3.875rem]">
                    Valid Thru
                  </div>
                  <div className="relative text-[1.25rem] font-semibold inline-block min-w-[3.563rem] mq450:text-[1rem]">
                    02/27
                  </div>
                </div>
                <img
                  className="h-[2.031rem] w-[3.238rem] relative"
                  loading="lazy"
                  alt=""
                  src="/validity-icon.svg"
                />
              </div>
            </div>
            <div className="flex-[0.9653] rounded-2xl box-border flex flex-col items-center justify-center py-[3.687rem] px-[1.25rem] gap-[0.625rem] min-w-[15.375rem] max-w-full text-gray-400 border-[2px] border-dashed border-mint-green mq1050:flex-1">
              <img
                className="w-[4rem] h-[4rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/add-circle.svg"
              />
              <div className="relative font-medium inline-block min-w-[6rem]">
                Add a new card
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default AccountPaymentMethods1;
