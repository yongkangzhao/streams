import React, { Component, Fragment } from 'react'
import Modal from '../Modal';


export class StreamDelete extends Component {
    actions = (
        <Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </Fragment>
    )

    render() {



        return (
            <div>
                StreamDelete
                <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={this.actions}/>
            </div>
        )
    }
}

export default StreamDelete
