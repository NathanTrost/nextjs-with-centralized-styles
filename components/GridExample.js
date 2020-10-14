import { Heading, Text, Flex, Box } from "rebass";
import styles from "./grid.module.scss";

const GridExample = () => {
  return (
    <>
      <Heading fontSize={[4, 5, 6]} color="primary">
        Heading 1
      </Heading>
      <Flex width={"100%"} flexWrap="wrap">
        <Box width={[1, 0.5]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 1</Text>
          </Box>
        </Box>
        <Box width={[1, 0.5]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 2</Text>
          </Box>
        </Box>
      </Flex>
      <br />
      <Heading fontSize={[4, 5, 6]} color="primaryBlue">
        Heading 2
      </Heading>
      <Flex width={"100%"} flexWrap="wrap" className={styles.row}>
        <Box width={[1, 1, 1, 0.25]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 1</Text>
          </Box>
        </Box>
        <Box width={[1, 0.5, 0.25]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 2</Text>
          </Box>
        </Box>
        <Box width={[1, 0.5, 0.75, 0.25]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 3</Text>
          </Box>
        </Box>
        <Box width={[1, 1, 0.5, 0.25]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 4</Text>
          </Box>
        </Box>
        <Box width={[1, 1, 0.5, 1]} p={3}>
          <Box color="white" bg={"primary"} p={3}>
            <Text fontSize={[3, 4]}>Column 5</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default GridExample;
