import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ProjectPreview from "../components/ProjectPreview";

const StyledIndex = styled.div``;

const IndexPage = ({ data }) => {
  console.log(data);

  const projects = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      id: node.id,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      slug: node.fields.slug,
      clientName: node.frontmatter.clientName,
      dueDate: node.frontmatter.dueDate,
      workflowUrl: node.frontmatter.workflowUrl,
      staff: node.frontmatter.staff,
      projectNumber: node.frontmatter.projectNumber
    };
  });

  console.log("Projects: ", projects);

  return (
    <StyledIndex>
      <h1>Active Proyects ({data.allMarkdownRemark.totalCount})</h1>
      {projects.map(project => (
        <ProjectPreview key={project.title} {...project} />
      ))}
    </StyledIndex>
  );
};
export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            status
            clientName
            date
            dueDate
            workflowUrl
            projectNumber
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
