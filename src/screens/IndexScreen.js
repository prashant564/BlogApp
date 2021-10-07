import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'; 
import * as Location from 'expo-location'; 

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    useEffect(()=> {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, [])

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('Show', {id: item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                                    <AntDesign  name="delete" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                            </TouchableOpacity>
                            );
                }}
             />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>  (<TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign  style={{ marginRight: 15 }} name="plus" size={24}/>
        </TouchableOpacity>),
    }; 
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;