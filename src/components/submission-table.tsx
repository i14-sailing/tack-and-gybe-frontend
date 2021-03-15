import React from 'react';
import { RenderSubmissionNode } from '../utils/types';
import { padStart } from 'lodash';

function SubmissionTable(props: { submissions: RenderSubmissionNode[] }) {
    return (
        <div className={'w-full centering-col bg-white rounded shadow'}>
            {props.submissions.map((s: RenderSubmissionNode, i: number) => (
                <TableRow submission={s} key={s.youtubeVideoId} index={i} />
            ))}
        </div>
    );
}

function timeToStr(time: number, literal: boolean) {
    const minute = Math.round(Math.floor(time / 60));
    const second = Math.round(time % 60);
    return (
        `${padStart(minute.toString(), 2, '0')}${literal ? 'm ' : ':'}` +
        `${padStart(second.toString(), 2, '0')}${literal ? 's' : ''}`
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
                    'col-span-6 font-weight-600 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {props.submission.boatsName}
            </div>

            <div
                className={
                    'col-span-5 font-weight-500 ' +
                    ' flex flex-row items-center justify-start '
                }
            >
                {timeToStr(props.submission.time, true)}
                {props.submission.diff !== 0 && (
                    <span className='pl-2'>(+ {props.submission.diff}s)</span>
                )}
            </div>
        </div>
    );
}

export default SubmissionTable;
