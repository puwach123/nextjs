import React from "react";

import { Paper, Typography, Grid, Box } from "@material-ui/core";

import Centerized from "components/layouts/Centerized";
import Link from "components/routes/Link";
import RegisterForm from "components/forms/RegisterForm";
import Copyright from "components/gadgets/Copyright";

function Register() {
  return (
    <Centerized component={Paper} variant="outlined">
      <Typography
        variant="h4"
        component="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Register
      </Typography>
      <RegisterForm />
      <Grid container>
        <Grid item xs></Grid>
        <Grid>
          <Link href="/login" variant="body2">
            {"Already have an account? Log in"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Centerized>
  );
}

export default Register;
