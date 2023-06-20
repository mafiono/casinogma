import React from "react";

const sizeClasses = {
  txtRobotoBold16Gray200: "font-bold font-roboto",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoBold2133WhiteA70066: "font-bold font-roboto",
  txtRobotoBold12Gray600: "font-bold font-roboto",
  txtRobotoRegular14WhiteA700: "font-normal font-roboto",
  txtRobotoRegular11Black900: "font-normal font-roboto",
  txtRobotoBold12Bluegray100: "font-bold font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoBold2133: "font-bold font-roboto",
  txtRobotoRegular16Gray90003: "font-normal font-roboto",
  txtRobotoBold12WhiteA700: "font-bold font-roboto",
  txtRobotoBold14OrangeA700: "font-bold font-roboto",
  txtRobotoRegular12WhiteA700: "font-normal font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoRegular14OrangeA700: "font-normal font-roboto",
  txtRobotoBold16OrangeA700: "font-bold font-roboto",
  txtRobotoBold24Bluegray100: "font-bold font-roboto",
  txtRobotoRegular12OrangeA700: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoBold50: "font-bold font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular16Gray200: "font-normal font-roboto",
  txtRobotoRegular14Gray80002: "font-normal font-roboto",
  txtMontserratBold96: "font-bold font-montserrat",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoRegular2843: "font-normal font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoBold11: "font-bold font-roboto",
  txtRobotoBold2843: "font-bold font-roboto",
  txtRobotoBold12: "font-bold font-roboto",
  txtRobotoBold56: "font-bold font-roboto",
  txtRobotoRegular10: "font-normal font-roboto",
  txtRobotoLight12: "font-light font-roboto",
  txtRobotoRegular11: "font-normal font-roboto",
  txtRobotoBold16WhiteA700: "font-bold font-roboto",
  txtRobotoBold10: "font-bold font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
