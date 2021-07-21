const deviceSizes = {
  maxOnNotebookL: "2199px",
  notebookS: "1024px",
};
const mediaQueryOnDevice = {
  notebookL: "only screen and (min-width: 2200px) and (max-width: 2844px)",
  notebookM: "only screen and (min-width: 1792px) and (max-width: 2199px)",
  notebookS: "only screen and (min-width: 1024px) and (max-width: 1791px)",
};
const colors = {
  beige: "#F2F2F2",
  black: "#000000",
  white: "#FFFFFF",
};
const theme = {
  mediaQueryOnDevice,
  colors,
};
export default theme;
