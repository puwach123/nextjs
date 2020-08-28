export type BreakPoint = {
  name: string;
  summary: string;
  minWidth: number;
  range: { from: number; to: number };
};

export const XXS: Readonly<BreakPoint> = Object.freeze({
  name: "xs",
  summary: "extra-small",
  minWidth: 0,
  range: { from: 0, to: 300 },
});

export const XS: Readonly<BreakPoint> = Object.freeze({
  name: "xs",
  summary: "extra-small",
  minWidth: 300,
  range: { from: 301, to: 600 },
});

export const SM: Readonly<BreakPoint> = Object.freeze({
  name: "sm",
  summary: "small",
  minWidth: 600,
  range: { from: 601, to: 960 },
});

export const MD: Readonly<BreakPoint> = Object.freeze({
  name: "md",
  summary: "medium",
  minWidth: 960,
  range: { from: 960, to: 1280 },
});

export const LG: Readonly<BreakPoint> = Object.freeze({
  name: "lg",
  summary: "large",
  minWidth: 1280,
  range: { from: 1281, to: 1980 },
});

export const XL: Readonly<BreakPoint> = Object.freeze({
  name: "xl",
  summary: "extra-large",
  minWidth: 1920,
  range: { from: 1981, to: 999999 },
});

export default Object.freeze({ XXS, XS, SM, MD, LG, XL });
