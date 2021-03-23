/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Text, View, TextInput, StyleSheet, ImageBackground} from 'react-native';

 
 const mainpage = () => {

  return(
   
    <View style= {styles.container}> 
      <ImageBackground style={styles.ImagebackgroundStyle} source={require("./image/backgoundstrawberry.jpeg") }>
          <View style={styles.header}>
            <Text style={styles.title}>좋은 하루 입니다</Text>
            <Text> 오늘의 항해는 준비가 되셨나요? 선장님 :)</Text>
          </View>
          <View> 
            <View><Text style = {styles.subtitleText}>My Yearly Goal</Text></View>
            <View><TextInput/></View>
          </View>
          <View > 
            <View><Text style = {styles.subtitleText}>My Monthly Goal</Text></View>
            <View><TextInput/></View>
          </View>
          <View > 
            <View><Text style = {styles.subtitleText}>My Today Goal</Text></View>
            <View><TextInput/></View>
          
          </View> 
        
        </ImageBackground>
    </View>
    
    
    
    )

 }
 const styles = StyleSheet.create({
  container : {
    flex : 1
    },
  header:{

  },
  content:{

  }
  ,
  footer:{

  }
  ,title:{
    fontWeight: "bold"
  },
  subtitleText:{
  },
  contentText: {
    alignItems: "center"
  },
  ImagebackgroundStyle:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }

 })
 export default mainpage;