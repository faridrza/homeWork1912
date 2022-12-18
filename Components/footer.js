import { Image, StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style = {styles.header}>
        <Image style = {styles.headerPic} source={require('./assets/me.jpeg')} />
        <View style = {styles.headerText} >
          <Text style = {{fontSize : 20, fontWeight : 'bold'}}> Farid Rzayev </Text>
          <Text style = {{color : "gray"}}> @faridrza </Text>
          </View>
        <Image source={require('./assets/hamburger.png')}
        style={styles.headerIcon} />
      </View>
  )
}

const styles = StyleSheet.create(
    {
        header : {
            flex: 1.5,
            backgroundColor: '#ebf9ff',
            alignItems : 'center',
            justifyContent: 'space-between',
            flexDirection: "row",
            padding : 20,
            borderRadius : 30,
          },
          headerPic : {
             width: 40 , 
             height: 80, 
             borderRadius : 50,
             flex : 1,
             padding : 20,
             resizeMode: 'contain'
          },
          headerText : {
            flex: 4,
            padding : 20,
            backgroundColor: '#ebf9ff',
            justifyContent: 'space-between',
          },
          headerIcon : 
            { 
              width: 20 , 
              height: 20 ,
              flex : 1,
              resizeMode: 'contain'}
          ,
    }
)

export default Footer