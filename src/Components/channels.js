import React from 'react';
import channelList from './channelFormat';
import abstractions from '../assets/abstractions.jpeg';
import women from '../assets/wise_sci_and_engineering.png';

    const channels = [
    {
        Image1: null,
        Image2: abstractions,
        Header1: "Mathematicians Calculate How Randomness Creeps In",
        Header2: "by Marcus Woo",
    }
    // {
    //     Image1: null,
    //     Image2: women,
    //     Header1: null,
    //     Header2: null,
    // }
]
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2: women;
            //     Header1:
            //     Header2:
            // ],
            // [
                
            // ]
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ],
            // [
            //     Image1:
            //     Image2:
            //     Header1:
            //     Header2:
            // ]
    //     }
        
    // }
    class Channels extends React.Component {
     render() {
            return (
            <div className = "channelContainer">
                <div className = "channelHeader">
                    <h2>Channels</h2>
                    <h3> Tune in to Nautilus' Deep Dive Portals</h3>
                </div>
                <div className = "channelLinks">
                { channels.map((e,i) => 
                    <channelList 
                    Image1={e.Image1}
                    Image2={e.Image2}
                    Header1={e.Header1}
                    Header2={e.Header2}
                    key={i} 
                    />
                )}
                </div>
            </div>
        
            )}
    }
export default Channels;