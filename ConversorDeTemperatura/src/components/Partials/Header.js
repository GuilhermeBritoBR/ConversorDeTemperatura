import { View } from "react-native";

//importando STYLESHEET
import { StyleSheet } from "react-native";
//folhas de estilização CSS
import { Stylesheet } from "../../styles/Stylesheet";
import { StyleWords } from "../../styles/StyleWords";

//Importando componentes
import TextComponent from "../TextComponent";

export default function Header() {
  return (
    <View style={Stylesheet.Header}>
      <TextComponent
        Texto={"Converta Celsius para Fahrenheit"}
        StyleTexto={[StyleWords.Titulo, { color: "white" }]}
      />
    </View>
  );
}
