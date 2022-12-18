import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './Components/BodyText.js';
import Footer from './Components/footer.js';
import  Header  from './Components/Header.js';
import Users from './Components/users.js';






export default function App() {
  const usersObject=[
    {
        fullName : "Devon Conway",
        userName : "@devonconway",
        status : false
    },
    {
        fullName : "Jaramillo",
        userName : "@devonconway"
        ,
        status : false
    },
    {
        fullName : "Smith 07",
        userName : "@devonconway",
        status : true
    },
    {
        fullName : "Williams De",
        userName : "@devonconway",
        status : false
    },
    {
        fullName : "Edward Rome",
        userName : "@devonconway",
        status : false
    }
  ]
  return (
    
    <View style={styles.container}>

      <Header></Header>
      <BodyText></BodyText>
     {usersObject.map(user=><Users fullName={user.fullName} status = {user.status}></Users>)}
      <Footer style = {styles.footer}></Footer>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer : {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  }
});
