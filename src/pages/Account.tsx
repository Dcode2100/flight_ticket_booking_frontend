import { FunctionComponent } from "react";
import AccountSummary from "../components/AccountSummary";
import Footer2 from "../components/Footer2";

const Account: FunctionComponent = () => {
  return (
    <div className="w-full h-[130.813rem] relative bg-gray-100 overflow-hidden leading-[normal] tracking-[normal] mq450:h-auto mq450:min-h-[2093]">
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
      <section className="absolute top-[25.688rem] left-[6.5rem] w-[77rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-left text-[1rem] text-blackish-green font-montserrat-medium-14">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full">
          <AccountSummary propHeight="15.313rem" />
          <div className="h-[5rem] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-xl bg-neutrals overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[1rem] px-[1.125rem] box-border gap-[1.456rem] max-w-full mq450:h-auto">
            <div className="w-[24.606rem] shrink-0 flex flex-row flex-wrap items-start justify-start gap-[1.5rem] max-w-[calc(100%_-_796px)]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border min-w-[15rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.375rem] box-border max-w-full">
                    <div className="flex-1 relative font-semibold inline-block max-w-full">
                      Account
                    </div>
                  </div>
                  <div className="w-[13.688rem] h-[0.25rem] relative box-border border-t-[4px] border-solid border-mint-green" />
                </div>
              </div>
              <div className="h-[3.063rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lavender mq450:w-full mq450:h-[0.063rem]" />
            </div>
            <div className="w-[22.669rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative font-semibold">History</div>
            </div>
            <div className="h-[3.063rem] w-[0.063rem] relative box-border shrink-0 border-r-[1px] border-solid border-lavender" />
            <div className="w-[22.669rem] shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative font-semibold">
                Payment methods
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[2rem] text-black font-tradegothic-bold-16">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Account
          </h1>
          <div className="self-stretch shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] rounded-2xl bg-neutrals flex flex-col items-start justify-start py-[2rem] px-[1.5rem] box-border gap-[2rem] max-w-full text-[1rem] text-gray-400 font-montserrat-medium-14">
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[3.125rem]">
                  Name
                </div>
                <h3 className="m-0 relative text-[1.25rem] font-semibold font-inherit text-blackish-green inline-block min-w-[6.188rem] mq450:text-[1rem]">
                  John Doe
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                  <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                  <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                    Change
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[2.875rem]">
                  Email
                </div>
                <h3 className="m-0 relative text-[1.25rem] font-semibold font-inherit text-blackish-green whitespace-nowrap mq450:text-[1rem]">
                  john.doe@gmail.com
                </h3>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                  <button className="cursor-pointer py-[0.875rem] px-[0.937rem] bg-[transparent] rounded flex flex-row items-center justify-center gap-[0.25rem] whitespace-nowrap border-[1px] border-solid border-mint-green hover:bg-lightseagreen-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightseagreen-100">
                    <img
                      className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/add-circle1.svg"
                    />
                    <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left">
                      Add another email
                    </div>
                  </button>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                  <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                    <img
                      className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit.svg"
                    />
                    <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                      Change
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[4.875rem]">
                  Password
                </div>
                <h3 className="m-0 relative text-[1.25rem] font-semibold font-inherit text-blackish-green inline-block min-w-[6.563rem] mq450:text-[1rem]">
                  ************
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                  <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                  <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                    Change
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[7.688rem]">
                  Phone number
                </div>
                <div className="relative text-[1.25rem] font-semibold text-blackish-green whitespace-nowrap mq450:text-[1rem]">
                  +1 000-000-0000
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                  <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                  <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                    Change
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                <div className="relative inline-block min-w-[4.063rem]">
                  Address
                </div>
                <h3 className="m-0 relative text-[1.25rem] font-semibold font-inherit text-blackish-green mq450:text-[1rem]">
                  St 32 main downtown, Los Angeles, California, USA
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                  <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                  <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                    Change
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative inline-block min-w-[6.375rem]">
                  Date of birth
                </div>
                <div className="relative text-[1.25rem] font-semibold text-blackish-green inline-block min-w-[6.375rem] mq450:text-[1rem]">
                  01-01-1992
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="rounded flex flex-row items-center justify-center py-[0.875rem] px-[1.937rem] gap-[0.25rem] border-[1px] border-solid border-mint-green">
                  <img
                    className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                  <div className="relative text-[0.875rem] font-medium font-montserrat-medium-14 text-blackish-green text-left inline-block min-w-[3.5rem]">
                    Change
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Account;
