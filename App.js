import { StatusBar } from 'expo-status-bar';
import {  Image,Pressable,SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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
  return (
   <SafeAreaView>
    <ScrollView>
    <View style={{width:150,height:50,padding:15, margin:10,backgroundColor:"#6047EC",marginLeft:115,borderRadius:10}}>
     <Text style={{textAlign:'center',color:'#fff'}}>Hello World s</Text>
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

     

     <Pressable onPress={()=>{
      alert("Press")
     }
     }>
      <View style={{margin:20}}>
     <Text style={{textAlign:'center',color:'black',backgroundColor:'#BD76BF',padding:20}}>Hello Forest</Text>
     </View>
     </Pressable>

     <TouchableOpacity
        style={styles.button}
       onPress={()=>{
        alert('Hello world')
       }}
      >
        <Text style={{ color:"#fff"}}>Press Here</Text>
      </TouchableOpacity>

      <Button title="Click more" />
      <Button title="Click Korlam" />
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#4630EB",
    padding: 20,
    margin: 20,
   
  }
});

