export const StyleClasses = {
  foo: (props) => ({
    backgroundColor: props.backgroundColor,
    padding: props.padding,
    borderRadius: props.borderRadius,
  }),
  mainTypo: {
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
    fontWeight: (props) => props.fontWeight,
  },
  pricesBox: {
    display: (props) => props.display,
    alignItems: (props) => props.alignItems,
    paddingInline: (props) => props.paddingInline,
    marginBlock: (props) => props.marginBlock,
    backgroundColor: (props) => props.backgroundColor,
  },
  hr: {
    display: (props) => props.display,
    marginBlock: (props) => props.marginBlock,
  },
  marginT: (props) => props.marginTop,
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
  ListStyle: (props) => ({
    color: props.color,
    backgroundColor: props.backgroundColor,
    width: props.width,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    paddingTop: props.paddingTop,
  }),
  itemStyles: {
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
  },
  priceTextField: (props) => ({
    borderWidth: props.borderWidth,
    borderStyle: props.borderStyle,
    borderColor: props.borderColor,
    borderRadius: props.borderRadius,
    "& .MuiInputBase-sizeSmall": {
      backgroundColor: "white !important",
    },
    "& :before": {
      display: "none",
    },
  }),
};
