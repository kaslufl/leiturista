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
  }
})

export default styles;