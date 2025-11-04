import { TouchableOpacity, View, Text, Alert } from 'react-native';

export default function TouchableOpacitySample() {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#016B61',
          width: 200,
          padding: 10,
          borderRadius: 5,
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
        onPress={() => Alert.alert('Tombol TouchableOpacity Diklik')}
        activeOpacity={0.5}
        disabled={false}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          TouchableOpacity Button
        </Text>
      </TouchableOpacity>
    </View>
  );
}
