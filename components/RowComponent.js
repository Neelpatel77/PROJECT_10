import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import useToggleTodo from ''; 

const RowComponent = ({ todo, onToggle }) => {
  // Use the custom hook for toggling todo completion
  const [isComplete, toggleIsComplete] = useToggleTodo(todo.isComplete);

  // Call the onToggle function passed from the parent component when the switch is toggled
  const handleToggleChange = () => {
    toggleIsComplete();
    onToggle(todo.id);
  };

  return (
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.id}>{todo.id}</Text>
        <Text style={styles.name}>{todo.name}</Text>
      </View>
      <Text style={[styles.status, { color: isComplete ? 'green' : 'red' }]}>
        {isComplete ? 'FINISHED' : 'PENDING'}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isComplete ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggleChange}
        value={isComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  name: {
    flex: 1,
  },
  status: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default RowComponent;
