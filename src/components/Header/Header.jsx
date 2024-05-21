import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.optionItem,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.item}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  optionItem: {
    width: "33.33%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 4,
    borderRadius: 5,
    marginVertical: 14,
  },
  item: {
    fontWeight: "bold",
  },
});
