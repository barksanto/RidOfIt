import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"

export default function App() {
  console.log("app executed")

  // let x
  const handleTextPress = () => console.log("text pressed")
  
  // x.toString()
  return (
    // SafeAreaView adds padding to top of component
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={() => {
          handleTextPress()
        }}
      >
        App.js component lease feel free to make this into a Google Doc - I just
        know you have preferred format so defer lease feel free to make this
        into a Google Doc
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    // justifyContent: "center",
  },
})
