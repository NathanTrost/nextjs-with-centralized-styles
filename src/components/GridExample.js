import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";

const GridExample = () => {
  return (
    <Flex align="center">
      <Box bg="green.50" align="flex-end">
        <Text>Box 1</Text>
      </Box>
      <Box bg="blue.50" size="150px" align="center" justify="center">
        <Text textAlign="center" bg="pink.50">
          Box 2
        </Text>
      </Box>
      <Box>
        <Text bg="tomato" color="white">
          Box 3
        </Text>
      </Box>
    </Flex>
  );
};

export default GridExample;
