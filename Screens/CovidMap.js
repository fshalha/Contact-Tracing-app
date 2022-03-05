import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from "react-native-maps";
import { useState,useEffect } from 'react';
import {Component } from 'react';

/*const [restaurants, setRestaurants] = useState([]);
useEffect(() => {
   let data = fetchData();
   setRestaurants(data)
      });*/

export default class App extends Component {
 
  state = { reports: [] }

 /* async componentDidMount() {
    try {
      await this.fetchlocations();
     
    } catch (e) {
      console.log(e);
    }
  };*/
 
  render() {
    return (
      <MapView style={{ ...StyleSheet.absoluteFillObject }}
      initialRegion={{
        latitude: 37.1,
        longitude: -95.7,
        latitudeDelta: 10,
        longitudeDelta: 45
      }} >
      {this.mapMarkers()}

    </MapView>
  
    );
  }

  componentDidMount() {
    // console.log("Hi");
         /*fetch('http://10.0.2.2:5000/getallLocations', {
        method: 'GET'
     })*/
     fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
       // fetch('https://raw.githubusercontent.com/fshalha/Contact-Tracing-app/main/GPS_dataset.json')
       .then(res => res.json()
     
       )
     
       .then(data => {
      //   this.setState({ reports: data})
         console.log("Hi");  
         console.log(data);  
        
         console.log(reports);
         this.setState({ reports: data.reports})
       })
       .catch(console.error)
   }
   
  /*fetchlocations = async () => {
    fetch('http://10.0.2.2:5000/getallLocations', {
      method: 'GET'
   })

   .then((responseJson) => {
    console.log(responseJson);
    //console.log(responseJson.Alllocations);
    this.setState({ reports: responseJson.Alllocations })

 })
 .catch((error) => {
    console.error(error);
 });

  };*/
 


  mapMarkers = () => {
    return this.state.reports.map((report) => <Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lon }}
      
    >
    </Marker >)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});