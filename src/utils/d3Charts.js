import * as d3 from "d3";

export const getResponsiveSvgDims = (
  parentRef,
  paddingEm = 2.5,
  aspectRatio = 16 / 9
) => {
  const width =
    parseInt(d3.select(parentRef.current).style("width"), 10) - paddingEm * 16;
  const height = Math.floor(width / aspectRatio);

  return [width, height];
};
