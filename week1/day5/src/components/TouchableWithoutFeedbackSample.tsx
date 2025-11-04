import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function TouchableWithoutFeedbackSample() {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert('TouchableWithoutFeedback Clicked!')}
      >
        <View
          style={{
            backgroundColor: '#016B61',
            padding: 10,
            borderRadius: 5,
            width: 200,
            marginTop: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            TouchableWithoutFeedback Button
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
