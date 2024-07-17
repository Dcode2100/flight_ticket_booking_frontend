import { FunctionComponent } from "react";

export type FooterBottomType = {
  className?: string;
  logo?: string;
};

const FooterBottom: FunctionComponent<FooterBottomType> = ({
  className = "",
  logo,
}) => {
  return (
    <div
      className={`w-[77rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[1rem] text-blackish-green font-tradegothic-bold-16 mq1225:flex-wrap ${className}`}
    >
      <div className="w-[7.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
        <img
          className="self-stretch h-[2.444rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={logo}
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
          <b className="w-[9.313rem] relative inline-block">Our Destinations</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
            <div className="self-stretch relative font-medium">Canada</div>
            <div className="self-stretch relative font-medium">Alaksa</div>
            <div className="self-stretch relative font-medium">France</div>
            <div className="self-stretch relative font-medium">Iceland</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
          <b className="w-[7.625rem] relative inline-block">Our Activities</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
            <div className="self-stretch relative font-medium">
              Northern Lights
            </div>
            <div className="self-stretch relative font-medium">{`Cruising & sailing`}</div>
            <div className="self-stretch relative font-medium">
              Multi-activities
            </div>
            <div className="self-stretch relative font-medium">Kayaing</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
          <b className="w-[6.875rem] relative inline-block">Travel Blogs</b>
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
          <b className="w-[5.313rem] relative inline-block">About Us</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
            <div className="self-stretch relative font-medium">Our Story</div>
            <div className="self-stretch relative font-medium">
              Work with us
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[10.75rem] max-w-[10.938rem]">
          <b className="w-[6.375rem] relative inline-block">Contact Us</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem] text-gray-800 font-montserrat-medium-14">
            <div className="self-stretch relative font-medium">Our Story</div>
            <div className="self-stretch relative font-medium">
              Work with us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
