import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center p-[23px] sm:px-5 w-full">
          <div className="header-row ">
            <Img
              className="h-[50px]"
              src="images/img_footercolumn.svg"
              alt="footercolumn"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 sm:hidden items-start justify-start md:ml-[0] ml-[308px] py-[7px] w-auto">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-orange-A700 text-sm uppercase"
                size="txtRobotoRegular14OrangeA700"
              >
                Live
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Prematch
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Esports
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Casino
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Live Casino
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Tournaments
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-center text-sm text-white-A700 uppercase"
                size="txtRobotoRegular14WhiteA700"
              >
                Virtual Sports
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[16.28px] sm:hidden items-center justify-start md:ml-[0] ml-[248px] md:pl-10 sm:pl-5 pl-[185.02px] w-auto">
            <Text
              className="text-blue_gray-100 text-center text-sm w-auto"
              size="txtRobotoRegular14"
            >
              Sign In
            </Text>
            <Button className="bg-orange-A700 border border-orange-A700 border-solid cursor-pointer font-roboto min-w-[65px] py-[5px] rounded text-center text-sm text-white-A700">
              Sign Up
            </Button>
          </div>
          <Img
            className="h-9 sm:hidden md:ml-[0] ml-[53px] rounded w-[73px]"
            src="images/img_videocamera.svg"
            alt="videocamera"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
