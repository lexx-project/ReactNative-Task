import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.body}>
      <ImageBackground
        source={{
          uri: 'https://upload.lexxganz.my.id/uploads/pexels-chaitaastic-2093323%20(1).jpg',
        }}
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      />
      <Text style={styles.text}>Ini Adalah Aplikasi Pertama Saya</Text>
      <Text
        style={styles.text}
        numberOfLines={3}
        selectable={true}
        adjustsFontSizeToFit={false}
        allowFontScaling={true}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente
        non soluta ex, illo distinctio veritatis molestias consequuntur id iste
        accusantium, deserunt impedit minima, vel sequi minus veniam dignissimos
        aut?
      </Text>
      <Image
        source={{ uri: 'https://upload.lexxganz.my.id/uploads/INDOMIE.jpeg' }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Ini Indomie</Text>
      <Text style={styles.text}>Masukkan Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: { fontSize: 32, color: 'white', marginBottom: 20 },
  switchContainer: { flexDirection: 'row', alignItems: 'center' },
});

export default App;
