import { TextInput } from "react-native";

export default function TextInputComponent({
  LaborText,
  StyleInputText,
  Valor,
}) {
  return (
    <TextInput style={StyleInputText} value={Valor} placeholder={LaborText} />
  );
}
