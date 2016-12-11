import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { getLyricsThunk } from '../reducers/lyricsTextReducer'

export default class LyricsContainer extends Component {

	constructor(props) {
		super(props);
		const { lyricsText } = store.getState().lyricsText;
		this.state = { 
			lyricsText, 
			artistInput: '', 
			songInput: '' 
		}

		this.handlers = {
			handleArtistInput: this.handleArtistInput.bind(this),
			handleSongInput: this.handleSongInput.bind(this),
			handleSubmit: this.handleSubmit.bind(this)
		}
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(()=>{
			const { lyricsText } = store.getState();
			this.setState({ lyricsText });
		})
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleArtistInput(evt) {
		this.setState({ artistInput: evt.target.value })
	}

	handleSongInput(evt) {
		this.setState({ songInput: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const artistName = this.state.artistInput;
		const songName = this.state.songInput;
		const thunk = getLyricsThunk(artistName, songName);
		store.dispatch(thunk);
	}

	render() {
		return (
			<Lyrics {...this.state} {...this.handlers} />
		)
	}

}