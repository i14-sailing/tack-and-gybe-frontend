import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import VideoCard from '../components/video-card';
import { sortBy } from 'lodash';

export default function Home() {
    const { allStrapiVideoSubmission } = useStaticQuery(query);
    const { edges } = allStrapiVideoSubmission;

    if (edges.length > 0) {
        let submissions = edges.map((e: Edge) => ({
            ...e.node,
            time: e.node.endTime - e.node.startTime,
        }));
        submissions = sortBy(submissions, ['time']);
        submissions = submissions.map((e: any) => ({
            ...e,
            diff: Math.round((e.time - submissions[0].time) * 10) / 10,
        }));

        return (
            <>
                <div
                    className={
                        'mx-auto w-full mt-4 mb-8 ' +
                        'sm:w-65vw ' +
                        'md:w-55vw ' +
                        'lg:mb-16 lg:w-45vw ' +
                        'xl:mt-6 xl:mb-24 xl:w-35vw ' +
                        '2xl:mt-8 2xl:mb-32 2xl:w-30vw '
                    }
                >
                    {submissions.map((s: BoatNode, i: number) => (
                        <VideoCard
                            key={s.youtubeVideoId}
                            boatNode={s}
                            index={i}
                        />
                    ))}
                    <Link to='/rules'>
                        <div className='w-full mt-8 text-lg text-center text-gray-800 cursor-pointer hover:text-red-400 font-weight-700'>
                            Be a part of it!
                        </div>
                    </Link>
                </div>
            </>
        );
    }

    return (
        <div className='w-full mt-8 center-content'>
            <div className='text-lg italic text-gray-800 font-weight-500'>
                No entries yet
            </div>
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

type Edge = {
    node: BoatNode;
};

type BoatNode = {
    boatsName: string;
    startTime: number;
    endTime: number;
    time: number;
    diff: number;
    youtubeVideoId: string;
};
