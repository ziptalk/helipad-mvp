const deviceSizes = {
  maxOnNotebookL: "2199px",
  notebookS: "1024px",
};
const mediaQueryOnDevice = {
  notebookL: "only screen and (min-width: 2200px) and (max-width: 2844px)",
  notebookM: "only screen and (min-width: 1483px) and (max-width: 1904px)",
  notebookS: "only screen and (min-width: 1020px) and (max-width: 1482px)",
};
const colors = {
  beige: "#F2F2F2",
  black: "#000000",
  white: "#FFFFFF",
};
const imageSize = {
  large: {
    width: "100%",
  },
};
const theme = {
  mediaQueryOnDevice,
  colors,
  imageSize,
};
export default theme;
