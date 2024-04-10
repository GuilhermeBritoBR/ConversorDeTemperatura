import { View } from "react-native";

//folhas de estilização CSS
import { Stylesheet } from "../../styles/Stylesheet";
import { StyleWords } from "../../styles/StyleWords";

//Importando componentes
import TextComponent from "../TextComponent";

export default function Footer() {
  return (
    <View style={Stylesheet.Footer}>
      <TextComponent
        Texto={"Copyright 2024"}
        StyleTexto={[StyleWords.SubTitulo, { color: "white" }]}
      />
    </View>
  );
}
