import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

export class StreamShow extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }



    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.flvPlayer.destroy();
    } 


    buildPlayer(){
        if(this.flvPlayer || !this.props.stream){
            return;
        }
        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://10.164.173.122:8000/live/${this.props.match.params.id}.flv`
        });
        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load();
        this.flvPlayer.play();
    }


    render() {
        if(this.props.stream){
            return (
                <div>
                    <video ref={this.videoRef} style={{width:'100%'}} controls/>
                    <h1>
                        {this.props.stream.title}
                    </h1>

                    <h5>
                        {this.props.stream.description}
                    </h5>
                </div>
            )
        }
        return null;
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStatetoProps, {fetchStream})(StreamShow);
