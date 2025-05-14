import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetail.css';

const ProfileDetail = ({ profiles }) => {
  const { id } = useParams();
const profile = profiles.find((p) => p.id.toString() === id);

if (!profile) {
  return <div>Profile not found.</div>;
}


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
  style={{ border: 0 }}
  src={`https://www.google.com/maps?q=${encodeURIComponent(profile.location)}&output=embed`}
  allowFullScreen
></iframe>

      </div>
    </div>
  );
};

export default ProfileDetail;
