import React from "react";

import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { makeStyles, Button, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 4),
  },
}));

interface Values {
  username: string;
  password: string;
  confirm: string;
}

interface RegisterFormProps {
  handleSumit?: (values: Values) => void;
}

function RegisterForm(props: RegisterFormProps) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirm: "",
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.username) errors.username = "Required";
        if (!values.password) errors.password = "Required";
        if (!values.confirm) errors.confirm = "Required";
        if (values.password !== values.confirm) {
          errors.password = "Password Mismatch";
          errors.confirm = "Password Mismatch";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {}}
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
            id="username"
            label="Username"
            name="username"
            autoComplete="usernmae"
            fullWidth
          />
          <Field
            component={TextField}
            type="password"
            margin="normal"
            variant="outlined"
            required
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            fullWidth
          />
          <Field
            component={TextField}
            type="password"
            margin="normal"
            variant="outlined"
            required
            id="confirm"
            label="Confirm Password"
            name="confirm"
            autoComplete="confirm"
            fullWidth
          />
          {/* {error && (
        <Typography color="error" variant="subtitle1">
          {error}
        </Typography>
      )} */}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            aria-label="login"
            disabled={isSubmitting}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
