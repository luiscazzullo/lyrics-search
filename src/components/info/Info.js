import React from 'react';
const Info = ({ artistInfo }) => {
    if(Object.keys(artistInfo).length === 0) return null;
    const { strArtistThumb, strGenre, strBiographyES } = artistInfo
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista" />
                <p className="card-text">
                    Género: {strGenre}
                </p>
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">
                    {strBiographyES}
                </p>
            </div>
        </div>
     );
}
 
export default Info;