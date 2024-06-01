import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Home = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [nextBirthday, setNextBirthday] = useState("");
  const [totalYears, setTotalYears] = useState("");
  const [totalMonths, setTotalMonths] = useState("");
  const [totalWeeks, setTotalWeeks] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [totalSeconds, setTotalSeconds] = useState("");
  const [totalMinutes, setTotalMinutes] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isBirthdayDatePickerVisible, setIsBirthdayDatePickerVisible] = useState(false);

  const showCurrentDatePicker = () => setIsDatePickerVisible(true);
  const hideCurrentDatePicker = () => setIsDatePickerVisible(false);
  const showBirthdayDatePicker = () => setIsBirthdayDatePickerVisible(true);
  const hideBirthdayDatePicker = () => setIsBirthdayDatePickerVisible(false);

  const handleBirthdayConfirm = (date) => {
    setBirthday(date.toLocaleDateString());
    hideBirthdayDatePicker();
    calculateAge(date);
  };

  const handleCurrentDateConfirm = (date) => {
    setCurrentDate(date.toLocaleDateString());
    hideCurrentDatePicker();
    calculateAge(date);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const diff = today - birthdate;
    const ageDate = new Date(diff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    setAge(`${years} years ${months} months ${days} days`);
  };

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());

    const sampleBirthday = new Date("1990-01-01");
    setBirthday(sampleBirthday.toLocaleDateString());

    calculateAge(sampleBirthday);

    const nextBirthday = new Date(
      date.getFullYear(),
      sampleBirthday.getMonth(),
      sampleBirthday.getDate()
    );
    if (nextBirthday < date) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    setNextBirthday(nextBirthday.toLocaleDateString());

    const totalYears = date.getFullYear() - sampleBirthday.getFullYear();
    setTotalYears(totalYears);

    const totalMonths =
      totalYears * 12 + date.getMonth() - sampleBirthday.getMonth();
    setTotalMonths(totalMonths);

    const totalWeeks = Math.floor(
      (new Date() - sampleBirthday) / (7 * 24 * 60 * 60 * 1000)
    );
    setTotalWeeks(totalWeeks);

    const totalDays = Math.floor(
      (new Date() - sampleBirthday) / (24 * 60 * 60 * 1000)
    );
    setTotalDays(totalDays);

    const totalHours = Math.floor(
      (new Date() - sampleBirthday) / (60 * 60 * 1000)
    );
    setTotalHours(totalHours);

    const totalSeconds = Math.floor((new Date() - sampleBirthday) / 1000);
    setTotalSeconds(totalSeconds);

    const totalMinutes = Math.floor((new Date() - sampleBirthday) / (60 * 1000));
    setTotalMinutes(totalMinutes);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Select Date</Text>
          </View>
          <View style={styles.dateBox}>
            <View style={styles.dateRow}>
              <Text>{currentDate}</Text>
              <TouchableOpacity onPress={showCurrentDatePicker}>
                <Entypo name="calendar" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleCurrentDateConfirm}
              onCancel={hideCurrentDatePicker}
            />
          </View>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Birthday</Text>
          <View style={styles.dateBox}>
            <View style={styles.dateRow}>
              <Text>{birthday}</Text>
              <TouchableOpacity onPress={showBirthdayDatePicker}>
                <Entypo name="calendar" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isBirthdayDatePickerVisible}
              mode="date"
              onConfirm={handleBirthdayConfirm}
              onCancel={hideBirthdayDatePicker}
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Age</Text>
          <View style={styles.date}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>Years</Text>
              <Text style={{ paddingHorizontal: 80, fontSize: 18 }}>
                Months
              </Text>
              <Text style={{ fontSize: 18 }}>Days</Text>
            </View>
            <Text>{age}</Text>
          </View>
        </View>

        <Text style={styles.label}>Next Birthday</Text>
        <View style={styles.date}>
          <Text>{nextBirthday}</Text>
        </View>

        <View>
          <Text style={styles.label}>Extras</Text>
          <View style={styles.dateheader}>
            <Text>Total Years: {totalYears}</Text>
            <Text>Total Months: {totalMonths}</Text>
            <Text>Total Weeks: {totalWeeks}</Text>
            <Text>Total Days: {totalDays}</Text>
            <Text>Total Hours: {totalHours}</Text>
            <Text>Total Seconds: {totalSeconds}</Text>
            <Text>Total Minutes: {totalMinutes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  dateContainer: {
    paddingTop: 20,
  },
  dateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    marginTop: 10,
  },
  dateheader: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    marginTop: 10,
  },
});

export default Home;
