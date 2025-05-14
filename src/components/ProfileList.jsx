import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';

import initialProfiles from '../data/profiles';


const ProfileList = ({ searchTerm }) => {
  const [profiles, setProfiles] = useState(initialProfiles);

  const handleAdd = () => {
    const newProfile = {
      id: Date.now(),
      name: 'New User',
      location: 'Unknown',
      description: 'Newly added user',
      image: 'https://randomuser.me/api/portraits/men/79.jpg',
      skills: ['Skill1', 'Skill2'],
    };
    setProfiles([newProfile, ...profiles]);
  };

 const handleEdit = (id, updatedFields) => {
  const updatedProfiles = profiles.map((profile) =>
    profile.id === id ? { ...profile, ...updatedFields } : profile
  );
  setProfiles(updatedProfiles);
};



  const handleDelete = (id) => {
    const filteredProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(filteredProfiles);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-list">
      <button className="add-button" onClick={handleAdd}>
        Add Profile
      </button>
      <div className="cards-container">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
