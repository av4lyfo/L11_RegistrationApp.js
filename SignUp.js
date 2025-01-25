import React,{useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255,0.8)',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#ff007f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});



const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

   return (
    <ImageBackground
        source={{uri: 'https://th.bing.com/th/id/OIP.D8UnTwZJ4ezZKt2qMkzaXAHaNK?rs=1&pid=ImgDetMain',}}
        style={styles.background}>

        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>Registration</Text>

            <TextInput
                style={styles.input}
                placeholder= "Username"
                placeholderTextColor="#ccc"
                onChangeText={(text)=>setUsername(text)}/>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                onChangeText={(text)=>setEmail(text)}/>

            <TextInput
                style={styles.input}
                placeholder = "Phone Number"
                placeholderTextColor="#ccc"
                onChangeText={(text)=>setPhoneNumber(text)}/>

            <TouchableOpacity
                style={styles.button}
                onPress={()=>{const newUser = { username, email, phoneNumber };

                    fetch('https://jsonhost.com/json/1f50ce8a68793082612a4ea51033b28a')
                        .then((response) => response.json())
                        .then((existingData) => {
                            existingData.push(newUser);
                            fetch('https://jsonhost.com/json/1f50ce8a68793082612a4ea51033b28a', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: 'ag2coura8veh3k4tmvead9satx0yzher',
                                },
                                body: JSON.stringify(existingData),
                            }).then(() => {
                                navigation.navigate('Success');
                            });
                        });
                }}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
   );
};



export default SignUp;
