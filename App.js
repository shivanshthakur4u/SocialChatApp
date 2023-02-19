import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/Screens/LoginSignUp/Login/Login";
import Signup_EnterEmail from './src/Screens/LoginSignUp/Signup/Signup_EnterEmail';
import Signup_AccountCreated from './src/Screens/LoginSignUp/Signup/Signup_AccountCreated';
import Signup_ChoosePassword from './src/Screens/LoginSignUp/Signup/Signup_ChoosePassword';
import Signup_ChooseUsername from './src/Screens/LoginSignUp/Signup/Signup_ChooseUsername';
import Signup_EnterVerificationCode from './src/Screens/LoginSignUp/Signup/Signup_EnterVerificationCode';
import FogotPassword_EnterEmail from './src/Screens/LoginSignUp/ForgotPassword/FogotPassword_EnterEmail';
import FogotPassword_ChoosePassword from './src/Screens/LoginSignUp/ForgotPassword/FogotPassword_ChoosePassword';
import FogotPassword_EnterVerificationCode from './src/Screens/LoginSignUp/ForgotPassword/FogotPassword_EnterVerificationCode';
import FogotPassword_AccountRecovered from './src/Screens/LoginSignUp/ForgotPassword/FogotPassword_AccountRecovered';
import  MainPage from './src/Screens/Mainscreen/MainPage';
import All_Chats from './src/Screens/ChatSection/All_Chats';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,
      animation:"slide_from_right"
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup_EnterEmail' component={Signup_EnterEmail}/>
        <Stack.Screen name='Signup_EnterVerificationCode' 
        component={Signup_EnterVerificationCode}/>
        <Stack.Screen name='Signup_ChooseUsername' component={Signup_ChooseUsername}/>
        <Stack.Screen name='Signup_ChoosePassword' component={Signup_ChoosePassword}/>
        <Stack.Screen name='Signup_AccountCreated' component={Signup_AccountCreated}/>

        <Stack.Screen name='FogotPassword_EnterEmail' component={FogotPassword_EnterEmail}/>
        <Stack.Screen name='FogotPassword_EnterVerificationCode' component={FogotPassword_EnterVerificationCode}/>
        <Stack.Screen name='FogotPassword_ChoosePassword' component={FogotPassword_ChoosePassword}/>
        <Stack.Screen name='FogotPassword_AccountRecovered' component={FogotPassword_AccountRecovered }/>
        <Stack.Screen name='MainPage' component={MainPage}/>
        <Stack.Screen name='All_Chats' component={All_Chats}
          options={{
            animation:"slide_from_bottom"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
