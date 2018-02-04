import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { format, parse, distanceInWordsToNow, isAfter } from "date-fns";

const StyledProjectPage = styled.section`
  ul {
    li {
      margin: 0;
    }
  }

  hr {
    margin-bottom: 4rem;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <StyledProjectPage>
      <p>
        <Link to="/">Go back</Link>
      </p>
      <h1>{post.frontmatter.title}</h1>
      <p>
        This project note was created on{" "}
        <strong>
          {format(parse(post.frontmatter.date), `dddd, MMMM D, YYYY`)}
        </strong>{" "}
        and the project is due on{" "}
        <strong>
          {format(parse(post.frontmatter.dueDate), `dddd, MMMM D, YYYY`)} ({distanceInWordsToNow(
            parse(post.frontmatter.dueDate)
          )})
        </strong>.
      </p>

      {post.frontmatter.workflowUrl !== "" && (
        <p>
          You can find the project in{" "}
          <a
            href={post.frontmatter.workflowUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            workflow
          </a>.
        </p>
      )}

      {post.frontmatter.workflowUrl === "" && (
        <p>
          There is no workflow project associated with this task. I probably got
          this request via email or skype.
        </p>
      )}

      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </StyledProjectPage>
  );
};

export const query = graphql`
  query ProjectPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        clientName
        dueDate
        workflowUrl
        status
        projectNumber
      }
    }
  }
`;
