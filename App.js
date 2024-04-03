import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

export default function App() {
  const [selectedPdf, setSelectedPdf] = useState();

  async function pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    if(result.assets && result.assets[0].uri){
      console.log(result.assets[0].uri);
      setSelectedPdf(result.assets[0].uri);
    }else{
      Alert.alert('ATENÇÃO', 'Nenhum pdf selecionado')
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 14,
          marginTop: 14,
          marginBottom: 14,
        }}
      >
        <Button title="Escolher PDF" onPress={pickDocument} />
        <Button title="Fechar PDF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
