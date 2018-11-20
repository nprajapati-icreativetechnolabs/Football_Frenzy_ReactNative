
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
//Components
import HomeComponent from './src/components/HomeComponent';

import InfoComponent from './src/components/InfoComponent';
 import BetDetailComponent from './src/components/BetDetailComponent';
// import CloudComponent from './components/CloudComponent';

//Screen names
import { Home, Bet } from './src/data/screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Bet: {
        path: '/Bet',
        screen: InfoComponent,
    },

};
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
     drawerBackgroundColor: 'white',
    contentOptions: {
       activeTintColor: 'white',
   activeBackgroundColor: 'black',
   inactiveBackgroundColor: '#EFEFEF',
   inactiveTintColor: 'black',

   },
    order: [Home,Bet]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('Football_Frenzy', () => Football_Frenzy_new);
const Football_Frenzy_new = StackNavigator(
{
	First:{screen:App},

	Second: { screen: BetDetailComponent },


  Sixth:{
  		screen:App,
  		navigationOptions: ({navigation}) => ({
        header: null,
  	  headerMode: 'none'

      }),
  	},

}, { headerMode: 'none'
	 },
	 {
    portraitOnlyMode: true
}

);
