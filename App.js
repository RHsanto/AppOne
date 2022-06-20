
import { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

// export const Button =({title})=>{
//   return(
//     <Pressable
//     style={{backgroundColor:"#2CACDD",padding:20,margin:20,borderRadius:50}}
//     onPress={()=>{
//       alert("Sabbas Munna")
//     }}>
//       <Text style={{textAlign:'center',color:'white'}}>{title}</Text>
//     </Pressable>
//   )
// }

export default function App() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);

  return (
   <SafeAreaView >
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back</Text>

  {/* here use text input */}
       <View style={{marginTop:20}}>
      <Text style={styles.label}>Email</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />

    <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text style={{textAlign:"right", padding:10}}>Forgot Password?</Text>
       </View>

  {/* here log in button */}
    <View>
     <Pressable 
     onPress={()=>{
      alert("it's not working")
     }}>
      <Text style={styles.logInBtn}>
        Log In
      </Text>
     </Pressable>
    </View>

    {/* social media section */}
      <View>
        <Text style={{textAlign:'center',padding:10,color:'#989EB3'}}>- - - - - - - - - OR - - - - - - - - - -</Text>
        <Text style={{padding:20,lineHeight:20}}>Join RHsanto with your favorite social media account</Text>
      
      <View style={styles.allView}>
        <View style={styles.view1}></View>
        <View style={styles.view2}><Text>5gggggggg</Text></View>
        <View style={styles.view3}><Text>5eeeeee</Text></View>
        <View style={styles.view4}><Text>5wwwwwwwwwww</Text></View>
      </View>

      </View>


      </View>
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  padding:20
  },
 title:{
  fontSize:28,
  fontWeight:'bold',
  padding:10
},
input: {
  margin: 12,
  borderWidth: 1,
  padding: 20,
 borderRadius:5 
},
label:{
marginLeft:15
},
logInBtn:{
  borderWidth: 1,
  margin: 12,
  padding: 20,
  color:'#fff',
  textAlign:'center',
  backgroundColor:'black'

},
allView:{
  flexDirection:'row',
  margin:10
 
},
view1:{
  flex:1,
  backgroundColor:'red',
  borderWidth: 1,
  borderRadius:5,
  margin:5
},
view2:{
  flex:1,
  backgroundColor:'yellow',
  borderWidth: 1,
  borderRadius:5,
  margin:5
},
view3:{
  flex:1,
  backgroundColor:'green',
  borderWidth: 1,
  borderRadius:5,
  margin:5
},
view4:{
  flex:1,
  backgroundColor:'blue',
  borderWidth: 1,
  borderRadius:5,
  margin:5
}
});

