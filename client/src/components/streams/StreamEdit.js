import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


export class StreamEdit extends Component {
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }


    render() {
        if(this.props.stream){
            return (
                <div>
                    {this.props.stream.title}
                </div>
            )
        }
        return null;
    }
}



const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);
