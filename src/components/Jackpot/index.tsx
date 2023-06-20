import React from "react";

import { Text } from "components";

type JackpotProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Jackpot: React.FC<JackpotProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start pt-[840px] w-auto md:w-full">
          <Text
            className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px] w-auto"
            size="txtRobotoBold56"
          >
            2
          </Text>
        </div>
      </div>
    </>
  );
};

Jackpot.defaultProps = {};

export default Jackpot;
