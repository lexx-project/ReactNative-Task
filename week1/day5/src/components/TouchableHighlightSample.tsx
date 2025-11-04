import { Alert, Text, TouchableHighlight, View } from 'react-native';

export default function TouchableHighlightSample() {
  return (
    <View>
      <TouchableHighlight
        onPress={() => Alert.alert('TouchableHighlight Clicked!')}
        activeOpacity={0.6}
        underlayColor={'#2196F3'}
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
        <View>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            TouchableHighlight Button
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
