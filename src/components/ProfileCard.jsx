import React from 'react';
import './ProfileCard.css';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src={profile.image} alt="user" />
      <h3>{profile.name}</h3>
      <h6>{profile.location}</h6>
      <p>{profile.description}</p>
      <div className="buttons">
        <button className="primary" onClick={() => navigate(`/profile/${profile.id}`)}>
          View
        </button>
        <button className="primary ghost" onClick={() => onEdit(profile.id)}>
          Edit
        </button>
        <button className="primary ghost" onClick={() => onDelete(profile.id)}>
          Delete
        </button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
