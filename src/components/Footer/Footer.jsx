import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text>Developed with 💪 & ❤ by Mónica-R </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
    }
});

