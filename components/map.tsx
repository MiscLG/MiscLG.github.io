import React,{useState} from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';
import styles from '../styles/map.module.css'

const MAP_API_KEY:string = process.env.mapsKey || 'no-key'
const mapStyle = {
  display:"block",
  position:"static",
  margin:'2vmin auto',
  width: '80vmin',
  height: '50vmin',
  ['align-items']:"center",
}

const containerStyle = {
  position:"static",
  width:"80%",
  height:"80%",
  // margin:"auto",
  ['align-items']:"center",
  ['max-width']:"90vw",
  ['max-height']:'90vh',
}

const MapContainer = ({google}:any)=>  {
  const [showingInfoWindow,setShowingInfoWindow] = useState(false)
  const [activeMarker,setActiveMarker] = useState<any>({})
  const [selectedPlace, setSelectedPlace] = useState<any>({})

  const onMarkerClick = (props:any,marker:any,e:any) =>{
    console.log(props,marker,e)
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  };

  const onClose = (props:any)=> {
    if (showingInfoWindow) {
      setShowingInfoWindow(false)
      setActiveMarker(null)
    }
  }
  return (
    <Map
      google={google}
      zoom={5}
      // className = {styles.map}
      containerStyle={containerStyle}
      style={mapStyle}
      initialCenter={
        {
          lat: 37.2970523,
          lng: -121.9574964,
        }
      }
    >
      <Marker
          title={'San Jose'}
          onClick={onMarkerClick}
          name={'This is my hometown where I have lived since I was six.'}
          position={{lat: 37.2970523, lng: -121.9574964,}}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: MAP_API_KEY
})(MapContainer);