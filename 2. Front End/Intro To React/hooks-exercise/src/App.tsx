import { useState } from "react";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Input,
  Button,
  IconButton,
  Text,
  Container,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj: Task = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <Container w={"md"} alignContent={"center"}>
      <Box bg="gray.800" color="white" p={6} borderRadius="md">
        <Heading mb={4}>Chores ToDo List</Heading>
        {tasks.map((task) => (
          <Flex key={task.id} align="center" mb={2}>
            <Checkbox
              isChecked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
              mr={2}
            />
            <Text
              flex="1"
              textDecoration={task.completed ? "line-through" : "none"}
            >
              {task.text}
            </Text>
            <IconButton
              icon={<DeleteIcon boxSize={4} />}
              aria-label="Delete Task"
              colorScheme={"#1a202c"}
              onClick={
                task.completed ? () => handleDeleteTask(task.id) : undefined
              }
            />
          </Flex>
        ))}
        <Flex
          mt={4}
          gap={3}
          p={2}
          flexDir={"column"}
          align="center"
          justify="center"
        >
          <Text mt={4}>Done: {completedCount}</Text>
          <Input
            placeholder="Add todo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button p={2} colorScheme="teal" onClick={handleAddTask}>
            Add Task
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default TodoList;
