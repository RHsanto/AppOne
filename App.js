import { StatusBar } from 'expo-status-bar';
import { Button, Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
   <SafeAreaView>
     <View style={{width:150,height:50,padding:15, margin:10,backgroundColor:"#6047EC",marginLeft:115,borderRadius:10}}>
     <Text style={{textAlign:'center',color:'#fff'}}>Hello World</Text>
     </View>
     <View style={{marginLeft:170,marginTop:30 }}>
     <Image style={{height:50,width:50}}
      source={require('./assets/favicon.png')}
      resizeMode="contain" />
     </View>
     <View
      style={{
        width:150,
        height:50,
        padding:15,
        margin:20, 
        backgroundColor:"#1EC6DC",
        marginLeft:115,
        borderRadius:10}}>
     <Text style={{textAlign:'center',color:'black'}}>Hello Forest</Text>
     </View>
    
     <View style={{marginLeft:120,marginTop:30 }}>
     <Image style={{height:150,width:150}}
      source={{uri:"https://play-lh.googleusercontent.com/WRxEKrZo1bIJhgXZLy7u_uDiwjczoc-NJwntCqaFQpAhmZ8KdXtvCYqHpQGk-KYlUw"}}
      resizeMode="cover" />
     </View>
     <View style={{marginLeft:120,marginTop:30 }}>
     <Image style={{height:150,width:150}}
      source={{uri:"https://play-lh.googleusercontent.com/hMqO4OdfmYbEOTf6M7ACXPHAShk78c0C28E2au-pV1HhSeK7WrzgwE43NxJelELbE_M"}}
      resizeMode="cover" />
     </View>

     <View>
     <Button
  title="Learn More"
/>
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
