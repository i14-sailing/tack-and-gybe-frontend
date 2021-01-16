import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
    const { allStrapiVideoSubmission } = useStaticQuery(query);
    const { edges } = allStrapiVideoSubmission;
    const submissions = edges.map((e: Edge) => e.node);

    return (
        <Layout url='/'>
            {submissions.map((s: BoatNode) => (
                <div>boatsName = {s.boatsName}</div>
            ))}
        </Layout>
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
