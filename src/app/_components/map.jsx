"use client";

import React, {useState, useRef, useEffect} from 'react';

import mapboxgl from 'mapbox-gl';

import "mapbox-gl/dist/mapbox-gl.css"; //This line is SO IMPORTANT lol


import ImageControl from '@mapbox-controls/image';
import '@mapbox-controls/image/src/index.css';
import hidingWhite from '../_components/color.css'; //this is used when a marker is clicked on, so dont delete this import!

const MAPBOX_STYLE = process.env.NEXT_PUBLIC_MAPBOX_STYLE;
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Home = () => {

  const mapContainerRef = useRef();
  const mapRef = useRef();


  useEffect(() => {
    if (typeof window !== "undefined") {

      if (!MAPBOX_TOKEN){
        console.error('Missing Mapbox Token');
        return;
      }

      mapboxgl.accessToken = MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: MAPBOX_STYLE,
        bounds: [
          [-128.99107, 22.62724],
          [-63.35107, 50.26125]
        ]
      });

      mapRef.current = map;

      map.on('style.load', function() {
        map.on('click', function(e) {
          var coordinates = e.lngLat;
          console.log(coordinates);
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('you clicked here: <br/>' + coordinates)
            .addTo(map);
        });
      });

      const imageControl = new ImageControl();
      map.addControl(imageControl, 'top-right');

      return () => mapRef.current.remove();
    }

  }, []);

  return (
    <>         
      <div id="map" style={{ height: '100vh' }} ref={mapContainerRef}></div>
      
    </>
);
};


  export default Home;
