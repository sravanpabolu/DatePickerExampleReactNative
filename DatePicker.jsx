import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ReactNativeModalDateTimePicker = ({ selectedDateCallback }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        hideDatePicker();

        //send back to parent component
        selectedDateCallback(date);
    };

    return (
        <View>
            <Button onPress={showDatePicker} title="Show Date Picker" />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default ReactNativeModalDateTimePicker;