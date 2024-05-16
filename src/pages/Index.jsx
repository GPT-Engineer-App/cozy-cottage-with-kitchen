import { Container, VStack, Text, Box, Image, IconButton } from "@chakra-ui/react";
import { FaHome, FaBed, FaUtensils } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" isRound />
          <Text fontSize="2xl" mt={4}>
            Welcome to Your New Home
          </Text>
        </Box>

        <Box textAlign="center">
          <IconButton aria-label="Bedroom" icon={<FaBed />} size="lg" isRound />
          <Text fontSize="xl" mt={4}>
            2 Bedrooms
          </Text>
          <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTcxNTg4MDM2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Bedroom" boxSize="200px" mt={4} />
        </Box>

        <Box textAlign="center">
          <IconButton aria-label="Kitchen" icon={<FaUtensils />} size="lg" isRound />
          <Text fontSize="xl" mt={4}>
            Kitchen
          </Text>
          <Image src="https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraXRjaGVufGVufDB8fHx8MTcxNTg4MDM2Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Kitchen" boxSize="200px" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
