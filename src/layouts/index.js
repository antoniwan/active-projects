import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Theme from "../components/Theme";

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Active Projects"
      meta={[
        {
          name: "description",
          content: "These are the things you should be working on."
        }
      ]}
    />
    <Theme>
      <main className="container">{children()}</main>
    </Theme>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
