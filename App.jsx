
import { useState } from 'react';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import Banner from './components/Banner';
export default function App() {
  const [nota1, setnota1] = useState('');
  const [nota2, setnota2] = useState('');
  const [nota3, setnota3] = useState('');
  const [nombre, setnombre] = useState('');
  const [asignatura, setasignatura] = useState('');
  const [resultado, setResultado] = useState(0);
  const [id, setId] = useState('');

  const calcular = () => {
    if (
      nota1 !== '' &&
      nota2 !== '' &&
      nota3 !== ''
    ) {
      const resulta = parseFloat(
        nota1 * 0.3 +
        nota2 * 0.35 +
        nota3 * 0.35
      );
      setResultado(resulta);
    }
  };
  const limpiar = () => {
    setnota1('');
    setnota2('');
    setnota3('');
    setnombre('');
    setasignatura('');
    setResultado(0);
  };



const buscar = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const nombreRecuperado = localStorage.getItem(`${id}-nombre`);
    const asignaturaRecuperada = localStorage.getItem(`${id}-asignatura`);
    const nota1Recuperada = localStorage.getItem(`${id}-nota1`);
    const nota2Recuperada = localStorage.getItem(`${id}-nota2`);
    const nota3Recuperada = localStorage.getItem(`${id}-nota3`);

    if (
      nombreRecuperado !== null &&
      asignaturaRecuperada !== null &&
      nota1Recuperada !== null &&
      nota2Recuperada !== null &&
      nota3Recuperada !== null
    ) {
      setnombre(nombreRecuperado);
      setasignatura(asignaturaRecuperada);
      setnota1(nota1Recuperada);
      setnota2(nota2Recuperada);
      setnota3(nota3Recuperada);
      calcular();
    } else {
      console.log(`No se encontraron datos completos para el ID ${id}`);
    }
  } else {
    console.log("localStorage no está disponible");
  }
};


return (
  <View style={styles.container}>

    <View style={styles.bannerContainer}>

    </View>
    <View style={styles.inputsContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Identificación:</Text>
        <TextInput placeholder="Identificación" onChangeText={setId} value={id} style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput placeholder="Nombre" onChangeText={setnombre} value={nombre} style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Asignatura:</Text>
        <TextInput placeholder="Asignatura" onChangeText={setasignatura} value={asignatura} style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nota 1 (30%):</Text>
        <TextInput placeholder="Nota 1 (30%)" onChangeText={setnota1} value={nota1} style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nota 2 (35%):</Text>
        <TextInput placeholder="Nota 2 (35%)" onChangeText={setnota2} value={nota2} style={styles.input} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nota 3 (35%):</Text>
        <TextInput placeholder="Nota 3 (35%)" onChangeText={setnota3} value={nota3} style={styles.input} />
      </View>
      <Button title="Calcular" onPress={calcular} />
      <Button title="Limpiar" onPress={limpiar} />
      <Button title="Buscar" onPress={buscar} />
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bannerContainer: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  inputsContainer: {
    flex: 3,
    backgroundColor: '#F7FAED',
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10
  },
  resultado: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});