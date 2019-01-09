import * as PostActions from './post.actions';
import { IPost } from './ipost.model';

export type Action = PostActions.All;

const defaultState: IPost = {
    text: 'Hello. I am post.',
    likes: 2
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}


export function PostReducer(state: IPost = defaultState, action: Action) {

    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, {text: action.payload});
        case PostActions.UPVOTE:
            return newState(state, {likes: state.likes + 1});]
        case PostActions.DOWNVOTE:
            return newState(state, {likes: state.likes - 1});
        case PostActions.RESET:
            return defaultState;
        default:
            return state;
    }
}
