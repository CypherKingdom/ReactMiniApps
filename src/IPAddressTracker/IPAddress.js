import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./IPAddress.module.css";
import MapComponent from "./MapComponent";

function IPAddress() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        console.log('IP data:', response.data);
        setIpData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IP data:', error);
        setLoading(false);
      }
    };

    fetchIpData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className={classes.heading}>IP Address Finder</h1>
      <div className={classes.IPAddress}>
        <div className={classes.left}>
          <p>IP Address: <span id="ip">{ipData?.ip}</span></p>
          <p>City: {ipData?.city}</p>
          <p>Region: {ipData?.region}</p>
          <p>Country: {ipData?.country_name}</p>
          <p>ISP: {ipData?.org}</p>
        </div>
        {ipData && (
          <MapComponent
            latitude={ipData.latitude}
            longitude={ipData.longitude}
          />
        )}
      </div>
    </div>
  );
}

export default IPAddress;