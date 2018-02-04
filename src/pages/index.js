import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { parse } from "date-fns";
import ProjectPreview from "../components/ProjectPreview";

const StyledIndex = styled.div``;

const IndexPage = ({ data }) => {
  let projects = [];
  let totalCount = 0;
  const markdownFiles = data.allMarkdownRemark;

  if (markdownFiles) {
    totalCount = markdownFiles.totalCount;
    projects = markdownFiles.edges.map(({ node }) => {
      return {
        title: node.frontmatter.title,
        slug: node.fields.slug,
        clientName: node.frontmatter.clientName,
        dueDate: node.frontmatter.dueDate,
        status: node.frontmatter.status,
        tags: node.frontmatter.tags
      };
    });
  }

  return (
    <StyledIndex>
      <h1>Active Projects ({totalCount})</h1>
      {projects
        .sort((projectA, projectB) => {
          return parse(projectA.dueDate) - parse(projectB.dueDate);
        })
        .map(project => <ProjectPreview key={project.title} {...project} />)}

      {!totalCount && <p>There are no active projects! 😭</p>}
    </StyledIndex>
  );
};
export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { active: { eq: true } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
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
