import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
    const { allStrapiVideoSubmission } = useStaticQuery(query);
    const { edges } = allStrapiVideoSubmission;
    const submissions = edges.map((e: Edge) => e.node);

    return (
        <>
            {submissions.map((s: BoatNode) => (
                <div key={s.youtubeVideoId}>boatsName = {s.boatsName}</div>
            ))}
        </>
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

type Edge = {
    node: BoatNode;
};

type BoatNode = {
    boatsName: string;
    startTime: number;
    endTime: number;
    youtubeVideoId: string;
};
