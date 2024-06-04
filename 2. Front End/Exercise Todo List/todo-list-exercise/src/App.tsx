import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import List from "./components/List";
import ButtonList from "./components/Button";

function App() {
  return (
    <>
      <Container maxW={"xl"} color={"white"} padding={"1rem"}>
        <Box textAlign={"center"} fontSize={"2xl"} fontWeight={"semibold"}>
          <Box padding={"1rem"}>Chores Todo List</Box>
          <List description="Create Guest Experience Mobile Check-in" />
          <List description="Document current CI/CD" />
          <List description="Perform Code Review for final Pillow-Talk Release" />
          <List description="Implement New Color Pallette from Designt Team" />
          <List description="Fix Image uploading Process for guest Check-in" />
          <List description="Provide on Boarding documentation" />
        </Box>
        <ButtonList />
      </Container>
    </>
  );
}

export default App;
