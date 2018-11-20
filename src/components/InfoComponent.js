/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
CloudComponent
*/
import React, { Component } from 'react';
import { Info } from '../data/screenNames';
import HeaderComponent from '../components/HeaderComponent';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import * as globalStyles from '../style/global';

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Test Screen';
        let drawerIcon = () => (
            <Image
                source={require('../assest/info-icon.png')}
                style={[globalStyles.COMMON_STYLES.navIconStyle]}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (
          <View style={[globalStyles.COMMON_STYLES.containerViewStyle,{flexDirection: 'column'}]}>
            {/* Header view */}
            <HeaderComponent {...this.props} />
            {/* main Screen back view */}
            <View style={[globalStyles.COMMON_STYLES.testScreenBackViewStyle]}>
                <Text style={[globalStyles.COMMON_STYLES.testScreenTextStyle]}>
                    This is test Screen
                </Text>
            </View>
        </View>);
    }
}
