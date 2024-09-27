import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const NewMovie = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSave = () => {
        if (!name || !quantity || !price) {
            Alert.alert('Error', 'Por favor complete todos los campos requeridos.');
        } else {
            const newMovie = {
                name: name,
                quantity: parseInt(quantity),
                price: parseFloat(price),
                image: image || null, // Optional field
                createdAt: new Date().toISOString(),
            };
            console.log('New Movie:', newMovie);
            // Add further logic to save the new movie (e.g., send it to a server or API)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Añadir Nueva Película</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la película"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Cantidad disponible"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="URL de la imagen (opcional)"
                value={image}
                onChangeText={setImage}
                placeholderTextColor="#888"
            />
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={styles.previewImage}
                />
            ) : null}
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Guardar Película</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#00bfff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    previewImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 8,
    },
});

export default NewMovie;
