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
import Search from './src/Search/Search';
import Notifications from './src/Screens/Notification/Notifications';
import UserProfile from  './src/Screens/Profile/UserProfile'
import Settings1 from './src/Settings/Settings1';
import ChangePassword from './src/Settings/ChangePassword';
import EditProfile from './src/Settings/EditProfile';
import ChangeDescription from './src/Settings/EditProfileSetting/ChangeDescription';
import ChangeUsername from './src/Settings/EditProfileSetting/ChangeUsername';
import ChangeProfilePic from './src/Settings/EditProfileSetting/ChangeProfilePic';
import AddPosts from './src/Screens/Mainscreen/AddPosts';
import Other_UserProfile from './src/Screens/Profile/Other_UserProfile';
import Chat_user from './src/Screens/ChatSection/Chat_user';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,
      animation:"slide_from_right"
      }}>
      <Stack.Screen name='MainPage' component={MainPage}/>
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
        
        <Stack.Screen name='All_Chats' component={All_Chats}
          options={{
            animation:"slide_from_bottom"
          }}
        />
       <Stack.Screen  name='Search' component={Search}  options={{
            animation:"slide_from_left"
          }}/>
       <Stack.Screen name='Notifications' component={Notifications}/>
       <Stack.Screen   name='UserProfile' component={UserProfile}  options={{
            animation:"slide_from_left"
          }}/>
          <Stack.Screen   name='Settings1' component={Settings1}  options={{
            animation:"slide_from_right"
          }}/>
           <Stack.Screen   name='ChangePassword' component={ChangePassword}  options={{
            animation:"slide_from_left"
          }}/>
           <Stack.Screen   name='EditProfile' component={EditProfile}  options={{
            animation:"slide_from_bottom"
          }}/>
           <Stack.Screen   name='ChangeUsername' component={ChangeUsername}  options={{
            animation:"slide_from_bottom"
          }}/>


           <Stack.Screen   name='ChangeDescription' component={ChangeDescription}  options={{
            animation:"slide_from_bottom"
          }}/>
         
         <Stack.Screen   name='ChangeProfilePic' component={ChangeProfilePic}  options={{
            animation:"slide_from_bottom"
          }}/>

        <Stack.Screen   name='AddPosts' component={AddPosts} />

        <Stack.Screen   name='Other_UserProfile' component={Other_UserProfile}  options={{
            animation:"slide_from_bottom"
          }}/>

<Stack.Screen   name='Chat_user' component={Chat_user}  options={{
            animation:"slide_from_bottom"
          }}/>

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
