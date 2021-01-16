import React from 'react';
import UndrawImageSanFran from '../../static/undraw-images/undraw_Golden_gate_bridge_jkph.svg';
import UndrawImageYoutube from '../../static/undraw-images/undraw_online_video_ivvq.svg';
import WinkEmoji from '../../static/wink-emoji.svg';
import PartyEmoji from '../../static/party-emoji.svg';

export default function Home() {
    return (
        <div className='flex flex-col items-center mt-8'>
            <div className='flex flex-row'>
                <div className='flex flex-col mr-16 w-25vw'>
                    <h4 className='text-gray-800 font-weight-700'>
                        The Challenge
                    </h4>
                    <p>
                        Perform <strong>3 tacks and 3 gybes</strong> in the
                        shortest amount of time possible.
                    </p>
                    <p>
                        The moment the first one of you places his foot onto the
                        boat (from the rack) will be counted as the start time.
                    </p>
                    <p>
                        The timer stops when both of you are hanging on your
                        trapeze (doesn't matter whether you are plugged in or
                        not, but your weight must not be on the rack).
                    </p>
                </div>
                <img className='w-25vw' src={UndrawImageSanFran} />
            </div>

            <p className='my-16'>
                You can choose the location, the conditions (at least a light
                Doppelsteher) and your gear.
                <img className='inline w-8 h-8 ml-1' src={WinkEmoji} />
            </p>

            <div className='flex flex-row'>
                <img className='w-25vw' src={UndrawImageYoutube} />
                <div className='flex flex-col ml-16 w-25vw'>
                    <h4 className='text-gray-800 font-weight-700'>
                        How do I Take Part?
                    </h4>
                    <p>
                        1. Perform your business and film yourself from a
                        suitable angle. Camera mounted to the boom or the
                        spinnaker pole for example.
                    </p>
                    <p>2. Upload that video to YouTube</p>
                    <p>
                        3. Send an email to ... and include the following
                        details: Link to the video, start/end time, your boats
                        name.
                    </p>
                </div>
            </div>

            <p className='my-16'>
                Have fun!
                <img className='inline w-8 h-8 ml-1' src={PartyEmoji} />
            </p>
        </div>
    );
}
