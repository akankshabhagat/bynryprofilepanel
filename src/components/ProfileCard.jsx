import React, { useState } from 'react';
import './ProfileCard.css';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSave = () => {
    onEdit(profile.id, {
      name: editedProfile.name,
      location: editedProfile.location,
      description: editedProfile.description,
    });
    setIsEditing(false);
  };

  return (
    <div className="card-container">
      
      <img className="round" src={editedProfile.image} alt="user" />

      {isEditing ? (
        <div className="edit-form">
          <label>
            Name:
            <input type="text" name="name" value={editedProfile.name} onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={editedProfile.location} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={editedProfile.description} onChange={handleChange} />
          </label>
        </div>
      ) : (
        <>
          <h3>{profile.name}</h3>
          <h6>{profile.location}</h6>
          <p>{profile.description}</p>
        </>
      )}

      <div className="buttons">
        {!isEditing ? (
          <>
            <button className="primary" onClick={() => navigate(`/profile/${profile.id}`)}>View</button>
            <button className="primary ghost" onClick={() => setIsEditing(true)}>Edit</button>
          </>
        ) : (
          <button className="primary" onClick={handleSave}>Save</button>
        )}
        <button className="primary ghost" onClick={() => onDelete(profile.id)}>Delete</button>
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
