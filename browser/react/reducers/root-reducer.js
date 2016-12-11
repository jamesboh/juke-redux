import { combineReducers } from 'redux';
import lyricsTextReducer from './lyricsTextReducer';

export default combineReducers({
	lyricsText: lyricsTextReducer
});
