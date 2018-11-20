import React from 'react-native'
import t from 'tcomb-form-native'
import ImagePicker from 'react-native-image-crop-picker';
import { View, Button } from 'native-base';
 
const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})
 

class App extends React.Component{

  click(){
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }
 
  render() {
    return (
    <View>
      <Button onPress={()=> this.click()}></Button>
    </View>
    )
  }
}