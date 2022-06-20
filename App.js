import React, { useState } from "react";
import {  Image,Pressable,SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';


export const Button =({title})=>{
  return(
    <Pressable
    style={{backgroundColor:"#2CACDD",padding:20,margin:20,borderRadius:50}}
    onPress={()=>{
      alert("Sabbas Munna")
    }}>
      <Text style={{textAlign:'center',color:'white'}}>{title}</Text>
    </Pressable>
  )
}

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
   <SafeAreaView style={{flex:1}}>
 
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <View style={styles.view1} >
        <Pressable
        onPress={()=>{
          alert("Mango")
        }}>
        <Image style={{width:110,height:110}}
         source={{uri:"https://www.collinsdictionary.com/images/full/apple_158989157.jpg"}} />
        </Pressable>
       
      </View>
      <View style={styles.view2} >
      <Image style={{width:110,height:110}}
       
         source={{uri:"https://www.pharmamirror.com/wp-content/uploads/2013/06/Banna-as-Hepatitis-Oral-Vaccine.jpg"}} />
      </View>
      <View style={styles.view3} >
      <Image style={{width:110,height:110}}
         source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQK-hpm47mZPLjOqRC38t-sa3Kei6ajF83w&usqp=CAU"}} /> 
      </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <View style={styles.view1} >
        <Image style={{width:110,height:110}}
         source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Adom-IW7rB2P0sY85matQhT1JDRXX0pmWlj6w-zEjWMowpJgHvfX6ZX_PSsooid0Tsw&usqp=CAU"}}
          />
      </View>
      <View style={styles.view2} >
      <Image style={{width:110,height:110}}
       
         source={{uri:"https://img.pixers.pics/pho_wat(s3:700/FO/42/34/31/36/700_FO42343136_28a7a150d92d87fe3f76170a48ff95de.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/plush-blankets-mango-fruit.jpg.jpg"}} />
      </View>
      <View style={styles.view3} >
      <Image style={{width:110,height:110}}
         source={{uri:"https://image.shutterstock.com/image-photo/red-grapes-bunch-leaf-isolated-260nw-243713296.jpg"}} /> 
      </View>
    </View>

    
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
view1:{
   width:100,
   height:100,
   
  },
  view2:{
    width:100,
    height:100,
    margin:20
  },
  view3:{
    width:100,
    height:100,
   alignSelf:'flex-end'
  }
});

