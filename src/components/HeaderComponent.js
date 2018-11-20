/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HeaderComponent => used for both Home, Info, Cloud, Settings
*/
import React, { Component } from 'react';
// import Button from 'react-native-button';
import PropTypes from 'prop-types';
import { DrawerNavigator } from 'react-navigation';
import {
    Text, Dimensions,View, StyleSheet,Image,TouchableOpacity,Platform, TouchableHighlight
} from 'react-native';
import * as globalStyles from '../style/global';



export default class HeaderComponent extends Component {
    render() {

        return (
          <View style={[globalStyles.COMMON_STYLES.mainHeaderViewStyle]}>
              {/* Header view */}
          		<View style={[globalStyles.COMMON_STYLES.headerViewStyle]}>
                      {/* Header Left view */}
                    <TouchableOpacity style={{ marginLeft: 14, marginTop: 3 }}
                       onPress={() => this.props.navigation.openDrawer()}>
                          {/* Left Drawer image view */}
                        <Image source={require('../assest/Menu_icon.png')} style={[globalStyles.COMMON_STYLES.imgDrawerStyle]} />
                    </TouchableOpacity>


                      {/* Bar code image view */}
                		 <View style={[globalStyles.COMMON_STYLES.topHeaderHeadingStyle]}>
                        <Text style={[globalStyles.COMMON_STYLES.headerTextStyle]}>Welcome, John</Text>
                    </View>

                      {/* Right side User imagew */}
                    <Image source={require('../assest/user_icon.png')} style={[globalStyles.COMMON_STYLES.headerUserImgStyle]} />

			       </View>
        </View>);
    }
}

HeaderComponent.proptypes = {
	title : PropTypes.String,
	rightIcon : PropTypes.String,
    navigationRef : PropTypes.String,
}
