const colors = {
  blues: ["#07c", "#004170", "#006fbe", "#2d8fd5", "#5aa7de"],
  primary: "red",
  lightgray: "#f6f6ff",
  primaryblue: "#0092ff",
  secondary: "tomato",
  fart: "yellow",
  gray: "#eee",
};

// example theme.js
export default {
  breakpoints: ["480px", "768px", "1024px", "1200"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors,
  background: { colors },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  padding: [0, 4, 8, 16, 32],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
};
