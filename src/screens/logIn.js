import React from "react";
import { Pressable, View } from "react-native";
import Text from "../components/Text/text";
import {useNavigation} from '@react-navigation/native';

export default function LogIn({backBtn}){
  const navigation = useNavigation();
return (
  <View>
    {backBtn && (
      <Pressable
      onPress={()=>{
        navigation.goBack();
      }}>
      <AntDesign name="banckward" size={24} color="black" />
      </Pressable>
    )}
   
    <Text style={{margin:20}}>Hello LogIn</Text>
    
    </View>
)
}