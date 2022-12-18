import { Image, StyleSheet, Text, View } from 'react-native';


const Users = (props) => {
  return (
    <View style = {styles.header}>
        <Image style = {styles.headerPic} source={require('./assets/user.jpg')} />
        <View style = {styles.headerText} >
          <Text style = {{fontSize : 12, fontWeight : 'bold'}}> {props.fullName} </Text>
          <Text style = {{fontSize : 8,  color : "gray"}}> @faridrza </Text>
          </View>
        <View style = { props.status ? styles.headerIcon2 : styles.headerIcon}>
          <Text style = {{fontSize : 10, color : "white"}}>Following</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create(
    {
        header : {
            flex: 1,
            alignItems : 'center',
            justifyContent: 'space-between',
            flexDirection: "row",
            padding : 20,
          },
          headerPic : {
             width: 40 , 
             height: 50, 
             borderRadius : 50,
             flex : 1,
             padding : 20,
             resizeMode: 'contain'
          },
          headerText : {
            flex: 10,
            padding : 20,

          },
          headerIcon : 
            { 
              backgroundColor : "#4fc3f5",
              alignItems : 'center',
              borderRadius : 20,
              width: 60 , 
              height: 20 ,
              flex : 4,
            }
          ,
          headerIcon2 : 
            { 
              backgroundColor : "#daf3ff",
              alignItems : 'center',
              borderRadius : 20,
              width: 60 , 
              height: 20 ,
              flex : 4,
            }
    }
)

export default Users