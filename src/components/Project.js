import React, { Component } from "react";
import Link from "gatsby-link";

const Project = props => {
  return (
    <div>
      <h3>
        <a href={props.workflow.url}>{props.workbook.id}</a>
      </h3>
      <h2>{props.title}</h2>
      <ol>
        <li>
          <strong>Carlos Córdoba</strong>
        </li>
        <li>Francisco Primo</li>
      </ol>
      <Link to={props.slug}>Open Project</Link>
    </div>
  );
};
Project.defaultProps = {
  status: `live`,
  title: `Sprint World Cup 2017`,
  workbook: {
    id: `1320`
  },
  workflow: {
    url: `http://m8.companyworkflow.com/#projects/298605/overview/summary`
  }
};
export default Project;
