import React from "react";

import { Img } from "components";

type CasinoSlotsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const CasinoSlots: React.FC<CasinoSlotsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-[199px] sm:h-auto object-cover w-full"
            src="images/img_430d6827312275c.png"
            alt="430d6827312275c"
          />
        </div>
      </div>
    </>
  );
};

CasinoSlots.defaultProps = {};

export default CasinoSlots;
