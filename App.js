import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";

const Root = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const App = createAppContainer(Root);
export default App;
