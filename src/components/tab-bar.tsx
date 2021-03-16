import React from 'react';

function TabBar(props: { tackTab: boolean; setTackTab(n: boolean): void }) {
    return (
        <div
            className={
                'w-full bg-white rounded shadow mb-4 ' +
                'flex flex-row items-center justify-items-center ' +
                'text-center text-lg font-weight-600 '
            }
        >
            <Tab
                label='Tacking'
                active={props.tackTab}
                setActive={() => props.setTackTab(true)}
                borderR
            />
            <Tab
                label='Gybing'
                active={!props.tackTab}
                setActive={() => props.setTackTab(false)}
                borderL
            />
        </div>
    );
}

function Tab(props: {
    label: string;
    active: boolean;
    setActive(): void;
    borderL?: boolean;
    borderR?: boolean;
}) {
    return (
        <div
            className={
                'w-1/2 p-1 border-gray-400 ' +
                'transition-colors duration-100 cursor-pointer ' +
                (props.borderL ? 'border-l ' : 'rounded-l ') +
                (props.borderR ? 'border-r ' : 'rounded-r ') +
                (props.active
                    ? 'text-gray-800 bg-white '
                    : 'text-gray-600 bg-gray-200 ')
            }
            onClick={props.setActive}
        >
            {props.label}
        </div>
    );
}

export default TabBar;
