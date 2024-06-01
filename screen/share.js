import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const Share = () => {
  const shareApp = async () => {
    const message = "Check out this amazing app!";
    try {
      const fileUri = FileSystem.documentDirectory + "message.txt";
      await FileSystem.writeAsStringAsync(fileUri, message);
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.log("Error sharing the message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Share the App</Text>
      <Button title="Share" onPress={shareApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Share;
