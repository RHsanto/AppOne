import { StatusBar } from 'expo-status-bar';
import { Button, Image,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
   <SafeAreaView>
    <ScrollView>
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
      source={{uri:"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"}}
      resizeMode="cover" />
     </View>
     <View style={{marginLeft:120,marginTop:30 }}>
      <Image style={{height:150,width:150}}
       source={{uri:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"}}/>
     </View>

     <View>
     <Button
  title="Learn More"
  color="black"/>
     </View>
    </ScrollView>
   </SafeAreaView>
  );
}



