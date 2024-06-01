import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSendFeedback = () => {
    console.log("Feedback sent:", feedback);
    setFeedback("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Feedback</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Write your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Send Feedback" onPress={handleSendFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: "top",
  },
});

export default Feedback;
