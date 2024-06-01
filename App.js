import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Entypo, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, StyleSheet } from "react-native";

import Home from "./screen/home";
import Share from "./screen/share";
import Feedback from "./screen/feedback";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const DrawerContent = ({ navigation }) => (
    <DrawerContentScrollView>
      <View style={styles.headers}>
        <Image
          source={require("./assets/img.jpeg")}
          style={styles.headerImage}
        />
      </View>
      <DrawerItem
        label="Home"
        icon={() => <FontAwesome5 name="home" size={24} color="black" />}
        onPress={() => navigation.navigate("Home")}
      />
      <DrawerItem
        label="Feedback"
        icon={() => <MaterialIcons name="feedback" size={24} color="black" />}
        onPress={() => navigation.navigate("Feedback")}
      />
      <DrawerItem
        label="Share"
        icon={() => <Entypo name="share" size={24} color="black" />}
        onPress={() => navigation.navigate("Share")}
      />
    </DrawerContentScrollView>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AGE CALCULATOR"
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="AGE CALCULATOR"
          component={StackNavigator}
          options={{
            title: "AGE CALCULATOR",
            headerStyle: { backgroundColor: "#1e90ff" },
          }}
        />
        <Drawer.Screen name="Share" component={Share} />
        <Drawer.Screen name="Feedback" component={Feedback} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Feedback" component={Feedback} />
    <Stack.Screen name="Share" component={Share} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headers: {
    padding: 20,
    backgroundColor: "pink",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default App;
