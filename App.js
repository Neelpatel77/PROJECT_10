import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import RowComponent from './components/RowComponent'; // Replace with the correct path to your RowComponent file

let initialTodoList = [];

export default function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [taskName, setTaskName] = useState('');

  const addTask = (name) => {
    const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
    const newTask = { id: newId, name: name, isComplete: false };
    setTodoList([...todoList, newTask]);
    setTaskName('');
  };

  const deleteAllTasks = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete all tasks?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => setTodoList([]) }
      ]
    );
  };

  const changeStatus = (id) => {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setTodoList(newList);
  };

  const renderItem = ({ item }) => (
    <RowComponent todo={item} onToggle={changeStatus} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <TouchableOpacity onPress={deleteAllTasks}>
          <Text style={styles.deleteButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
      {todoList.length === 0 && <Text style={styles.noTasksText}>You have no tasks.</Text>}
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
          placeholder="Enter task name"
        />
        <TouchableOpacity style={styles.addButton} onPress={() => addTask(taskName)}>
          <Text style={styles.addButtonText}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
  },
  deleteButtonText: {
    fontSize: 24,
  },
  item: {
    backgroundColor: 'white',  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#cccccc',  
  },
  title: {
    fontSize: 24,
  },
  status: {
    fontSize: 20,
    color: 'green',
  },
  noTasksText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
