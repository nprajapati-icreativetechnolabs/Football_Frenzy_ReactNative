import { StyleSheet,Dimensions,Platform } from 'react-native';

export const BG_COLOR = '#FFFFFF';
export const TEXT_COLOR = '#373737';
export const BG_LINE_COLOR = '#c4c4c4';
const backgroundColor = 'white';
const backgroundColorTest = '#b5b5b5';
var {height, width} = Dimensions.get('window');
/*Set number of columns*/
const numColumns = 11;

export const COMMON_STYLES = StyleSheet.create({
      mainViewBackImg:{
            position: 'absolute',
            bottom:0
      },
      mainHeaderViewStyle:{
           height:Platform.OS === 'ios' ? 70 : 55,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor:'black'
      },
      headerViewStyle:{
          flex: 1,
          flexDirection: 'row',
      },
      topHeaderHeadingStyle:{
          justifyContent:'center',
          alignItems:'center',
          alignSelf:'center'
      },
      headerTextStyle:{
        width:Dimensions.get('window').width-80,
         textAlign:'center',
         alignSelf:'center',
         fontSize:18,
         marginTop:2,
         justifyContent:'center',
         color:'white',
      },
      headerUserImgStyle:{
          height:30,
          width:30,
          alignSelf:'center'
      },
      bgImageStyle:{
          flex:1,
          resizeMode:'contain'
        },
      navIconStyle:{
           width: 26,
           height: 26,
           tintColor: backgroundColor,
          //  inactiveTintColor: '#757575',
      },
      indicatorStyle: {
          backgroundColor: 'white',
      },
      indicatorBetStyle: {
          backgroundColor: '#008f19',
      },
      tabarStyle: {
          backgroundColor: 'black',
      },

      tabarBetStyle: {
          backgroundColor: 'white',
      },
      tabBetWidthStyle: {
          width: width / 4,
      },
      tabWidthStyle: {
          width: width / 3,
      },
      labelBetStyle: {
          color: '#008f19',
          fontWeight: '400',
      },
      labelStyle: {
          color: '#fff',
          fontWeight: '400',
      },
      containerViewStyle: {
          flex: 1,
      },
      testScreenBackViewStyle:{
          flex: 1,
          backgroundColor: backgroundColorTest,
          alignItems: 'center',
          justifyContent: 'center'
      },
      testScreenTextStyle:{
          fontWeight: 'bold',
          fontSize: 22,
          color: 'black'
      },
      textMainHeading:{

          paddingLeft:12,
          color:'white',
          marginBottom:12,
          fontSize:16,
          marginTop:5,
          fontWeight:'bold',
          textAlign:'center',
          alignSelf:'flex-start',
          marginLeft:5,
      },
      mainRowViewStyle:{
          height:200,
          alignItems:'center',
          flexDirection:'column',
          backgroundColor:'white',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 5,
          textAlign:'center',
          width:Dimensions.get('window').width-20
      },
      insideRowViewStyle:{
        // height:undefined,
          flexDirection:'row',
          backgroundColor:'white',
          width:Dimensions.get('window').width-40,
          flex:0.3
      },
      titleTextRowViewStyle:{
          flex: 0.65,
          flexDirection: 'column',
          marginLeft:15,
          alignItems: 'flex-start',
      },
      titleTextRowStyle:{
        //width: undefined,
          height: 50,
          backgroundColor: 'white',
          flexDirection:'column'
      },
      firstTextStyle:{
          color:'black',
          fontSize:15,
          marginTop:10
      },
      secondTextStyle:{
          color:'black',
          fontSize:13
      },
      btnViewBackStyle:{
          flex:0.35,
          marginTop:10
      },
      btnTextStyle:{
          height:35,
          color:'white',
          borderWidth: 1,
          borderRadius: 20,
          justifyContent:'center',
          alignItems:'center',
          paddingTop:7,
          textAlign: 'center',
          overflow: 'hidden',
          fontSize:14,
          marginLeft:30,
          marginRight:10
      },
      bottomMainView:{
           width:Dimensions.get('window').width-40,
          // height: undefined,
           backgroundColor: 'white',
           flexDirection:'row',
           flex:0.68,
           justifyContent:'center',
           alignSelf:'center'
      },
      insideMainBackView:{
            flex: 1,
            flexDirection: 'row',
            backgroundColor:'white'

      },
      imgDrawerStyle:{
            width:20,
            height:20,
      },
      firstRowImgViewStyle:{
             height: 138,
             backgroundColor: 'white',
             flex:0.4,
             alignSelf:'center',
             justifyContent:'center'
      },
      firstImgStyle:{
            height:60,
            width:60,
              resizeMode:'contain',
            alignSelf:'center'
      },
      firstImgTextStyle:{
            alignItems:'center',
            alignSelf:'flex-start',
            fontSize: 14,
            marginTop: 15,
            marginRight:10,
            color:'black',
            alignSelf:'center',
            textAlign:'center',
            fontWeight:'bold'
      },
      vsImageViewStyle:{
      //  width: undefined,
            height: 120,
            backgroundColor: 'white',
            flex:0.2,
            alignSelf:'flex-end',
            paddingTop:12
      },
      vsImgStyle:{
            height:40,
            width:40,
            marginLeft:18
      },
      secondImgViewStyle:{
      //  width: undefined,
            height: 138,
            backgroundColor: 'white',
            flex:0.4,
            alignSelf:'center',
            justifyContent:'center'
      },
      secondImgStyle:{
            height:60,
            width:60,
            resizeMode:'contain',
            alignSelf:'center'
      },
      secondImgTextStyle:{
            alignItems:'center',
            alignSelf:'flex-start',
            fontSize: 14,
            marginTop: 15,
            marginRight:10,
            color:'black',
            alignSelf:'center',
            textAlign:'center',
            fontWeight:'bold'
      },
      imgViewStyle:{
            height:200,
            width:Dimensions.get('window').width,

      },
      imgBackIconView:{
            padding:5
      },

      imgBackStyle:{
            width:20,
            height:20,
            marginLeft:10
      },

      headingTextStyle:{
            alignItems:'center',
            justifyContent:'center',
            fontSize: 16,
            marginRight:10,
            color:'white',
            alignSelf:'center',
            textAlign:'center',
            fontWeight:'bold'
      },
      venueTextStyle:{
            alignItems:'center',
            justifyContent:'center',
            fontSize: 16,
            marginRight:10,
            marginTop:2,
            color:'white',
            alignSelf:'center',
            textAlign:'center',
            fontWeight:'bold'
      },
      firstTeamImageStyle:{
             height: 100,

             flex:0.4,
             alignSelf:'center',
             justifyContent:'center'
      },
      firstTeamImgStyle:{
              height:40,
              width:40,
              alignSelf:'center'
      },
      firstTeamImgTextStyle:{
              alignItems:'center',
              alignSelf:'flex-start',
              fontSize: 13,
              marginTop: 15,
              marginRight:10,
              color:'white',
              alignSelf:'center',
              textAlign:'center',
              fontWeight:'bold'
      },
      vsTeamImgStyle:{
              height:30,
              width:30,
              marginLeft:18
      },
      vsTeamImageViewStyle:{
      //  width: undefined,
              height: 82,
              flex:0.2,
              alignSelf:'flex-end',
              paddingTop:12
      },
      secondTeamImgStyle:{
              height:40,
              width:40,
              alignSelf:'center'
      },
      secondTeamImgTextStyle:{
              alignItems:'center',
              alignSelf:'flex-start',
              fontSize: 13,
              marginTop: 15,
              color:'white',
              alignSelf:'center',
              textAlign:'center',
              fontWeight:'bold'
      },
      secondTeamImgViewStyle:{
      //  width: undefined,
              height: 100,
              flex:0.4,
              alignSelf:'center',
              justifyContent:'center'
      },
      bottomTeamMainView:{
              width:Dimensions.get('window').width-40,
              // height: undefined,

              flexDirection:'row',
              marginBottom:0,
              marginTop:10,
              alignSelf:'center'
      },

      insideMainTeamBackView:{
              flex: 1,
              flexDirection: 'row',
      },
      yourTcktViewStyle:{

              width:Dimensions.get('window').width,
              height:40,
              marginTop:15,
              marginLeft:15
      },
      yourTcktsTextStyle:{
              fontSize:16,
              color:'black',
              alignSelf:'flex-start',
              fontWeight:'bold',
      },
      bottomDataView:{
              width:Dimensions.get('window').width,
              flex:1,
              flexDirection:'row'
      },
      ticketImgStyle:{
              width:Dimensions.get('window').width-30,
              alignSelf:'center',
              marginTop:10,
              height:140,
              position:'absolute',
              top:0,
              marginLeft:15
      },
      barCodeImgStyle:{
              width:75,
              height:75,
              marginLeft:40,
              marginTop:25,
      },
      entryFeeMainView:{
              width:Dimensions.get('window').width,
              height:50,
              marginTop:36,
              flex:1,
              flexDirection:'row',
              marginRight:15
      },
      entryFeeTextView:{
              height:50,
              flex:0.45,
              justifyContent:'center'
      },
      entryFeeTextStyle:{
              fontSize:14,
              color:'black',
              fontWeight:'bold',
              alignSelf:'center'
      },
      mainBackViewStyle:{
              width:Dimensions.get('window').width,
              flex:1,
              flexDirection:'column'
      },
      mainTicketViewStyle:{
              width:Dimensions.get('window').width,
              flex:1,
              flexDirection:'row'
      },
      bottomChartMainBack:{
              backgroundColor:'white',
              width:Dimensions.get('window').width-30,
              flexDirection:'row',
              marginLeft:16,
              marginTop:53,
              marginBottom:10
      },
      sideImageViewStyle:{
              flex:0.15,
              marginTop:30,
              justifyContent:'center'
      },
      imgLeftViewStyle:{
              alignSelf:'center',
              justifyContent:'center'
      },
      squareBoxStyle:{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              borderColor:'#b5b5b5',
              borderWidth: 1,
              height: Dimensions.get('window').width / numColumns, // approximate a square
      },

});
