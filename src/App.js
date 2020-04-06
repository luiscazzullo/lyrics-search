import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Components
import Form from './components/form/Form';
import Song from './components/song/Song';
import Info from './components/info/Info';

function App() {
  const [searchlyric, setSearchLyric] = useState({});
  const [lyric, setLyric] = useState('');
  const [artistinfo, setArtistInfo] = useState({});
  useEffect(() => {
    if(Object.keys(searchlyric).length === 0) return;
    const getLyric = async () => {
      const { artist, song } = searchlyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const audioDB = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
      const [ lyric, info ] = await Promise.all([
        axios(url),
        axios(audioDB)
      ]);
      setLyric(lyric.data.lyrics)
      setArtistInfo(info.data.artists[0])
    }
    getLyric();
  }, [searchlyric, artistinfo])
  return (
    <>
      <Form 
        setSearchLyric={setSearchLyric}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Info 
              artistInfo={artistinfo}
            />
          </div>
          <div className="col-md-6">
            <Song 
              lyric={lyric}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
