import React from 'react';

class channelList extends React.Component {
    render() {
        return (
    <div>
        <img className = "channelImageHeader">{ this.props.Image1 }</img>
        <img className = "channelImageMain">{ this.props.Image2 }</img>
        <h2 className = "channelHeaderMain">{ this.props.Header1 }</h2>
        <h4 className = "channelHeaderSub">{ this.props.Header2 }</h4>
    </div>
        )}
}

export default channelList;