import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProjectPreview = styled.div`
  border: 1px solid black;
  padding: 1rem;
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

      <div className="projectTitle">
        <h2>{props.title}</h2>
        <h3>{props.clientName}</h3>
      </div>

      <ol>
        {props.staff}
        <li>
          <strong>Carlos Córdoba</strong>
        </li>
        <li>Francisco Primo</li>
      </ol>
      <Link to={props.slug}>Open Project</Link>
    </StyledProjectPreview>
  );
};
ProjectPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ProjectPreview;
