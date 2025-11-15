import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const locationInfo = {
    city: 'Colombo',
    state: 'Western Province',
    country: 'Sri lanka',
    timezone: 'Sri Lanka Standard Time (SLST)',
    coordinates: {
      lat: 6.9271,
      lng: 79.8612
    },
    workingHours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: 'Available for urgent matters'
    }
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const openInGoogleMaps = () => {
    const { lat, lng } = locationInfo?.coordinates;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Location & Availability</h3>
            <p className="text-text-secondary">Based in {locationInfo?.city}, {locationInfo?.state}</p>
          </div>
          <button
            onClick={openInGoogleMaps}
            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-250"
            title="Open in Google Maps"
          >
            <Icon name="ExternalLink" size={20} />
          </button>
        </div>
      </div>
      {/* Map Container */}
      <div className="relative h-64 bg-muted">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-text-secondary mx-auto mb-2" />
              <p className="text-sm text-text-secondary">Loading map...</p>
            </div>
          </div>
        )}
        
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="San Francisco Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${locationInfo?.coordinates?.lat},${locationInfo?.coordinates?.lng}&z=12&output=embed`}
          onLoad={handleMapLoad}
          className="border-0"
        />
      </div>
      {/* Location Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                <Icon name="MapPin" size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-sm text-text-secondary">
                  {locationInfo?.city}, {locationInfo?.state}
                  <br />
                  {locationInfo?.country}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                <Icon name="Clock" size={16} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Time Zone</h4>
                <p className="text-sm text-text-secondary">{locationInfo?.timezone}</p>
                <p className="text-xs text-text-secondary mt-1">
                  Current time: {new Date()?.toLocaleTimeString('en-US', {
                    timeZone: 'America/Los_Angeles',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mt-0.5">
                <Icon name="Calendar" size={16} className="text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Working Hours</h4>
                <p className="text-sm text-text-secondary">
                  Weekdays: {locationInfo?.workingHours?.weekdays}
                  <br />
                  Weekends: {locationInfo?.workingHours?.weekends}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center mt-0.5">
                <Icon name="Globe" size={16} className="text-warning" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Remote Work</h4>
                <p className="text-sm text-text-secondary">
                  Available for remote collaboration worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Currently Online</span>
            </div>
            <div className="text-xs text-text-secondary">
              Typically responds within 2-4 hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;