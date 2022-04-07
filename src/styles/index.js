import {StyleSheet} from "react-native";

const DARK = '#222831';
const GRAY = '#393E46';
const BLUE = '#00ADB5';
const WHITE = '#EEEEEE';


const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: 'auto',
    bottom: 0,
    backgroundColor: DARK,
    alignItems: 'center',
    borderRadius: 10,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 25,
    padding: 10,
  },
  formText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: BLUE,
  },
  formTextInput: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: WHITE,
    color: DARK,
    borderRadius: 6,
    margin: 5,
    padding: 5,
  },
  formSelect: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: WHITE,
    color: BLUE,
    borderRadius: 6,
    margin: 5,
    padding: 5,
  },
  formButton: {
    margin: 10,
    backgroundColor: BLUE,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  formButtonText: {
    fontSize: 20,
    color: WHITE,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraButtonContainer:{
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  cameraButtonFlip: {
    position: "absolute",
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cameraButtonTake: {
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  photoContainer: {
    flex: 1,
    margin: 10,
  },
  photoButtonContainer:{
    flex: 1,
    flexDirection: "row"
  },
  photoButtonClose:{
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 90,
    height: 50,
    borderRadius: 20,
  },
  photoButtonConfirm:{
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 90,
    height: 50,
    borderRadius: 20,
  },
  photo:{
    width: "100%",
    height: "80%",
  },
})

export default styles;