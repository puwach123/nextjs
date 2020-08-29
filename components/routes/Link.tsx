import React from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

interface CustomNextLinkProps extends NextLinkProps {
  className?: string;
}

function CustomNextLink(
  props: CustomNextLinkProps,
  ref: React.LegacyRef<HTMLAnchorElement>
) {
  const { as, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
}

const ForwardedCustomNextLink = React.forwardRef(CustomNextLink);

interface LinkProps extends NextLinkProps, Omit<MuiLinkProps, "href"> {
  className?: string;
  naked?: boolean;
}

function Link(props: LinkProps) {
  const { href, className, innerRef, naked, ...other } = props;

  if (naked) {
    return (
      <ForwardedCustomNextLink
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={ForwardedCustomNextLink}
      className={className}
      ref={innerRef}
      href={href as string}
      {...other}
    />
  );
}

export default React.forwardRef((props: any, ref) => (
  <Link {...props} innerRef={ref} />
));
