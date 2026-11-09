import React, { useState } from 'react';
import '../Style/ClubTrips.css';

const CLUB_TRIPS_DATA = [
  {
    id: 1,
    country: "Switzerland",
    clubName: "Alpine Wonders Association",
    tripTitle: "Eiger Trail & Hidden Valleys Eco-Trek",
    duration: "6 Days",
    groupSize: "Max 12 People",
    landscape: "Glaciers, Green Alpine Meadows, Waterfalls",
    description: "An organized non-profit trek aiming to explore and clean up high-altitude trails while documenting rare alpine flowers.",
    contactEmail: "expeditions@alpine-wonders.org"
  },
  {
    id: 2,
    country: "Japan",
    clubName: "Shinrin-Yoku Hiking Fellowship",
    tripTitle: "Ancient Cedar Forests of Yakushima",
    duration: "5 Days",
    groupSize: "Max 8 People",
    landscape: "Subtropical Moss Forests, Ancient Trees, Mist Ravines",
    description: "A cultural exploration group focused on deep immersion into ancient mossy forests and misty river streams.",
    contactEmail: "info@yakushima-fellowship.jp"
  },
  {
    id: 3,
    country: "Peru",
    clubName: "Andean Heritage Trails",
    tripTitle: "Cordillera Blanca High-Pass Journey",
    duration: "8 Days",
    groupSize: "Max 10 People",
    landscape: "Snow Peaks, Turquoise Lakes, High-Altitude Steppes",
    description: "A community-led exploration supporting local mountain guides and tracking environmental impact on retreating glaciers.",
    contactEmail: "travel@andeantrails.org"
  }
];

export default function ClubTrips() {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = ["All", ...new Set(CLUB_TRIPS_DATA.map(trip => trip.country))];

  const filteredTrips = selectedCountry === "All" 
    ? CLUB_TRIPS_DATA 
    : CLUB_TRIPS_DATA.filter(trip => trip.country === selectedCountry);

  return (
    <div className="club-trips-container">
    
      <header className="club-trips-header">
        <h1>Global Club Expeditions</h1>
        <p>Discover community-led hiking clubs and natural landscape excursions organized around the world.</p>
      </header>

      <div className="filter-wrapper">
        <label htmlFor="country-select">Filter by Country: </label>
        <select 
          id="country-select" 
          value={selectedCountry} 
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="country-dropdown-filter"
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className="trips-directory-grid">
        {filteredTrips.map(trip => (
          <div key={trip.id} className="club-trip-card">
            <div className="card-badge-country">{trip.country}</div>
            <span className="organizer-tag">👥 Hosted by: {trip.clubName}</span>
            <h3>{trip.tripTitle}</h3>
            
            <div className="trip-specs-row">
              <span>⏱️ {trip.duration}</span>
              <span>🎒 {trip.groupSize}</span>
            </div>

            <div className="landscape-highlight">
              <strong>🏞️ Landscape Focus:</strong> {trip.landscape}
            </div>

            <p className="trip-summary">{trip.description}</p>
            
            <a href={`mailto:${trip.contactEmail}`} className="club-contact-btn">
              Inquire About Joining
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
