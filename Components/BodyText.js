import { Image, StyleSheet, Text, View } from 'react-native';

const BodyText = () => {
  return (
    <View style = {styles.body}>
          <Text style = {{fontSize : 26, fontWeight : 'bold'}}>Follow New Friends</Text>
          <Text style = {{color : "gray"}}>Follow Friends You Know</Text>
      </View>
  )
}

const styles = StyleSheet.create(
    {
       body : {
            flex: 1,
            alignItems : 'center',
            padding : 20,
          },
    }
)

export default BodyText