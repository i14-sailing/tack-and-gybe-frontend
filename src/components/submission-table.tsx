import React from 'react';
import { RenderSubmissionNode } from '../utils/types';

function SubmissionTable(props: { submissions: RenderSubmissionNode[] }) {
    return (
        <div
            className={
                'w-full bg-white rounded shadow ' +
                'flex flex-col items-center justify-items-center ' +
                'text-center text-lg font-weight-600 '
            }
        >
            {props.submissions.map((s: RenderSubmissionNode) => s.boatsName)}
        </div>
    );
}

function TableRow() {
    return <div className=''>bama</div>;
}

export default SubmissionTable;
