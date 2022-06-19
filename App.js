import { StatusBar } from 'expo-status-bar';
import { Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
   <SafeAreaView>
     <View style={{width:150,height:50,padding:15, margin:10,backgroundColor:"#6047EC",marginLeft:115,borderRadius:10}}>
     <Text style={{textAlign:'center',color:'#fff'}}>Hello World</Text>
     </View>
     <View style={{width:150,height:50,padding:15,margin:10, backgroundColor:"#6047EC",marginLeft:115,borderRadius:10}}>
     <Text style={{textAlign:'center',color:'#fff'}}>Hello World</Text>
     </View>
     <View style={{marginLeft:170,marginTop:30 }}>
     <Image style={{height:50,width:50}} source={require('./assets/favicon.png')} />
     </View>
     <View style={{marginLeft:120,marginTop:30 }}>
     <Image style={{height:150,width:150}}
      source={{uri:"https://play-lh.googleusercontent.com/WRxEKrZo1bIJhgXZLy7u_uDiwjczoc-NJwntCqaFQpAhmZ8KdXtvCYqHpQGk-KYlUw"}} />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
