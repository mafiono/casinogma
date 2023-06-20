import React from "react";

import { Img, Text } from "components";

type HomeFooterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "livelink"
  | "prematchlink"
  | "esportslink"
  | "virtualsportslink"
  | "casinolink"
  | "livecasinolink"
  | "tournamentslink"
  | "aboutuslink"
  | "termsandconditionslink"
  | "privacypolicylink"
  | "contactuslink"
  | "footermoduleFour"
  | "footermoduleFive"
  | "footermoduleSix"
> &
  Partial<{
    livelink: string;
    prematchlink: string;
    esportslink: string;
    virtualsportslink: string;
    casinolink: string;
    livecasinolink: string;
    tournamentslink: string;
    aboutuslink: string;
    termsandconditionslink: string;
    privacypolicylink: string;
    contactuslink: string;
    footermoduleFour: string;
    footermoduleFive: string;
    footermoduleSix: string;
  }>;

const HomeFooter: React.FC<HomeFooterProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient  flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
            <Img
              className="h-[37px] md:h-auto object-cover w-full"
              src="images/img_364partnerspng.png"
              alt="364partnerspng"
            />
          </div>
        </div>
        <div className="bg-gray-900_01 flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end sm:pl-5 pl-[30px] py-[30px] w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-3.5 w-auto">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[59.17px] w-auto">
                <Text
                  className="capitalize text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.livelink}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[24.17px] w-auto">
                <Text
                  className="capitalize text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.prematchlink}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[37.17px] w-auto">
                <Text
                  className="capitalize text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.esportslink}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="capitalize text-sm text-white-A700"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.virtualsportslink}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[204px] md:mt-0 mt-3.5 w-auto">
              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[38.67px] w-auto">
                <Text
                  className="capitalize text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.casinolink}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pr-[10.67px] w-auto">
                <Text
                  className="capitalize text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.livecasinolink}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="capitalize text-sm text-white-A700"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.tournamentslink}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[237px] md:mt-0 mt-[13px] w-auto">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[78.5px] w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.aboutuslink}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.termsandconditionslink}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[49.5px] w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.privacypolicylink}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[67.5px] w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtRobotoRegular14WhiteA700"
                >
                  {props?.contactuslink}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[823px] p-1 w-[17%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-200 text-right"
                size="txtRobotoBold50"
              >
                {props?.footermoduleFour}
              </Text>
              <Text
                className="mr-[25px] mt-1.5 text-base text-gray-200 text-right"
                size="txtRobotoRegular16Gray200"
              >
                {props?.footermoduleFive}
              </Text>
              <Text
                className="mt-7 text-base text-gray-200 text-right"
                size="txtRobotoBold16Gray200"
              >
                {props?.footermoduleSix}
              </Text>
              <Img
                className="h-8 mb-[9px] mt-[15px] w-[116px]"
                src="images/img_footermodule.svg"
                alt="footermodule_Seven"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeFooter.defaultProps = {
  livelink: "Live",
  prematchlink: "Prematch",
  esportslink: "Esports",
  virtualsportslink: "Virtual Sports",
  casinolink: "Casino",
  livecasinolink: "Live Casino",
  tournamentslink: "Tournaments",
  aboutuslink: "About Us",
  termsandconditionslink: "Terms and Conditions",
  privacypolicylink: "Privacy Policy",
  contactuslink: "Contact Us",
  footermoduleFour: "18+",
  footermoduleFive: "© 2022 Betboard",
  footermoduleSix: "Follow us",
};

export default HomeFooter;
