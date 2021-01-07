import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider} from './src/context/BlogContext';
import ShowBlogScreen from './src/screens/ShowBlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowBlogScreen,
  Create: CreateBlogScreen,
  Edit: EditBlogScreen 
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);
export default () => {
  return (<Provider>
      <App />
    </Provider>
    );
};