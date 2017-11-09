import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProjectPreview = styled.div`
  border: 1px solid black;
  padding: 1rem;

  .projectMetadata {
  }

  h2,
  h3 {
    margin: 0;
  }
`;

const ProjectPreview = props => {
  return (
    <StyledProjectPreview>
      {props.projectNumber &&
        props.workflowUrl && (
          <h3>
            <a href={`/`} target="_blank" rel="noopener noreferrer">
              props.workbook.id
            </a>
          </h3>
        )}

      <div className="projectMetadata">
        <h2>
          <Link to={props.slug}>{props.title}</Link>
        </h2>
        <h3>{props.clientName}</h3>
      </div>
    </StyledProjectPreview>
  );
};
ProjectPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ProjectPreview;
