import { StyleSheet } from "react-native";

export const Stylesheet = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    flex: 0.2,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  Body: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Footer: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  ModalPosition: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ModalContainer: {
    height: "50%",
    width: "50%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderCurve: 5,
  },
});
