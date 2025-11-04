import { Alert, Button, View } from 'react-native';

export default function ButtonSample() {
  return (
    <View
      style={{
        width: 200,
        marginTop: 10,
      }}
    >
      <Button
        title="Button Standard"
        onPress={() => Alert.alert('Button Clicked!')}
        color={'#016B61'}
      />
    </View>
  );
}
