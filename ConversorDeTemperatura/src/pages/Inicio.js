import { View } from "react-native";

//folhas de estilização CSS
import { Stylesheet } from "../styles/Stylesheet";

//Importando componentes
import Header from "../components/Partials/Header";
import Body from "../components/Partials/Body";
import Footer from "../components/Partials/Footer";

export default function Inicio() {
  return (
    <View style={Stylesheet.Container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}
