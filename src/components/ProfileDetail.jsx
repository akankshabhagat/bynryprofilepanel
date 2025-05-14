import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();

  // Simulated profile data (would normally fetch this from a backend or context/store)
  const profile = {
    id,
    name: 'Ricky Park',
    location: 'New York',
    description: 'User interface designer and front-end developer',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
    skills: ['UI / UX', 'Front End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    lat: 40.7128,
    lng: -74.0060,
  };

  return (
    <div className="profile-detail">
      <img src={profile.image} alt={profile.name} className="detail-image" />
      <h2>{profile.name}</h2>
      <h4>{profile.location}</h4>
      <p>{profile.description}</p>
      <h5>Skills:</h5>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div className="map-container">
        <iframe
          title="map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps?q=${profile.lat},${profile.lng}&hl=es;z=14&output=embed`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProfileDetail;
