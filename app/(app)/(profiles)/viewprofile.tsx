import React, { useEffect, useState } from 'react';

interface Profile {
    id: number;
    name: string;
    age: number;
    // Add more properties as needed
}

interface ViewProfileProps {
    id: number;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ id }) => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        // Fetch the profile data based on the provided ID
        const fetchProfile = async () => {
            try {
                const response = await fetch(`/api/users/${id}`);
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile Details</h2>
            <p>ID: {profile.id}</p>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            {/* Add more profile details here */}
        </div>
    );
};

export default ViewProfile;