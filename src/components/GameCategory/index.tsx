import React from "react";

import { Img, Text } from "components";

type GameCategoryProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const GameCategory: React.FC<GameCategoryProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="relative w-full">
          <Img
            className="h-10 my-auto w-10"
            src="images/img_google.svg"
            alt="google"
          />
          <div className="absolute right-[0] top-[0] w-[61%]">
            <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
            <Text
              className="mx-auto relative text-[11px] text-black-900 text-right"
              size="txtRobotoRegular11Black900"
            >
              225
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pl-2 pr-[7.94px] pt-2 w-auto">
          <Text
            className="text-blue_gray-100 text-center text-xs w-auto"
            size="txtRobotoRegular12"
          >
            New
          </Text>
        </div>
      </div>
    </>
  );
};

GameCategory.defaultProps = {};

export default GameCategory;
