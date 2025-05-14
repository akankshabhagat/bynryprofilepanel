import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';

const initialProfiles = [
   {
    id: 1,
    name: 'Harvey Specter',
    location: 'New York',
    description: 'Corporate lawyer and closer. Expert in negotiation and strategy.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    skills: ['Litigation', 'Corporate Law', 'Negotiation', 'Leadership', 'Mentorship']
  },
  {
    id: 2,
    name: 'Donna Paulsen',
    location: 'New York',
    description: 'Chief Operating Officer with unparalleled intuition and people skills.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['Management', 'Communication', 'Problem Solving', 'Legal Admin']
  },
  {
    id: 3,
    name: 'Louis Litt',
    location: 'New York',
    description: 'Senior Partner specializing in corporate law and finance.',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    skills: ['Tax Law', 'Financial Law', 'Loyalty', 'Cats', 'Micromanagement']
  },
  {
    id: 4,
    name: 'Mike Ross',
    location: 'New York',
    description: 'Legal associate with photographic memory and passion for justice.',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    skills: ['Legal Research', 'Litigation', 'Memory Recall', 'Empathy', 'Fraud Detection']
  },
  {
    id: 5,
    name: 'Rachel Zane',
    location: 'New York',
    description: 'Paralegal turned lawyer. Detail-oriented and driven.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    skills: ['Paralegal Expertise', 'Research', 'Constitutional Law', 'Ethics']
  }
];

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

  const handleEdit = (id) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === id ? { ...profile, name: 'Updated Name' } : profile
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
