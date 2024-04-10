import { View } from "react-native";

//folhas de estilização CSS
import { Stylesheet } from "../../styles/Stylesheet";
import { StyleWords } from "../../styles/StyleWords";

//Importando componentes
import TextComponent from "../TextComponent";
import TextInputComponent from "../TextInputComponent";
import ButtonComponent from "../ButtonComponent";
import { StyleElements } from "../../styles/StyleElements";

export default function Body() {
  return (
    <View style={Stylesheet.Body}>
      <TextComponent Texto={"Converter"} StyleTexto={StyleWords.SubTitulo} />
      <TextInputComponent
        StyleInputText={StyleElements.InputText}
        LaborText="Temperatura"
      />
      <ButtonComponent
        TextButton="Converter"
        StyleButton={StyleElements.Button}
        StyleTextButton={StyleElements.ButtonText}
      />
    </View>
  );
}
