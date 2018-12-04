import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import EarthquakeScreen from "./components/Earthquakes";

const Root = createStackNavigator(
  {
    Home: HomeScreen,
    Earthquakes: EarthquakeScreen,
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
