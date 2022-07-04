import {
    SET_SONGS_ARRAY,
    SET_CURRENT_SONG,
    TOGGLE_PLAYING,
    TOGGLE_REMOVE,
} from './types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case SET_SONGS_ARRAY:
            return {
                ...state,
                songs: action.data,
            }
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.data,
                playing: true,
            }
        case TOGGLE_PLAYING:
            return {
                ...state,
                playing: action.data,
            }
        case TOGGLE_REMOVE:
            return {
                ...state,
                remove: action.data,
            }
        default:
            return state
    }
}