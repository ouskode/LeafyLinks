import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRoute } from '@react-navigation/native';

type UserProfile = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    bio: string | null;
};

export default function EditProfile() {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        bio: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = await SecureStore.getItemAsync('authToken');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch(new URL('users/me', process.env.EXPO_PUBLIC_API_URL).href, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erreur d\'authentification');
                }

                const data = await response.json();
                setUserProfile(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur de connexion :', error);
                Alert.alert("Erreur", "Une erreur s'est produite lors de la récupération des données.");
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleSave = async () => {
        try {
            const token = await SecureStore.getItemAsync('authToken');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(new URL('users/me', process.env.EXPO_PUBLIC_API_URL).href, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userProfile),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du profil');
            }

            Alert.alert("Succès", "Le profil a été mis à jour avec succès.");
        } catch (error) {
            console.error('Erreur de mise à jour :', error);
            Alert.alert("Erreur", "Une erreur s'est produite lors de la mise à jour du profil.");
        }
    };

    if (loading) {
        return <Text>Chargement...</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.section}>
                <Text style={styles.label}>Prénom</Text>
                <TextInput
                    style={styles.input}
                    value={userProfile.first_name}
                    onChangeText={(text) => setUserProfile({ ...userProfile, first_name: text })}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Nom</Text>
                <TextInput
                    style={styles.input}
                    value={userProfile.last_name}
                    onChangeText={(text) => setUserProfile({ ...userProfile, last_name: text })}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={userProfile.email}
                    onChangeText={(text) => setUserProfile({ ...userProfile, email: text })}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Téléphone</Text>
                <TextInput
                    style={styles.input}
                    value={userProfile.phone || ''}
                    onChangeText={(text) => setUserProfile({ ...userProfile, phone: text })}
                    keyboardType="phone-pad"
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Bio</Text>
                <TextInput
                    style={styles.input}
                    value={userProfile.bio || ''}
                    onChangeText={(text) => setUserProfile({ ...userProfile, bio: text })}
                    multiline
                />
            </View>
            <Button title="Sauvegarder" onPress={handleSave} />
        </ScrollView>
    );


}

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});