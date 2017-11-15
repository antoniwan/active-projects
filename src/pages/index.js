import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ProjectPreview from "../components/ProjectPreview";

const StyledIndex = styled.div``;

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      id: node.id,
      title: node.frontmatter.title,
      slug: node.fields.slug,
      clientName: node.frontmatter.clientName,
      dueDate: node.frontmatter.dueDate,
      status: node.frontmatter.status
    };
  });

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
    allMarkdownRemark(
      filter: { frontmatter: { active: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            status
            clientName
            dueDate
            active
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
