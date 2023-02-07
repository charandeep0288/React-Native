import { StyleSheet, View, Text } from "react-native";

function PrimaryButton({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({

});