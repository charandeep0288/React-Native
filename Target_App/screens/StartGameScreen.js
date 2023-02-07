import { StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            {/* BUTTONS - going to create custom button using <View> */}
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24, 
        padding: 16,
        backgroundColor: "#76063c",
        borderRadius: 8,
        elevation: 4, // to add box shadow in android only

        // to add box shadow in iOS, we have to do these things 
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    } 
});
export default StartGameScreen;