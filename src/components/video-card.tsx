import React from 'react';

interface Props {
    boatNode: BoatNode;
}
function VideoCard(props: Props) {
    return (
        <div className='w-full h-16 p-4 mb-2 bg-white rounded shadow'>
            {props.boatNode.boatsName}
        </div>
    );
}

type BoatNode = {
    boatsName: string;
    startTime: number;
    endTime: number;
    youtubeVideoId: string;
};

export default VideoCard;
