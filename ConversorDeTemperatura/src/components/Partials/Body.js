import { View } from "react-native";

//folhas de estilização CSS
import { Stylesheet } from "../../styles/Stylesheet";
import { StyleWords } from "../../styles/StyleWords";
import { StyleElements } from "../../styles/StyleElements";

//Importando componentes
import TextComponent from "../TextComponent";
import TextInputComponent from "../TextInputComponent";
import ButtonComponent from "../ButtonComponent";
import ModalComponent from "../ModalComponent";

//importando hooks
import { useState } from "react";

export default function Body() {
  const [boleanoModal, setBoleanoModal] = useState(false);
  const [celsius, setCelsius] = useState("");
  const result = (celsius * 9) / 5 + 32;
  function BackModal() {
    setBoleanoModal(false);
    setCelsius("");
  }
  function Police() {
    if (celsius === "") {
      alert("Por favor, preencha este campo!");
    } else {
      setBoleanoModal(true);
    }
  }

  return (
    <View style={Stylesheet.Body}>
      <TextComponent Texto={"Converter"} StyleTexto={StyleWords.SubTitulo} />
      <TextInputComponent
        StyleInputText={StyleElements.InputText}
        LaborText="Celsius"
        Shared={setCelsius}
        Valor={celsius}
      />
      <ButtonComponent
        TextButton="Converter"
        StyleButton={StyleElements.Button}
        StyleTextButton={StyleElements.ButtonText}
        Funcao={Police}
      />
      <ModalComponent Visivel={boleanoModal}>
        <TextComponent StyleTexto={StyleWords.Titulo} Texto={result + " F"} />
        <ButtonComponent
          TextButton="Converter Novamente"
          StyleButton={StyleElements.Button}
          StyleTextButton={StyleElements.ButtonText}
          Funcao={BackModal}
        />
      </ModalComponent>
    </View>
  );
}
