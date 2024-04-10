import { TextInput } from "react-native";

export default function TextInputComponent({
  LaborText,
  StyleInputText,
  Valor,
  Shared,
}) {
  return (
    <TextInput
      style={StyleInputText}
      onChangeText={Shared}
      value={Valor}
      placeholder={LaborText}
    />
  );
}
