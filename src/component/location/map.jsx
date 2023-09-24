import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLat: null,
      currentLng: null,
      searchedLat: null,
      searchedLng: null,
      searchLocation: '',
      isLoading: true,
      loadError: false,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleLocation, this.handleLocationError);
    } else {
      console.error("Geolocation is not supported by your browser.");
      // If geolocation is not supported, set a default random location
      this.setRandomLocation();
    }
  }

  handleLocation = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ currentLat: latitude, currentLng: longitude, isLoading: false });
  };

  handleLocationError = (error) => {
    console.error("Error getting geolocation:", error);
    // If geolocation retrieval fails, set a default random location
    this.setRandomLocation();
  };

  setRandomLocation() {
    // Set a default random location
    const randomLat = this.getRandomCoordinate(-90, 90);
    const randomLng = this.getRandomCoordinate(-180, 180);
    this.setState({ currentLat: randomLat, currentLng: randomLng, isLoading: false });
  }

  getRandomCoordinate(min, max) {
    return min + Math.random() * (max - min);
  }

  handleSearchChange = (event) => {
    this.setState({ searchLocation: event.target.value });
  };

  handleSearchSubmit = () => {
    this.setState({ isLoading: true, loadError: false });

    // Use the Google Maps Geocoding API to get the coordinates of the searched location
    const { searchLocation } = this.state;
    const apiKey = 'AIzaSyC2YK8cE4ZcHeglVqOBWXKYH7mGYhm4sIg'; // Replace with your Google Maps API Key

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchLocation)}&key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          this.setState({ searchedLat: lat, searchedLng: lng, isLoading: false });
        } else {
          console.error("Location not found.");
          this.setState({ isLoading: false, loadError: true });
        }
      })
      .catch((error) => {
        console.error("Error searching for location:", error);
        this.setState({ isLoading: false, loadError: true });
      });
  };

  render() {
    const { currentLat, currentLng, searchedLat, searchedLng, isLoading, loadError } = this.state;

    return (
      <div>
        <div className="search-bar" style={{backgroundColor:"#5baa37", padding:"9px"}}>
          <input style={{width:"30%", height:'20px'}}
            type="text"
            placeholder="Search for a location"
            value={this.state.searchLocation}
            onChange={this.handleSearchChange}
          />
          <button style={{backgroundColor:'transparent', border:'1px solid white', marginLeft:'2%', color:'white'}} onClick={this.handleSearchSubmit}>Search</button>
        </div>
        <div className="map-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : loadError ? (
            <div>Error loading the map. Please try again later.</div>
          ) : (
            <Map
              google={this.props.google}
              initialCenter={{ lat: searchedLat || currentLat, lng: searchedLng || currentLng }}
              zoom={14}
            >
              {/* Display the current location marker */}
              {currentLat !== null && currentLng !== null && (
                <Marker
                  name={'Current Location'}
                  position={{ lat: currentLat, lng: currentLng }}
                />
              )}
            </Map>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2YK8cE4ZcHeglVqOBWXKYH7mGYhm4sIg",
})(MapContainer);
