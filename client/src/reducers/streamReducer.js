import _ from 'lodash';

import {
    FETCH_STREAM,FETCH_STREAMS,CREATE_STREAM,EDIT_STREAM,DELETE_STREAM
} from '../actions/types';


const streamReducer = (state = {}, action) => {
    switch (action.type){
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return {...state, ...action.payload.map((obj) => {
                            return {[obj.id]:obj};
                            }).reduce((a,b)=>{
                                return Object.assign({}, a, b);
                            })}
            // return {...state, ..._.mapKeys(action.payload, 'id')};
            
            
        default:
            return state;
    }
};

export default streamReducer;