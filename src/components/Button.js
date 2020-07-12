import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../style/color";






const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.DODGER_BLUE,
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "rgba(255,255,255,0.7)"
    },
    text: {
      color: colors.WHITE,
      textAlign: "center",
      height: 20
    }
  });