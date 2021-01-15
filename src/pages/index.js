import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Home() {
  const { allStrapiVideoSubmission } = useStaticQuery(query);
  const { edges } = allStrapiVideoSubmission;
  const submissions = edges.map(e => e.node);

  return (
    <div>
      <div>Hello world!</div>
      {submissions.map(s => (
        <div>boatsName = {s.boatsName}</div>
      ))}
    </div>
  );
}

const query = graphql`
  query MyQuery {
    allStrapiVideoSubmission {
      edges {
        node {
          boatsName
          startTime
          endTime
          youtubeVideoId
        }
      }
    }
  }
`;
