import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'FruitRev',
      //headerStyle: { backgroundColor: '#eee' }
      
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'teal',
    headerStyle: { backgroundColor: 'lightgreen', height: 80 }
  }
});

export default createAppContainer(HomeStack);

