import React from 'react';
import { RenderSubmissionNode } from '../utils/types';

function SubmissionTable(props: { submissions: RenderSubmissionNode[] }) {
    return (
        <div className={'w-full centering-col bg-white rounded shadow'}>
            {props.submissions.map((s: RenderSubmissionNode, i: number) => (
                <TableRow submission={s} key={s.youtubeVideoId} index={i} />
            ))}
        </div>
    );
}

function TableRow(props: { submission: RenderSubmissionNode; index: number }) {
    return (
        <div
            className={
                'w-full grid grid-cols-8 p-2 ' +
                'text-base ' +
                (props.index !== 0 ? 'border-t-2 ' : ' ')
            }
        >
            <div className='col-span-1 text-center font-weight-500'>
                {props.index + 1}
            </div>
            <div className='col-span-1 text-center font-weight-500'>
                {props.submission.country}
            </div>
            <div className='col-span-1 text-center font-weight-500'>
                {props.submission.country} {props.submission.sailNumber}
            </div>
            <div className='col-span-3 text-center font-weight-500'>
                {props.submission.boatsName}
            </div>
            <div className='col-span-1 text-center font-weight-500'>
                {props.submission.time} (+ {props.submission.diff})
            </div>
            <div className='col-span-1 text-center font-weight-500'>
                {props.submission.startTime} - {props.submission.endTime}
            </div>
        </div>
    );
}

export default SubmissionTable;
