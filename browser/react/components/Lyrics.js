import React from 'react';

const mt2 = { marginTop: '20px' };
const my1 = { marginTop: '10px', marginBottom: '10px'}

export default function Lyrics ({ 
  	handleSubmit, 
  	handleArtistInput, 
  	handleSongInput, 
  	artistInput, 
  	songInput,
  	lyricsText
}) {
  return (
    <div id="lyrics">
      <form onSubmit={handleSubmit} style={mt2}>
        <div className="form-group">
        	<div style={my1}>
        		<label>Artist</label>
        		<input 
        			className="form-control"
        			type="text" 
        			value={artistInput} 
        			placeholder="Artist" 
        			onChange={handleArtistInput}
        		/>
        	</div>
          	<div style={my1}>
          		<label>Song Name</label>
          		<input 
          			className="form-control"
          			type="text" 
          			value={songInput} 
          			placeholder="Song" 
          			onChange={handleSongInput}/>
          	</div>
        </div>
        <pre>{lyricsText || 'Search above!'}</pre>
        <button className="btn btn-success" type="submit">Search for Lyrics</button>
      </form>
    </div>
  );

}