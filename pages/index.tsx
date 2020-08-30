import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useTheme, Theme } from "@material-ui/core/styles";

import Link from "components/routes/Link";
import Copyright from "components/gadgets/Copyright";
import Centerized from "components/layouts/Centerized";

export default function Index() {
  const theme: Theme = useTheme();

  return (
    <Centerized>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js Example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <Box height={theme.spacing(3)} />
      <Copyright />
    </Centerized>
  );
}
