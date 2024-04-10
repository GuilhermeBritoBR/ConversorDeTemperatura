import { Modal, View } from "react-native";

//folhas de estilo CSS
import { Stylesheet } from "../styles/Stylesheet";

export default function ModalComponent({ children, Visivel }) {
  return (
    <Modal visible={Visivel} animationType="slide">
      <View style={Stylesheet.ModalPosition}>
        <View style={Stylesheet.ModalContainer}>{children}</View>
      </View>
    </Modal>
  );
}
