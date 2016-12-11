import { SET_LYRICS_TEXT } from '../constants';
import axios from 'axios';

const setLyricsText = (text) => {
	return {
		type: SET_LYRICS_TEXT,
		lyricsText: text
	}
}

export const getLyricsThunk = function(artistName, songName) {
	return function(dispatch, getState) {
      return axios.get(`/api/lyrics/${artistName}/${songName}`)
        .then(res => res.data.lyrics)
        .then(lyricText => {
        	dispatch(setLyricsText(lyricText));
        })
	}
}

export default function lyricsTextReducer (state = '', action) {
  switch (action.type) {
    case SET_LYRICS_TEXT: 
       return action.lyricsText;
    default: 
       return state;
  }
}