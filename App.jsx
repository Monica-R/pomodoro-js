import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import Timer from './src/components/Timer/Timer';
import { Audio } from 'expo-av';

const colours = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  const optionsTimes = {
    0: 25,
    1: 5,
    2: 15
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      //run timer
      interval = setInterval(() => {
        setTime(time - 1);
      }, 10);
    } else {
      //clear interval
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(optionsTimes[currentTime] * 60);
    }

    return () => clearInterval(interval);

  }, [isActive, time]);

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/beeps.mp3")
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colours[currentTime] }]}>
      <View style={{ paddingTop: Platform.OS === "android" && 60 }}>
        <Text style={styles.titleApp}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
        <Timer time={time}/>
        <TouchableOpacity style={styles.timeMode} onPress={handleStartStop}>
          <Text style={styles.timeText}>{ isActive ? "STOP" : "START" }</Text>
        </TouchableOpacity>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleApp: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  timeMode: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 20,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F2F2F2',
  }
});
