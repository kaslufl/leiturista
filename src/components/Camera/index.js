import React, {useEffect, useRef, useState} from "react";
import {Text, View, SafeAreaView, TouchableOpacity, Modal, Image} from "react-native";
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import styles from "../../styles";

export default function ACamera(props) {
  const [hasPermissionCamera, setHasPermissionCamera] = useState(null);
  const [hasPermissionMedia, setHasPermissionMedia] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [captured, setCaptured] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      console.log(status)
      setHasPermissionCamera(status === 'granted');

      const {mediaStatus} = await MediaLibrary.requestPermissionsAsync();
      setHasPermissionMedia(mediaStatus === 'granted');

      const {locationStatus} = await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== 'granted') {
        setErrorMessage('Permissão para usar o GPS negada!');
      }
    })();
  }, []);

  if (hasPermissionCamera === null) {
    return <View/>;
  }

  if (hasPermissionCamera === false) {
    return <Text> Autorize o uso da câmera</Text>;
  }

  async function takePicture() {
    await getLocation();
    if (ref) {
      const options = {
        quality: 0.5,
        base64: true,
        flexOrientation: true,
        forceUpOrientation: true
      }
      const picture = await ref.current.takePictureAsync(options);
      setCaptured(picture.uri);
      setIsOpen(true);
      console.log(`${props.matricula}_${props.codigo}_${props.situacao}_${location.longitude}_${location.latitude}`);
      await MediaLibrary.saveToLibraryAsync(picture.uri);
    }
  }

  async function getLocation() {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
    console.log(`Localização Atual: ${location.longitude}_${location.latitude}`);
  }

  return (
    <SafeAreaView style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        type={cameraType}
        ref={ref}
      >
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity
            style={styles.cameraButtonFlip}
            onPress={() => {
              setCameraType(Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
            }}
          >
            <Text>Girar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButtonTake}
            onPress={takePicture}
          >
            <Text>Foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Modal
        transparent={true}
        visible={isOpen}
      >
        <View style={styles.photoContainer}>
          <View style={styles.photoButtonContainer}>
            <TouchableOpacity
              style={styles.photoButtonClose}
              onPress={() => {
                setIsOpen(false);
              }}
            >
              <Text>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.photoButtonConfirm}
              onPress={() => {
                props.confirm();
              }}
            >
              <Text>Confirmar</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.photo}
            source={{uri: captured}}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}