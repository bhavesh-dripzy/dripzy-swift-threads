
import { useState, useEffect } from 'react';

interface LocationData {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  } | null;
  isLoading: boolean;
  error: string | null;
}

export const useGeolocation = () => {
  const [locationData, setLocationData] = useState<LocationData>({
    address: "Enable location for delivery",
    coordinates: null,
    isLoading: false,
    error: null,
  });

  const requestLocation = async () => {
    if (!navigator.geolocation) {
      setLocationData(prev => ({
        ...prev,
        error: "Geolocation is not supported by this browser",
      }));
      return;
    }

    setLocationData(prev => ({ ...prev, isLoading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Using a free geocoding service
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch address');
          }
          
          const data = await response.json();
          const address = `${data.locality || data.city || ''}, ${data.principalSubdivision || ''}, ${data.countryName || ''}`.replace(/^,\s*|,\s*$/g, '');
          
          setLocationData({
            address: address || "Location detected",
            coordinates: { latitude, longitude },
            isLoading: false,
            error: null,
          });
        } catch (error) {
          console.error('Error fetching address:', error);
          setLocationData({
            address: `Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
            coordinates: { latitude, longitude },
            isLoading: false,
            error: null,
          });
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        let errorMessage = "Location access denied";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timeout";
            break;
        }
        
        setLocationData(prev => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  };

  return {
    ...locationData,
    requestLocation,
  };
};
