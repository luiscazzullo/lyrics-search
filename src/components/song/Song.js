import React from 'react';
const Song = ({ lyric }) => {
    if(lyric.length === 0) return null;
    return ( 
        <>
            <h2>Letra de canción</h2>
            <p className="letra">{lyric}</p>
        </>
     );
}

 
export default Song;