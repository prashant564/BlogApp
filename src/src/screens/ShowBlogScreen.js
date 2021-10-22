import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const ShowBlogScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogid = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === blogid);

    return (<View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>);
};

ShowBlogScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>  (<TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <MaterialIcons style={{marginRight:15}} name="mode-edit" size={24} />
    </TouchableOpacity>),
    };
};

const styles = StyleSheet.create({});

export default ShowBlogScreen;