/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HomeComponent
*/
import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,StatusBar,Alert,Dimensions,Platform,StyleSheet,Text, View, FlatList,Image,TouchableOpacity, TouchableHighlight
} from 'react-native';

import {
  TabView,
  TabBar,
  SceneMap,
  type Route,
  type NavigationState,
} from 'react-native-tab-view';
import flatListData from '../data/flatListData';
import { Info } from '../data/screenNames';
import HeaderComponent from '../components/HeaderComponent';
import FlatListRowDataView from '../components/FlatListRowDataView';
import * as globalStyles from '../style/global';
import Util from '../Utils/Util';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

const backgroundColor = '#0067a7';
var {height, width} = Dimensions.get('window');

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
const FirstRoute = () => (

            <View style={[globalStyles.COMMON_STYLES.containerViewStyle]}>
                {/*main Back image view */}
                <View style={[globalStyles.COMMON_STYLES.mainViewBackImg]}>
                    {/* image view style*/}
                    <Image source={require('../assest/Football_ground_back.jpg')} style={[globalStyles.COMMON_STYLES.bgImageStyle]} />
                </View>
                        {/* FlatList Data View*/}
                      <FlatList
                            style={{marginTop:10}}
                            data={flatListData}
                                  renderItem={({item, index})=>{
                                      return (
                                      <FlatListItem item={item} index={index}>

                                      </FlatListItem>);
                                  }}>
                      </FlatList>

            </View>
);
export default class HomeComponent extends React.Component<*, State> {

      componentDidMount(){

        var utilObject = Util.getInstance();
        utilObject.setNavData(this.props.navigation);
      }


    /*Set Navigation Title and icon*/
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Image
                source={require('../assest/home-icon.png')}
                style={[globalStyles.COMMON_STYLES.navIconStyle]}
            />
        );
        return {drawerLabel, drawerIcon};
    }

    /*To set top tabbar state*/
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'UPCOMING' },
        { key: 'second', title: 'PAST' },
        { key: 'third', title: 'LIVE' },
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
            indicatorStyle={[globalStyles.COMMON_STYLES.indicatorStyle]}
            style={[globalStyles.COMMON_STYLES.tabarStyle]}
            tabStyle={[globalStyles.COMMON_STYLES.tabWidthStyle]}
            labelStyle={[globalStyles.COMMON_STYLES.labelStyle]}
          />
    );



    render() {
        const navigationKey=this.props.navigation;
        return (
          <View style={[globalStyles.COMMON_STYLES.containerViewStyle]}>
                    {/* Set status bar style*/}
                  <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"/>
                        {/* Top header view*/}
                      <HeaderComponent navigationRef={navigationKey} {...this.props} />
                        {/* Tab bar of upcoming Past and Live*/}
                      <TabView
                          style={[this.props.style]}
                          navigationState={this.state}
                          renderScene={SceneMap({
                            first: FirstRoute,
                            second: FirstRoute,
                            third: FirstRoute,})}
                          renderTabBar={this._renderTabBar}
                          onIndexChange={this._handleIndexChange}
                          initialLayout={initialLayout}
                    />
        </View>);
    }
}


class FlatListItem extends React.Component {
    render() {
        return (
			       <View>
                    {/* Title Upcoming Text View*/}
      			       <Text style={[globalStyles.COMMON_STYLES.textMainHeading]}>{this.props.item[0].time}</Text>
                              {/* Row Data View*/}
              			         <FlatList

                  			         data={this.props.item}
                                 renderItem={({item, index})=>{
                                      return (
                                  <FlatListItemRowData item={item} index={index}>

                                  </FlatListItemRowData>);}}>
              				       </FlatList>
              </View>
        );
    }
}


class FlatListItemRowData extends React.Component {
  render() {
        //
        const imagepath1=this.props.item.imgPath1;
        const imageVS=this.props.item.imgPath2;
        const imagePath2=this.props.item.imgPath3;
        const btnColorback=this.props.item.btnColor;
        //
  return (
        <FlatListRowDataView btnColor={btnColorback} imgpath1={imagepath1} imgVS={imageVS} imgpath3={imagePath2}{...this.props}/>

        );
    }
}
