import { Alert, Pressable, Text, View } from 'react-native';

export default function PressableSample() {
  return (
    <View>
      <Pressable
        onPress={() => Alert.alert('Pressable Clicked!')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#1eff00ff' : '#016B61',
            padding: 10,
            borderRadius: 5,
            width: 200,
            marginTop: 10,
            transform: [{ scale: pressed ? 0.95 : 1 }],
            opacity: pressed ? 0.7 : 1,
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
        delayLongPress={3000}
        onLongPress={() => Alert.alert('Kamu Menekan Selama 3 Detik')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Pressable Button
        </Text>
      </Pressable>
    </View>
  );
}
