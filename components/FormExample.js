import { Heading, Text, Flex, Box } from "rebass";

const FormExample = () => {
  return (
    <>
      <Heading fontSize={[4, 5, 6]} color="primary">
        Heading 1
      </Heading>
      <Flex flexWrap="wrap">
        <Box width={[1, 0.5]} p={3}>
          <Text fontSize={[3, 4]} color="primary">
            Reflex
          </Text>
        </Box>
        <Box width={[1, 0.5]} p={3}>
          <Text fontSize={[3, 4]} color="primary">
            Box
          </Text>
        </Box>
      </Flex>
      <br />
      <Heading fontSize={[4, 5, 6]} color="primary">
        Heading 2
      </Heading>
      <Flex flexWrap="wrap">
        <Box width={[1, 0.5]} p={3}>
          <Text fontSize={[3, 4]} color="primary">
            Reflex
          </Text>
        </Box>
        <Box width={[1, 0.5]} p={3}>
          <Text fontSize={[3, 4]} color="primary">
            Box
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default FormExample;
