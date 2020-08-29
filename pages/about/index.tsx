import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { makeStyles, Theme } from "@material-ui/core/styles";

import Link from "components/routes/Link";
import Copyright from "components/gadgets/Copyright";

const useStyles = makeStyles((theme: Theme) => ({}));

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <Box height={24} />
        <Copyright />
      </Box>
    </Container>
  );
}
