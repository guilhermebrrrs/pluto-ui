import { extendTheme } from "@chakra-ui/react";

const definitions = {
  alignItems: {
    baseline: "baseline",
    center: "center",
    end: "end",
    firstBaseline: "first baseline",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    lastBaseline: "last baseline",
    normal: "normal",
    safe: "safe",
    selfEnd: "self-end",
    selfStart: "self-start",
    start: "start",
    stretch: "stretch",
    unsafe: "unsafe",
  },
  fontFamily: {
    default: "Lato",
  },
  fontSize: {
    smallest: "8px",
    smaller: "12px",
    small: "16px",
    default: "20px",
    big: "24px",
    bigger: "32px",
    biggest: "48px",
  },
  fontWeight: {
    bold: "bold",
    bolder: "bolder",
    fontWeight100: "100",
    fontWeight200: "200",
    fontWeight300: "300",
    fontWeight400: "400",
    fontWeight500: "500",
    fontWeight600: "600",
    fontWeight700: "700",
    fontWeight800: "800",
    fontWeight900: "900",
    lighter: "lighter",
    inherit: "inherit",
    initial: "initial",
    normal: "normal",
  },
  justifyContent: {
    center: "center",
    end: "end",
    flexEnd: "flex-end",
    flexStart: "flex-start",
    inherit: "inherit",
    initial: "initial",
    left: "left",
    normal: "normal",
    revert: "revert",
    right: "right",
    safeCenter: "safe center",
    spaceAround: "space-around",
    spaceBetween: "space-between",
    spaceEvenly: "space-evenly",
    start: "start",
    stretch: "stretch",
    unsafeCenter: "unsafe center",
    unset: "unset",
  },
  spacing: {
    nano: "2px",
    micro: "4px",
    smallest: "8px",
    smaller: "12px",
    small: "16px",
    default: "20px",
    large: "24px",
    larger: "32px",
    largest: "48px",
  },
  theme: extendTheme({
    fonts: {
      body: "Lato",
      headings: "Lato",
    },
  }),
};

export { definitions };
