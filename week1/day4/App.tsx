import { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Tugas No 1 (Scroll View Components)</Text>

        <Text style={styles.item}>Hello World 1 !</Text>
        <Text style={styles.item}>Hello World 2 !</Text>
        <Text style={styles.item}>Hello World 3 !</Text>
        <Text style={styles.item}>Hello World 4 !</Text>
        <Text style={styles.item}>Hello World 5 !</Text>
        <Text style={styles.item}>Hello World 6 !</Text>
        <Text style={styles.item}>Hello World 7 !</Text>
        <Text style={styles.item}>Hello World 8 !</Text>
        <Text style={styles.item}>Hello World 9 !</Text>
        <Text style={styles.item}>Hello World 10 !</Text>
        <Text style={styles.item}>Hello World 11 !</Text>
        <Text style={styles.item}>Hello World 12 !</Text>
        <Text style={styles.item}>Hello World 13 !</Text>
        <Text style={styles.item}>Hello World 14 !</Text>
        <Text style={styles.item}>Hello World 15 !</Text>
      </ScrollView>
      <FlatList
        data={Array.from({ length: 100 }, (_, i) => `Hello World ${i + 1} !`)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        ListHeaderComponent={
          <Text style={styles.title}>Tugas No 2 (FlatList Components)</Text>
        }
        ListFooterComponent={<Text style={styles.title}>The End</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: '#444',
              marginVertical: 8,
            }}
          />
        )}
      />
      <SectionList
        sections={[
          {
            title: 'Section 1',
            data: Array.from({ length: 5 }, (_, i) => `Hello World ${i + 1} !`),
          },
          {
            title: 'Section 2',
            data: Array.from({ length: 5 }, (_, i) => `Hello World ${i + 1} !`),
          },
        ]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        ListHeaderComponent={
          <Text style={styles.title}>Tugas No 3 (SectionList Components)</Text>
        }
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                backgroundColor: '#444',
                marginVertical: 8,
              }}
            />
          );
        }}
        style={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          <Text
            style={{
              fontSize: 18,
              color: '#f5deb3',
              marginBottom: 18,
              textAlign: 'center',
            }}
          >
            Component ini menggunakan RefreshControl
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 50,
    paddingHorizontal: 8,
  },
  scroll: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#2f2f2f',
    borderRadius: 16,
    padding: 16,
    margin: 12,
  },
  scrollContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#ff6767',
    marginBottom: 24,
    textAlign: 'center',
  },
  item: {
    fontSize: 30,
    color: '#f5deb3',
    marginBottom: 18,
    textAlign: 'center',
  },
});

export default App;
