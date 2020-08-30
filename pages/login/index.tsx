import React from "react";

import {
  Typography,
  makeStyles,
  Paper,
  Theme,
  Grid,
  Box,
} from "@material-ui/core";

import Copyright from "components/gadgets/Copyright";
import LoginForm from "components/forms/LoginForm";
import Centerized from "components/layouts/Centerized";
import Link from "components/routes/Link";

import { GlobalSvcStore } from "types/svcstore";
import { useSvcStore } from "context/svcstore";
import useLocalStorage from "hooks/useLocalstorage";
import { JWT } from "types/auth";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

export default function Login() {
  const classes = useStyles();

  return (
    <Centerized component={Paper} variant="outlined">
      <Typography
        variant="h4"
        component="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Login
      </Typography>
      <LoginForm />
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Centerized>
  );
}
