import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScheduleButton from './Buttons/ScheduleButton';

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Schedule = () => {

    return (
        <View style={styles.container}>
            {
                days.map((day) => {
                    return(
                        <ScheduleButton key={day} day={day}/>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "5%",
        marginTop: "8%",
        flexDirection: "row"
    },
  });


export default Schedule;
