import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Project from "../components/Project";

const StyledIndex = styled.div``;

const IndexPage = ({ data }) => {
  console.log(data);

  const projects = data.allMarkdownRemark.edges.map(({ node }) => {
    console.log("node: ", node);
    return {
      id: node.id,
      title: node.frontmatter.title,
      date: node.frontmatter.date
    };
  });

  return (
    <StyledIndex>
      <h1>Active Proyects ({data.allMarkdownRemark.totalCount})</h1>
      {projects.map(project => <Project title={project.title} />)}
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
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
