import { TouchableOpacity, Text } from "react-native";

export default function ButtonComponent({
  TextButton,
  StyleButton,
  Funcao,
  StyleTextButton,
}) {
  return (
    <TouchableOpacity style={StyleButton} onPress={Funcao}>
      <Text style={StyleTextButton}>{TextButton}</Text>
    </TouchableOpacity>
  );
}
