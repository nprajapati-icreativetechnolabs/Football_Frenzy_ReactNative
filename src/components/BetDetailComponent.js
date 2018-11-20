/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
InfoComponent
*/
import React, { Component } from 'react';
import { Info } from '../data/screenNames';

import {
    Text, View, Image, TouchableOpacity,TouchableHighlight,ScrollView,Dimensions,StyleSheet,FlatList
} from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  type Route,
  type NavigationState,
} from 'react-native-tab-view';
var {height, width} = Dimensions.get('window');
import HeaderComponent from '../components/HeaderComponent';
import BetDetailBottomViewComponent from '../components/BetDetailBottomViewComponent';
import Util from '../Utils/Util';
import * as globalStyles from '../style/global';

const backgroundColor = '#007256';
//
type State = NavigationState<
  Route<{
    key: string,
    title: string,
  }>
>;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class BetDetailComponent extends Component {

  componentDidMount(){
  //  Alert.alert("Navigation :: "+this.props.navigation);
    var utilObject = Util.getInstance();
    utilObject.setNavData(this.props.navigation);
  }

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  /*on Back Click*/
  handleBackClick = () =>
   {
        let utilObject = Util.getInstance();
       utilObject.getNavData().goBack();


   }
    /*To set drawer icon and title*/
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Bet';
        let drawerIcon = () => (
            <Image
                source={require('../assest/info-icon.png')}
                style={[globalStyles.COMMON_STYLES.navIconStyle]}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    //
    state = {
      index: 0,
      routes: [
        { key: 'first', title: '$1' },
        { key: 'second', title: '$5' },
        { key: 'third', title: '$25' },
        { key: 'fourth', title: '$50' },
        // { key: 'chat', title: 'Chat' },
      ],
    };

    /*Handle State index of tabbar*/
    _handleIndexChange = index =>
      this.setState({
        index,
      });

      /*Set tab data and style*/
    _renderTabBar = props => (
          <TabBar
            {...props}
            // scrollEnabled
            indicatorStyle={[globalStyles.COMMON_STYLES.indicatorBetStyle]}
            style={[globalStyles.COMMON_STYLES.tabarBetStyle]}
            tabStyle={[globalStyles.COMMON_STYLES.tabBetWidthStyle]}
            labelStyle={[globalStyles.COMMON_STYLES.labelBetStyle]}
          />
    );
    //


    render() {

        return (

          <View style={{flex: 1,backgroundColor:'#e3e3e3'}}>

                          {/* Top image view */}
                          <View style={[globalStyles.COMMON_STYLES.imgViewStyle]}>


                                    {/* Image icon view */}
                                    <View style={[globalStyles.COMMON_STYLES.imgBackIconView]}>

                                    <Image
                                        source={require('../assest/football_crowd.jpg')}
                                        style={{position:'absolute',top:0,width:Dimensions.get('window').width,height:200}}
                                    />
                                    {/* Back Image*/}
                                    <TouchableOpacity onPress={this.handleBackClick}>
                                    <Image
                                        source={require('../assest/white_back.png')}
                                        style={[globalStyles.COMMON_STYLES.imgBackStyle]}  />
                                    </TouchableOpacity>
                                    </View>

                                    <View>
                                      {/* main Headig Text*/}
                                      <Text style={[globalStyles.COMMON_STYLES.headingTextStyle]}>Champions League</Text>
                                        <Text style={[globalStyles.COMMON_STYLES.venueTextStyle]}>XYZ Stadium League - Mon,25 July -19:00</Text>
                                    </View>


                                    {/* Bottom row view */}
                                    <View style={[globalStyles.COMMON_STYLES.bottomTeamMainView]} >
                                          {/* inside bottom view*/}
                                          <View style={[globalStyles.COMMON_STYLES.insideMainTeamBackView]}>
                                                {/* First image view */}
                                                <View style={[globalStyles.COMMON_STYLES.firstTeamImageStyle]}>
                                                      {/* First image */}
                                                      <Image style={[globalStyles.COMMON_STYLES.firstTeamImgStyle]}source = {require('../assest/img_1.png') }/>
                                                      {/* First image text view */}
                                                      <Text style={[globalStyles.COMMON_STYLES.firstTeamImgTextStyle]}>
                                                          New York Giants
                                                      </Text>

                                                </View>


                                                <View style={[globalStyles.COMMON_STYLES.vsTeamImageViewStyle]} >
                                                    {/* VS Image */}
                                                    <Image style={[globalStyles.COMMON_STYLES.vsTeamImgStyle]} source = {require('../assest/VS_white.png')}/>

                                                </View>

                                                  {/* Second image view */}
                                                <View style={[globalStyles.COMMON_STYLES.secondTeamImgViewStyle]}>
                                                  {/* Second image*/}
                                                  <Image style={[globalStyles.COMMON_STYLES.secondTeamImgStyle]}source = {require('../assest/img_2.png')} />
                                                    {/* Second image text view */}
                                                  <Text style={[globalStyles.COMMON_STYLES.secondTeamImgTextStyle]}>
                                                      Philadelphia Eagles
                                                  </Text>

                                                </View>

                                          </View>
                                </View>
                          </View>

                                <View style={[globalStyles.COMMON_STYLES.yourTcktViewStyle]}>
                                      {/* Your ticket view row view */}
                                    <Text style={[globalStyles.COMMON_STYLES.yourTcktsTextStyle]}>YOUR TICKETS</Text>
                                </View>
                                  {/* Bottom view */}
                                <View style={[globalStyles.COMMON_STYLES.bottomDataView]}>

                                          <TabView
                                              style={[this.props.style]}
                                              navigationState={this.state}
                                              renderScene={SceneMap({
                                                first: BetDetailBottomViewComponent,
                                                second: BetDetailBottomViewComponent,
                                                third: BetDetailBottomViewComponent,
                                                fourth:BetDetailBottomViewComponent})}
                                              renderTabBar={this._renderTabBar}
                                              onIndexChange={this._handleIndexChange}
                                              initialLayout={initialLayout}
                                          />
                                </View>

              </View>
        );
    }
}
