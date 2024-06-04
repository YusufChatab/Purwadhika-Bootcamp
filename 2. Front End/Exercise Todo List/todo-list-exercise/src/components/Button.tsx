import { Divider, Text, Textarea, Button } from "@chakra-ui/react";

function ButtonList() {
  return (
    <>
      <Divider />
      <Text
        color="white"
        fontWeight={"semibold"}
        textAlign={"center"}
        marginTop={"1rem"}
        fontSize={"1.5rem"}
      >
        Done : 0
      </Text>
      <Textarea color="white" placeholder="Add new task" marginTop={"1rem"} />
      <Button bg={"#8DCDF5"} marginTop={"1rem"}>
        Add Task
      </Button>
    </>
  );
}

export default ButtonList;
