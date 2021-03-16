import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { sortBy, filter } from 'lodash';
import TabBar from '../components/tab-bar';
import SubmissionTable from '../components/submission-table';
import {
    Edge,
    SubmissionNode,
    ReducedSubmissionNode,
    RenderSubmissionNode,
} from '../utils/types';

export default function Home() {
    const [tackTab, setTackTab] = useState(true);

    const { allStrapiTeamSubmission } = useStaticQuery(query);
    const { nodes } = allStrapiTeamSubmission;

    let submissions: ReducedSubmissionNode[] = [];

    if (tackTab) {
        const filteredEdges = filter(
            nodes,
            (n: SubmissionNode) => n.tackSubmission
        );

        submissions = filteredEdges.map((n: SubmissionNode) => ({
            country: n.country,
            sailNumber: n.sailNumber,
            boatsName: n.boatsName,
            youtubeVideoId: n.tackYoutubeVideoId,
            startTime: n.tackStartTime,
            endTime: n.tackEndTime,
        }));
    } else {
        const filteredEdges = filter(
            nodes,
            (n: SubmissionNode) => n.gybeSubmission
        );

        submissions = filteredEdges.map((n: SubmissionNode) => ({
            country: n.country,
            sailNumber: n.sailNumber,
            boatsName: n.boatsName,
            youtubeVideoId: n.gybeYoutubeVideoId,
            startTime: n.gybeStartTime,
            endTime: n.gybeEndTime,
        }));
    }

    let body = (
        <div className='w-full mt-8 center-content'>
            <div className='text-lg italic text-gray-800 font-weight-500'>
                No entries yet
            </div>
        </div>
    );

    console.log(nodes, submissions);

    if (submissions.length > 0) {
        const timedSubmissions = sortBy(
            submissions.map((n: ReducedSubmissionNode) => ({
                ...n,
                time: n.endTime - n.startTime,
            })),
            ['time']
        );

        const diffedSubmissions: RenderSubmissionNode[] = timedSubmissions.map(
            (n: any) => ({
                ...n,
                diff: Math.round((n.time - timedSubmissions[0].time) * 10) / 10,
            })
        );

        body = (
            <SubmissionTable
                submissions={diffedSubmissions}
                tackTab={tackTab}
            />
        );
    }

    return (
        <>
            <TabBar {...{ tackTab, setTackTab }} />

            {body}

            <Link to='/rules'>
                <div className='w-full mt-8 text-lg text-center text-gray-800 cursor-pointer hover:text-red-400 font-weight-700'>
                    Be a part of it!
                </div>
            </Link>
        </>
    );
}

const query = graphql`
    query MyQuery {
        allStrapiTeamSubmission {
            nodes {
                boatsName
                gybeEndTime
                gybeStartTime
                gybeSubmission
                gybeYoutubeVideoId
                tackEndTime
                sailNumber
                country
                tackStartTime
                tackSubmission
                tackYoutubeVideoId
            }
        }
    }
`;
