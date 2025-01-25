import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        color: '#000',
        marginBottom: 30,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#ff007f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const Success = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Successful!</Text>
            <Text style={styles.message}>Thank you for registering.</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Go Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Success;
