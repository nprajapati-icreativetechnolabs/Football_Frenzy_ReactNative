import React, { Component } from 'react';
import { AppRegistry, StyleSheet,ScrollView,TouchableOpacity, Image,FlatList, Text, View, Alert, Platform } from 'react-native';
import * as globalStyles from '../style/global';

export default class BetDetailBottomViewComponent extends React.Component<*, State> {

 constructor(props)
 {
   super(props);

   this.state = { GridViewItems: [
     { key: '' },{key:'0'}, { key: '1' },{ key: '2' },{ key: '3' },{ key: '4' },{ key: '5' },{ key: '6' },{ key: '7' },{ key: '8' },{ key: '9' },
     { key: '1' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: ''},{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '2' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '3' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '4' },{ key: '' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '5' },{ key: '' },{ key: '' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '6' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '7' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '8' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },
     { key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '9' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },{ key: '' },

   ]};

 }

 GetGridViewItem (item) {

 Alert.alert(item);

 }
 _update = (text, index) => {
   this.setState({ GridViewItems: []});
   const newArray = [...this.state.GridViewItems];
   newArray[index].key = text;
   this.setState({ GridViewItems: newArray });
 }

 componentDidMount(){
 //  Alert.alert("Navigation :: "+this.props.navigation);
    this._update('11',53);
 }
 render() {


   return (

     <View style={styles.MainContainer}>

     <ScrollView>
         {/* main View */}
       <View style={[globalStyles.COMMON_STYLES.mainBackViewStyle]}>
               {/* TIcket view style */}
             <View style={[globalStyles.COMMON_STYLES.mainTicketViewStyle]}>
                       {/* ticket round shape back icon */}
                     <Image
                         source={require('../assest/ticket_back_icon.png')}
                         style={[globalStyles.COMMON_STYLES.ticketImgStyle]}  />
                       {/* Bar code image view */}
                       <Image
                         source={require('../assest/barcode.jpg')}
                         style={[globalStyles.COMMON_STYLES.barCodeImgStyle]}/>

                         <Text style={{color:'black',fontWeight:'bold',position:'absolute',fontSize:14,justifyContent:'center',marginTop:118,marginLeft:150}}>New York Giants</Text>



                         {/* Entry Fee main view */}
                       <View style={[globalStyles.COMMON_STYLES.entryFeeMainView]}>
                               {/* Entry Fee First view */}
                               <View style={[globalStyles.COMMON_STYLES.entryFeeTextView]}>

                                       <Text style={[globalStyles.COMMON_STYLES.entryFeeTextStyle]}>ENTRY FEE</Text>
                                       <Text style={[globalStyles.COMMON_STYLES.entryFeeTextStyle,{marginTop:4}]}>$ 1.00</Text>
                               </View>
                               {/* Entry Fee Second view */}
                               <View style={[globalStyles.COMMON_STYLES.entryFeeTextView]}>
                                       <Text style={[globalStyles.COMMON_STYLES.entryFeeTextStyle]}>LUCKY TICKET</Text>
                                       <Text style={[globalStyles.COMMON_STYLES.entryFeeTextStyle,{marginTop:4}]}>02</Text>
                               </View>

                     </View>
               </View>


               <View style={[globalStyles.COMMON_STYLES.bottomChartMainBack]}>
                     {/* left side chart view style */}
                   <View style={[globalStyles.COMMON_STYLES.sideImageViewStyle]}>
                     {/* Left Side image */}
                   <Image
                       source={require('../assest/Philadelphia_new.png')}
                       style={[globalStyles.COMMON_STYLES.imgLeftViewStyle]}
                   />
                   </View>
                   {/* Square view data view */}
                   <FlatList

                      data={ this.state.GridViewItems }

                      renderItem={({item,index}) =>

                      {

                      if (item.key === '11') {

                        return (
                          <TouchableOpacity style={[globalStyles.COMMON_STYLES.squareBoxStyle]} onPress={this.GetGridViewItem.bind(this, item.key)}>
                          <View>
                            <Image style={{width:20,height:20,alignSelf:'center',justifyContent:'center'}} source={require('../assest/Rating.png')}/>

                          </View>
                          </TouchableOpacity>
                        );
                      }else{
                        return (
                          <TouchableOpacity style={[globalStyles.COMMON_STYLES.squareBoxStyle]} onPress={this.GetGridViewItem.bind(this, item.key)}>
                          <View>
                            <Text  >{item.key} </Text>
                          </View>
                          </TouchableOpacity>
                        );
                      }
                    }
                    }
                 numColumns={11}  />
               </View>
       </View>
 </ScrollView>


        </View>

   );
 }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS) === 'ios' ? 20 : 0

},

GridViewBlockStyle: {

  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#00BCD4'

}
,

GridViewInsideTextItemStyle: {

   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',

 },

});
