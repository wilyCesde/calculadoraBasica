import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Banner from "./components/Banner";
export default function App() {
  //Definir las variables de estado del componente
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState(0);
  const [esValido, setEsvalido] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Definir los métodos del componente
  let calcular = (operador) => {
    if (valor1 != "" && valor2 != "") {
      setEsvalido(true);
      setMensaje("Calculo realizado con Éxito");
      let resulta = 0;
 switch (operador) {
        case "+":
          resulta = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          resulta = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "/":
          resulta = parseFloat(valor1) / parseFloat(valor2);
          break;
        case "*":
          resulta = parseFloat(valor1) * parseFloat(valor2);
          break;
      }
      setResultado(resulta);
    } else {
      setEsvalido(false);
      setMensaje("Calculo no realizado");
    }
  };

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View
        style={[
          styles.container,
          styles.views,
          {
            flex: 1,
            backgroundColor: "powederblue",
            width: "100%",
            height: "100%",
            borderColor: "black",
          },
        ]}
      >
        <Banner name="react2"></Banner>
      </View>
      <View
        style={[
          styles.container,
          styles.views,
          {
            flex: 3,
            backgroundColor: "#F7FAED",
            width: "100%",
            height: "100%",
            borderColor: "black",
          },
        ]}
      >
        <Text>Calculadora Básica</Text>
        <TextInput
          placeholder="Ingese valor 1"
          style={styles.inputs}
          onChangeText={(valor1) => setValor1(valor1)}
          value={valor1}
        ></TextInput>
        <TextInput
          placeholder="Ingese valor 2"
          style={styles.inputs}
          onChangeText={(valor2) => setValor2(valor2)}
          value={valor2}
        ></TextInput>
        <Text>Resultado</Text>
        <Text
          style={[styles.inputs, { color: "blue", fontWeight: "bold" }]}
          onChangeText={(resultado) => setResultado(resultado)}
        >
          {resultado.toFixed(2)}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => calcular("+")}
          >
            <Text style={styles.textsTouchables}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => calcular("-")}
          >
            <Text style={styles.textsTouchables}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => calcular("/")}
          >
            <Text style={styles.textsTouchables}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => calcular("*")}
          >
            <Text style={styles.textsTouchables}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "blue",
              },
              styles.buttons,
            ]}
            onPress={() => {
              setValor1("");
              setValor2("");
              setResultado(0);
              setMensaje("");
            }}
          >
            <Text style={styles.textsTouchables}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ color: esValido ? "green" : "red" }}>{mensaje}</Text>
      </View>
      <View
        style={[
          styles.container,
          styles.views,
          {
            backgroundColor: "#F2F9D4",
            width: "100%",
            height: "100%",
            borderColor: "black",
          },
        ]}
      >
        <Text>Derechos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  views: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  inputs: {
    borderRadius: 10,
    padding: 10,
    width: 150,
    borderWidth: 2,
    borderColor: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    borderRadius: 10,
    padding: 10,
    width: 60,
    opacity: 0.5,
    marginLeft: 10,
  },
  textsTouchables: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});