import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native"

export default function App() {
  console.log(require("./assets/icon.png"))

  const handleTextPress = () => console.log("text pressed")

  return (
    // SafeAreaView adds padding to top of component
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={() => {
          handleTextPress()
        }}
      >
        Welcome to React Native
      </Text>
      <Image
        source={{
          uri: "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
        }}
        style={styles.image}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
})
