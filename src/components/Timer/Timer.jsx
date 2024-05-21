import { View, Text, StyleSheet } from "react-native"

export default function Timer({time}) {

    const formattedTime = `${Math.floor(time / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(time % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexBasis: '20%',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F2F2F2'
    },
    time: {
        fontSize: 68,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    }
});