import CSSReset from "@chakra-ui/core/dist/CSSReset";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import theme from "../theme";

// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
