import React from "react";
import {
  makeStyles,
  Theme,
  Container,
  ContainerProps,
} from "@material-ui/core";

import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        width: "75%",
      },
    },
  };
});

interface CenterizedProps extends ContainerProps<React.ElementType> {}

function Centerized(props: CenterizedProps) {
  const classes = useStyles();
  const { component = "div", maxWidth = "xs", className, ...rest } = props;

  return (
    <Container
      className={clsx(className, classes.container)}
      maxWidth={maxWidth}
      component={component}
      {...rest}
    />
  );
}

export default Centerized;
