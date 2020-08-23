import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from '../util';

function Map({ countries, center, zoom, casesType}) {
    console.log("countries MAP >>>", countries);
    return (
        <div id='mapp' className='map'>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <ahref="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Loop through countries and draw circles on the screen */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map;
