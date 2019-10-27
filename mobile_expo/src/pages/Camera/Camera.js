import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class Cam extends React.Component {
  state = {
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    barcodeScanning: false,
    faceDetecting: false,
    faces: [],
    hasPermission: null,
    type: Camera.Constants.Type.back,
  };


  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const location = await Permissions.askAsync(Permissions.LOCATION);
    const write = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const hasPermission = (camera.status === 'granted' && location.status === 'granted' && write.status === 'granted');
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
        console.log(e, 'Directory exists');});
    this.setState({ hasPermission });
};
 
  zoomOut = () => this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({
        base64: true,  
        onPictureSaved: this.onPictureSaved });
    }
  };
  picture = null;
  onPictureSaved = async photo => {
    await FileSystem.moveAsync({
      from: photo.uri,      
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.png`,
    });
    picture = photo.uri;    
  }

  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null || hasPermission === false) {
      return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>É necessário dar todas as permissões..</Text></View>;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <Camera 
          style={{ flex: 1 }} 
          type={this.state.type} 
          ref={ref => {
            this.camera = ref;
          }}
          zoom={this.state.zoom}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                height: '90%'
              }}>
            </View>
          </Camera>
          <View style={{flex: 0.1}}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  marginEnd: 'auto',
                  marginStart: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  backgroundColor: '#ad3e03',
                  width: '90%',
                  height: '90%',
                  borderRadius: 20
                }}
                onPress={this.takePicture, () => this.props.navigation.navigate('Warn', {
                    item: 'ola',
                    
                }, console.log(this.picture))}
                
                >
                <Text style={{ 
                    fontSize: 28, 
                    marginBottom: 10, 
                    color: 'white',
                    alignSelf: 'center',
                    marginTop: 'auto',
                    marginBottom: 'auto' 
                    }}> Capturar</Text>
              </TouchableOpacity>
              </View>
        </View>
      );
    }
  }
}
