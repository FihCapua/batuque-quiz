import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Widget from '../Widget';

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Widget.Link {...props}>{children}</Widget.Link>
  </NextLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
