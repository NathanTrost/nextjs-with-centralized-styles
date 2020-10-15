import CSSReset from "@chakra-ui/core/dist/CSSReset";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
