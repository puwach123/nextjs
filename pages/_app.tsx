import React from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { SvcStoreProvider } from "context/svcstore";

import theme from "theme/theme";
import mock from "svcstore/mock";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NextJS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SvcStoreProvider svcstore={mock}>
          <Component {...pageProps} />
        </SvcStoreProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
