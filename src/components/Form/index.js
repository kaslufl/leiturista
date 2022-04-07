import {useState} from "react";
import {Alert, Modal, Picker, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../styles"
import ACamera from "../Camera";

export default function Form() {
  const [matricula, setMatricula] = useState(null);
  const [codigo, setCodigo] = useState(null);
  const [situacao, setSituacao] = useState("default");
  const [open, setOpen] = useState(false);

  function validate() {
    if (matricula != null && codigo != null && situacao !== 'default') {
      setOpen(true);
    } else {
      Alert.alert('É preciso preencher todos os campos do formulário!')
    }
  }

  function confirm(){
    setOpen(false);
    setMatricula(null);
    setCodigo(null);
    setSituacao("default");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>Matrícula</Text>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setMatricula}
          value={matricula}
        />
        <Text style={styles.formText}>Código</Text>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setCodigo}
          value={codigo}
        />
        <Text style={styles.formText}>Situação</Text>
        <Picker
          style={styles.formSelect}
          selectedValue={situacao}
          onValueChange={(itemValue, itemIndex) => setSituacao(itemValue)}
        >
          <Picker.Item label="Selecione a situação" value="default"/>
          <Picker.Item label="Leitura implausível" value="leitura_implausivel"/>
          <Picker.Item label="Releitura" value="releitura"/>
          <Picker.Item label="Situação de risco" value="situacao_de_risco"/>
          <Picker.Item label="Suspeita de fraude" value="suspeita_de_fraude"/>
          <Picker.Item label="Impedimento de leitura" value="impedimento_de_leitura"/>
        </Picker>
        <TouchableOpacity
          style={styles.formButton}
          onPress={validate}
        >
          <Text style={styles.formButtonText}>Confirmar Dados</Text>
        </TouchableOpacity>
      </View>
      <Modal
      transparent={true}
      visible={open}
      >
        <ACamera
        matricula={matricula}
        codigo={codigo}
        situacao={situacao}
        confirm={confirm}
        />
      </Modal>
    </View>
  )
}