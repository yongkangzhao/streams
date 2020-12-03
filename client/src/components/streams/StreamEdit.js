import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStreams } from '../../actions';
import StreamForm from './StreamForm';

export class StreamEdit extends Component {
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStreams(this.props.match.params.id, formValues);
    }

    render() {
        if(this.props.stream){
            return (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps, {fetchStream, editStreams})(StreamEdit);
