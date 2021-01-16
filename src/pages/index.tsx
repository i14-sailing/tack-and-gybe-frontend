import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import VideoCard from '../components/video-card';

export default function Home() {
    const { allStrapiVideoSubmission } = useStaticQuery(query);
    const { edges } = allStrapiVideoSubmission;
    const submissions = edges.map((e: Edge) => e.node);

    return (
        <>
            {submissions.map((s: BoatNode) => (
                <VideoCard key={s.youtubeVideoId} boatNode={s} />
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
