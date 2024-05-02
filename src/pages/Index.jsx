// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, Input, Text, VStack, Progress, useToast } from "@chakra-ui/react";
import { FaSignOutAlt, FaLock, FaUnlock } from "react-icons/fa";
import { useState, useEffect } from "react";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [habit, setHabit] = useState("");
  const [habitLocked, setHabitLocked] = useState(false);
  const [daysWithoutHabit, setDaysWithoutHabit] = useState(0);
  const [competitionStarted, setCompetitionStarted] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Simulate fetching data on mount
    setWeight("70");
    setHabit("Snacking");
    setDaysWithoutHabit(5);
    setCompetitionStarted(true);
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have successfully logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleWeightSubmit = () => {
    toast({
      title: "Weight Updated",
      description: `Your weight is updated to ${weight} kg.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleHabitSave = () => {
    if (!competitionStarted) {
      setHabitLocked(true);
      toast({
        title: "Habit Locked",
        description: "Your habit goal is locked in for the competition.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4}>
      <Flex w="full" justifyContent="space-between" alignItems="center" p={4} bg="blue.500" color="white">
        <Heading size="md">Healthy Habits Competition</Heading>
        <Button leftIcon={<FaSignOutAlt />} onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
      <Box p={4} shadow="md" borderWidth="1px">
        <VStack spacing={4}>
          <Text fontWeight="bold">Daily Weigh-In</Text>
          <Input placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <Button onClick={handleWeightSubmit}>Submit</Button>
        </VStack>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px">
        <VStack spacing={4}>
          <Text fontWeight="bold">Habit Elimination Entry</Text>
          <Input placeholder="Enter a habit to eliminate" value={habit} onChange={(e) => setHabit(e.target.value)} isReadOnly={habitLocked} />
          <Button leftIcon={habitLocked ? <FaLock /> : <FaUnlock />} onClick={handleHabitSave} isDisabled={habitLocked}>
            {habitLocked ? "Locked" : "Save"}
          </Button>
        </VStack>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px">
        <VStack spacing={4}>
          <Text fontWeight="bold">Habit Progress</Text>
          <Text>{`Days without ${habit}: ${daysWithoutHabit}`}</Text>
          <Progress value={daysWithoutHabit} max={30} w="full" />
        </VStack>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px">
        <VStack spacing={4}>
          <Text fontWeight="bold">Competition Countdown</Text>
          <Text>Competition ends in: 10 days</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
