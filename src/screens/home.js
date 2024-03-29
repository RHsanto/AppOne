
import { useState } from 'react';
import { Image, Pressable, SafeAreaView, 
  ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from '../components/Text/text';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';


export default function Home({navigation}) {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/font/Roboto-Bold.ttf'),
    'Poppins-ThinItalic': require('../../assets/font/Poppins-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>loading ....</Text>;
  }
  return (
   <SafeAreaView >
    <ScrollView>  
      <View style={styles.container}>
        <Text preset='h1'>Welcome back</Text>
       
  {/* here use text input */}
       <View style={{marginTop:20}}>
      <Text preset='h4' style={styles.label}>Email</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />

    <Text preset='h4' style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text preset='h4' style={{textAlign:"right", padding:10}}>Forgot Password?</Text>
       </View>

  {/* here log in button */}
    <View>
     <Pressable 
     onPress={()=>{
      navigation.navigate('LogIn')
     }}>
      <Text style={styles.logInBtn}>
        Log In
      </Text>
     </Pressable>
    </View>

    {/* social media section */}
      <View>
        <Text style={{textAlign:'center',padding:10,color:'#989EB3'}}>- - - - - - - - - OR - - - - - - - - - -</Text>
        <Text style={{padding:20,lineHeight:20}}>Join RHsanto with your favorite social media account:</Text>
      
      <View style={styles.allView}>
        <View style={styles.view1}><Image 
        style={{width:50,height:50,marginLeft:4}} 
        source={{uri:'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'}} /></View>
        <View style={styles.view2}><Image 
        style={{width:40,height:40,margin:7}} 
        source={{uri:'https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg'}} /></View>
        <View style={styles.view3}><Image 
        style={{width:50,height:50,marginLeft:4}} 
        source={{uri:'https://www.theglades.co.uk/wp-content/uploads/2020/02/media.idownloadblog.com-23104664601427570.png'}} /></View>
        <View style={styles.view4}><Image 
        style={{width:50,height:50,marginLeft:5}} 
        source={{uri:'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'}} /></View>
     
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
  padding:10,
  fontFamily: typography.primary,
  color:colors.purple,
  marginTop:spacing[10]
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
  backgroundColor:colors.black

},
allView:{
  flexDirection:'row',
  margin:10
 
},
view1:{
  flex:1,
  borderWidth: 1,
  borderRadius:10,
  margin:5,
  padding:5
},
view2:{
  flex:1,
  borderWidth: 1,
  borderRadius:10,
  margin:5,
  padding:5
},
view3:{
  flex:1,
  borderWidth: 1,
  borderRadius:10,
  margin:5,
  padding:5
},
view4:{
  flex:1,
  borderWidth: 1,
  borderRadius:10,
  margin:5,
  padding:5
}
});

