import { Box, Text, Container, Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container
        mx="auto"
        textAlign="center"
        p="0.5rem"
        // sx={{
        //   width: "100%",
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   textAlign: "center",
        //   padding: "0.5rem",
        // }}
      >
        <Box
          borderWidth="2px"
          border="solid"
          borderRadius="0.375rem"
          borderColor="black"
        >
          <Text fontSize="2xl" color="red">
            Chakra UI
          </Text>
          <Button variant={"with-shadow"}>Click Me!</Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
