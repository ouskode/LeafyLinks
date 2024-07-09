import React, { useState } from 'react';

interface UserProfile {
    name: string;
    email: string;
    // Add more fields as needed
}

const EditProfile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: '',
        email: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your logic to update the user profile here
        console.log(userProfile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userProfile.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleInputChange}
                />
            </div>
            {/* Add more fields as needed */}
            <button type="submit">Save</button>
        </form>
    );
};

export default EditProfile;