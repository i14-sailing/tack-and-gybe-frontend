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
                'w-full grid grid-cols-16 p-2 ' +
                'text-base border-gray-300 ' +
                (props.index !== 0 ? 'border-t-2 ' : ' ')
            }
        >
            <div
                className={
                    'w-full col-span-1 font-weight-600 text-lg ' +
                    'flex flex-row items-center justify-center'
                }
            >
                {props.index + 1}
            </div>
            <div
                className={
                    'w-full col-span-2 font-weight-500 ' +
                    'flex flex-row items-center justify-end'
                }
            >
                <img
                    className='rounded-sm w-14 h-7 ring-2 ring-gray-300'
                    src={`./flags/${props.submission.country}_Flag_200w.png`}
                />
            </div>
            <div
                className={
                    'col-span-2 pl-3 font-weight-600 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {props.submission.country} {props.submission.sailNumber}
            </div>
            <div
                className={
                    'col-span-7 font-weight-600 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {props.submission.boatsName}
            </div>
            <div
                className={
                    'col-span-2 font-weight-500 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {props.submission.time} (+ {props.submission.diff})
            </div>
            <div
                className={
                    'col-span-2 font-weight-500 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {props.submission.startTime} - {props.submission.endTime}
            </div>
        </div>
    );
}

export default SubmissionTable;
