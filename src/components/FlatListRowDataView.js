import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,StatusBar,Alert,Dimensions,Platform,StyleSheet,Text, View, FlatList,Image,TouchableOpacity, TouchableHighlight
} from 'react-native';

import flatListData from '../data/flatListData';
import * as globalStyles from '../style/global';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import Util from '../Utils/Util';
 class FlatListRowDataView extends React.Component<*, State>{


  static navigationOptions =
   {
  	header:null,
  	title: 'Login',

   headerStyle: {
              backgroundColor: 'black',
  			color:'white',
  			paddingLeft:20,

          },
  		 headerTitleStyle: {
              color: '#fff',
          },
  	headerLeft: null
  		/* headerBackTitleStyle: {
              color: '#fff',
          },
          headerTintColor: '#fff',*/
   };

  constructor(props) {
    super(props);


    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  /*on Bet Now Click*/
  handleClick = () =>
   {
        let utilObject = Util.getInstance();
       utilObject.getNavData().navigate("Second");
    //  console.warn('Clicked==='+ utilObject.getNavData().navigate("Second"));
    //  this.props.navigation.navigate('Second');

   }

  render() {
      return (

        <View style={{padding:10}}>

                  {/* Row main back view*/}
                <View style={[globalStyles.COMMON_STYLES.mainRowViewStyle]}>

                        {/* inside row view */}
                      <View style={[globalStyles.COMMON_STYLES.insideRowViewStyle]}>
                                  {/* Title text views */}
                                <View style={[globalStyles.COMMON_STYLES.titleTextRowViewStyle]}>
                                        <View style={[globalStyles.COMMON_STYLES.titleTextRowStyle]}>
                                                {/* First title text view */}
                                              <Text style={[globalStyles.COMMON_STYLES.firstTextStyle]}>
                                                  {this.props.item.title}
                                              </Text>
                                                {/* Second title text view */}
                                              <Text style={[globalStyles.COMMON_STYLES.secondTextStyle]}>
                                                  {this.props.item.title1}
                                              </Text>

                                        </View>
                                </View>

                                  {/* bet now & result button view */}
                               <View style={[globalStyles.COMMON_STYLES.btnViewBackStyle]}  >
                                      {/* Button text view */}
                                    <TouchableOpacity  onPress = { this.handleClick }>
                                    <Text style={[globalStyles.COMMON_STYLES.btnTextStyle,{backgroundColor:this.props.btnColor,borderColor: this.props.btnColor}]}  >
                                          {this.props.item.btnText}
                                    </Text>
                                    </TouchableOpacity>
                               </View>
                           </View>

                            {/* Bottom row view */}
                          <View style={[globalStyles.COMMON_STYLES.bottomMainView]} >
                                  {/* inside bottom view*/}
                                  <View style={[globalStyles.COMMON_STYLES.insideMainBackView]}>
                                        {/* First image view */}
                                        <View style={[globalStyles.COMMON_STYLES.firstRowImgViewStyle]}>
                                              {/* First image */}
                                              <Image style={[globalStyles.COMMON_STYLES.firstImgStyle]}source = {this.props.imgpath1} />
                                              {/* First image text view */}
                                              <Text style={[globalStyles.COMMON_STYLES.firstImgTextStyle]}>
                                                    {this.props.item.imgTitle1}
                                              </Text>

                                        </View>

                                          {/* VS image view */}
                                        <View style={[globalStyles.COMMON_STYLES.vsImageViewStyle]} >
                                            {/* VS Image */}
                                            <Image style={[globalStyles.COMMON_STYLES.vsImgStyle]} source = {this.props.imgVS}/>

                                        </View>

                                          {/* Second image view */}
                                        <View style={[globalStyles.COMMON_STYLES.secondImgViewStyle]}>
                                          {/* Second image*/}
                                          <Image style={[globalStyles.COMMON_STYLES.secondImgStyle]}source = {this.props.imgpath3} />
                                            {/* Second image text view */}
                                          <Text style={[globalStyles.COMMON_STYLES.secondImgTextStyle]}>
                                              {this.props.item.imgTitle2}
                                          </Text>

                                        </View>

                                  </View>
                            </View>

                </View>
          </View>

      );
    }
  }

  FlatListRowDataView.proptypes = {
  	btnColor : PropTypes.String,
  	imgpath1 : PropTypes.String,
    imgVS : PropTypes.String,
    imgpath3 : PropTypes.String,
  }
  export default FlatListRowDataView;
