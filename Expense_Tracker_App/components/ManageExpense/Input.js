import { View, Text, TextInput } from "react-native";

function Input({label, textInputConfig}) { // "textInputConfig" is an object that contains all the styles that we want to apply on the <TextInput>
    return <View>
        {/* Label for Input field */}
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />
    </View>
}

export default Input;