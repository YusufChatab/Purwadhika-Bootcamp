import { Flex, Box, Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function List({ description }: { description: string }) {
  return (
    <>
      <Flex color="white" justifyContent={"center"}>
        <Box>
          <Checkbox colorScheme="green" fontWeight={"normal"}>
            {description}
          </Checkbox>
        </Box>
        <Box flex={1}>
          <DeleteIcon marginBottom={"2rem"} float={"right"} />
        </Box>
      </Flex>
    </>
  );
}

export default List;
