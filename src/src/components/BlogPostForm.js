import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter the title of your blog:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content which you would like to add:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Save Blog" onPress={() => onSubmit(title, content)} />
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
