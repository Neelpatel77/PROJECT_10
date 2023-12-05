import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const RowComponent = ({ todo, onToggle }) => {
  return (
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.id}>{todo.id} - </Text>
        <Text style={styles.name}>{todo.name}</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "#C1C1C1", true: "#32C557" }}
          onValueChange={() => onToggle(todo.id)}
          value={todo.isComplete}
        />
        <View style={styles.toggleLabel}>
          <Text
            style={[
              styles.status,
              { color: todo.isComplete ? "green" : "#C1C1C1" },
            ]}
          >
            {todo.isComplete ? "FINISHED" : "PENDING"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  id: {
    fontSize: 20,
  },
  name: {
    flex: 1,
    fontSize: 20,
  },
  status: {
    fontSize: 16,
  },
  toggleLabel: {
    marginLeft: -300,
    alignItems: "flex-start",
  },
});

export default RowComponent;
