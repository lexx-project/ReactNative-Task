import { Alert, Text, TouchableNativeFeedback, View } from 'react-native';

export default function TouchableNativeFeedbackSample() {
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => Alert.alert('TouchableNativeFeedback Clicked!')}
        background={TouchableNativeFeedback.Ripple('#2196F3', false)}
        style={{
          backgroundColor: '#016B61',
          padding: 10,
        }}
        useForeground={true}
        delayLongPress={3000}
        onLongPress={() => Alert.alert('Kamu Menekan Selama 3 Detik')}
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
            TouchableNativeFeedback Button
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
