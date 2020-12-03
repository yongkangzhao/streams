import React, { Component, Fragment } from 'react'
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';


export class StreamDelete extends Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }


    actions = (
        <Fragment>
            <button onClick={()=>{this.props.deleteStream(this.props.match.params.id)}} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
            
            
        </Fragment>
    )

    render() {
        if (this.props.stream){
            return (
                    <Modal title="Delete Stream" content={`Are you sure you want to delete this stream: ${this.props.stream.title} ?`} actions={this.actions} onDismiss={()=>history.push('/')}/>
            )
        }
        return null;
    }
}



const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{fetchStream, deleteStream})(StreamDelete);
