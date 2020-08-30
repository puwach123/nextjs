import React from "react";

import { makeStyles, Button, Theme, LinearProgress } from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
  };
});

interface LoginValues {
  name: string;
  pw: string;
}

const initialLoginValues = {
  name: "",
  pw: "",
};

interface LoginFormProps {
  handleSumit?: (values: LoginValues) => void;
}

function LoginForm(props: LoginFormProps) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialLoginValues}
      validate={(values) => {
        const errors: Partial<LoginValues> = {};
        if (!values.name) errors.name = "Required";
        if (!values.pw) errors.pw = "Required";
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {}}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ submitForm, isSubmitting, errors }) => (
        <Form>
          <Field
            component={TextField}
            margin="normal"
            variant="outlined"
            required
            id="name"
            label="Username"
            name="name"
            autoComplete="namepw"
            fullWidth
          />
          <Field
            component={TextField}
            type="password"
            margin="normal"
            variant="outlined"
            required
            id="pw"
            label="Password"
            name="pw"
            autoComplete="pw"
            fullWidth
          />
          {/* {error && (
                  <Typography color="error" variant="subtitle1">
                    {error}
                  </Typography>
                )} */}
          {isSubmitting && <LinearProgress />}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            aria-label="login"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
