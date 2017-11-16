import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ThemeColors as Colors } from "../components/Theme";
import { parse, distanceInWordsToNow, isAfter } from "date-fns";

const StyledProjectPreview = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${Colors.accent};
  border-radius: 5px;
  padding: 0.6rem;
  margin-bottom: 1rem;
  transition: all 0.6s;

  &:hover {
    border-bottom: 2px solid ${Colors.black};
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }

  h2,
  h3,
  p {
    margin: 0;
  }

  .projectMetadata {
    flex-grow: 1;
    flex-basis: 75%;
    order: 2;

    a {
      color: ${Colors.black};
      text-decoration: none;
    }
  }

  .projectStatus {
    order: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 0.25;
    flex-basis: 25%;

    @media (min-width: 769px) {
      justify-content: flex-end;
      order: 3;
    }

    button {
      margin-bottom: 0.5rem;
      h5 {
        margin: 0;
      }
      padding: 0.5rem 2rem;
      border: none;
      background: ${Colors.blue};
      border-radius: 5px;
      text-transform: uppercase;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;

      &.live {
        background: ${Colors.green};
      }
      &.complete {
        background: ${Colors.blue};
      }
      &.development {
        background: ${Colors.red};
      }
      &.design {
        background: ${Colors.yellow};
      }
      &.ux {
        background: ${Colors.indigo};
      }
      &.unknown {
        background: ${Colors.purple};
      }
      &.concept {
        background: ${Colors.orange};
      }
    }
  }
`;

const ProjectPreview = props => {
  let pastDue = false;
  let live = false;
  const dueDate = parse(props.dueDate);
  const todaysDate = new Date();

  if (props.status === "live") {
    live = true;
  }

  if (isAfter(todaysDate, dueDate)) {
    pastDue = true;
  }

  return (
    <StyledProjectPreview>
      <div className="projectMetadata">
        <h2>
          <Link to={props.slug}>{props.title}</Link>
        </h2>

        {live && (
          <p>
            <em>{props.clientName}</em>
          </p>
        )}
        {!pastDue &&
          !live && (
            <p>
              Due in{" "}
              <strong>{distanceInWordsToNow(parse(props.dueDate))}</strong> for{" "}
              <em>{props.clientName}</em>.
            </p>
          )}

        {pastDue &&
          !live && (
            <p>
              Past due by{" "}
              <strong>{distanceInWordsToNow(parse(props.dueDate))}</strong> for{" "}
              <em>{props.clientName}</em>.
            </p>
          )}
      </div>
      <div className="projectStatus">
        <button className={props.status}>
          <h5>{props.status}</h5>
        </button>
      </div>
    </StyledProjectPreview>
  );
};
ProjectPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ProjectPreview;
