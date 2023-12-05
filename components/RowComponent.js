import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const RowComponent = ({ todo, onToggle }) => {
  return (
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.id}>{todo.id}</Text>
        <Text style={styles.name}>{todo.name}</Text>
      </View>
      <Text
        style={[
          styles.status,
          { color: todo.isComplete ? "green" : "#C1C1C1" },
        ]}
      >
        {todo.isComplete ? "FINISHED" : "PENDING"}
      </Text>
      <Switch
        trackColor={{ false: "#C1C1C1", true: "#32C557" }}
        onValueChange={() => onToggle(todo.id)}
        value={todo.isComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  id: {
    fontWeight: "bold",
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
