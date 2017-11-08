import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Theme from "../components/Theme";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Active Projects"
      meta={[
        {
          name: "description",
          content: "This page has a list of your active projects."
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
