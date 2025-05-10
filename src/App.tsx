import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Badge,
    Stack,
    Image,
    Flex,
    Skeleton,
    Code,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";

// Import components from their namespaces in Chakra UI v3
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/stat";
import { Progress } from "@chakra-ui/progress";
import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/tabs";
import { useToast } from "@chakra-ui/toast";

function App() {
    const [currentTime, setCurrentTime] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const toast = useToast();

    // Use environment variables for API URL
    const API_URL =
        import.meta.env.VITE_API_BASE_URL ||
        "https://linganodjango-8d1cd6dceb8a.herokuapp.com";

    const fetchTime = () => {
        setIsLoading(true);
        console.log("Fetching time from:", `${API_URL}/api/current-time/`);

        fetch(`${API_URL}/api/current-time/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok: " + response.status
                    );
                }
                return response.json();
            })
            .then((data) => {
                console.log("Time data received:", data);
                setCurrentTime(data.current_time);
                setIsLoading(false);
                setError("");
                toast({
                    title: "Time Updated",
                    description: "Successfully fetched current time",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch((error) => {
                console.error("Error fetching time:", error);
                setCurrentTime("Error loading time");
                setIsLoading(false);
                setError(error.message || "Failed to fetch time");
                toast({
                    title: "Error",
                    description:
                        error.message || "Failed to fetch current time",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });
    };

    useEffect(() => {
        console.log("App component mounted");
        fetchTime();
        // Refresh time every minute
        const intervalId = setInterval(fetchTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container maxW="container.xl" py={8} className="app-container">
            <VStack gap={10} alignItems="stretch">
                {/* 1. Hero Section with Current Time */}
                <Box textAlign="center" py={8}>
                    <Heading as="h1" size="xl" mb={6} className="gradient-text">
                        Lingano Dashboard
                    </Heading>
                    <Card className="time-card">
                        <CardHeader>
                            <Heading size="md">Current Server Time</Heading>
                        </CardHeader>
                        <CardBody>
                            {isLoading ? (
                                <Skeleton height="30px" />
                            ) : error ? (
                                <Alert status="error">
                                    <AlertIcon />
                                    {error}
                                </Alert>
                            ) : (
                                <Stat className="time-stat">
                                    <StatLabel>Server Time</StatLabel>
                                    <StatNumber
                                        fontSize="2xl"
                                        className="animated-time"
                                    >
                                        {currentTime}
                                    </StatNumber>
                                    <StatHelpText>
                                        Auto-refreshes every minute
                                    </StatHelpText>
                                </Stat>
                            )}
                        </CardBody>
                        <CardFooter display="flex" justifyContent="center">
                            <Button
                                colorScheme="blue"
                                onClick={fetchTime}
                                loading={isLoading}
                                className="pulse-button"
                            >
                                ⟳ Refresh Now
                            </Button>
                        </CardFooter>
                    </Card>
                </Box>

                {/* 2. Feature Cards */}
                <Box>
                    <Heading size="lg" mb={4}>
                        Key Features
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                        <Card>
                            <CardBody>
                                <Image
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
                                    alt="Coding"
                                    borderRadius="md"
                                    height="200px"
                                    objectFit="cover"
                                />
                                <Stack mt="6" gap="3">
                                    <Heading size="md">
                                        Real-time Updates
                                    </Heading>
                                    <Text>
                                        Stay updated with the latest information
                                        in real-time.
                                    </Text>
                                    <Badge
                                        colorScheme="green"
                                        alignSelf="start"
                                    >
                                        New
                                    </Badge>
                                </Stack>
                            </CardBody>
                            <Box borderTopWidth="1px" borderColor="gray.200" />
                            <CardFooter>
                                <Button variant="ghost" colorScheme="blue">
                                    Learn more
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardBody>
                                <Image
                                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3"
                                    alt="Mobile"
                                    borderRadius="md"
                                    height="200px"
                                    objectFit="cover"
                                />
                                <Stack mt="6" gap="3">
                                    <Heading size="md">
                                        Responsive Design
                                    </Heading>
                                    <Text>
                                        Our interface adapts perfectly to any
                                        device, from mobile phones to large
                                        desktops.
                                    </Text>
                                    <Badge
                                        colorScheme="purple"
                                        alignSelf="start"
                                    >
                                        Popular
                                    </Badge>
                                </Stack>
                            </CardBody>
                            <Box borderTopWidth="1px" borderColor="gray.200" />
                            <CardFooter>
                                <Button variant="ghost" colorScheme="blue">
                                    Learn more
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardBody>
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
                                    alt="Analytics"
                                    borderRadius="md"
                                    height="200px"
                                    objectFit="cover"
                                />
                                <Stack mt="6" gap="3">
                                    <Heading size="md">
                                        Advanced Analytics
                                    </Heading>
                                    <Text>
                                        Track and analyze your data with our
                                        powerful analytics dashboard tools.
                                    </Text>
                                    <Badge
                                        colorScheme="orange"
                                        alignSelf="start"
                                    >
                                        Beta
                                    </Badge>
                                </Stack>
                            </CardBody>
                            <Box borderTopWidth="1px" borderColor="gray.200" />
                            <CardFooter>
                                <Button variant="ghost" colorScheme="blue">
                                    Learn more
                                </Button>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* 3. Time-Based Component */}
                <Box bg="gray.50" p={6} borderRadius="md">
                    <Heading size="md" mb={4}>
                        Time-Based Greeting
                    </Heading>
                    {!isLoading && !error && (
                        <Card>
                            <CardBody>
                                <Text fontSize="xl">
                                    {(() => {
                                        try {
                                            if (!currentTime)
                                                return "Hello, welcome to Lingano!";

                                            // Parse the time string from the API
                                            const time = new Date(currentTime);
                                            const hour = time.getHours();

                                            // Return greeting based on time of day
                                            if (hour < 12)
                                                return "Good morning! Hope you have a great day ahead.";
                                            if (hour < 17)
                                                return "Good afternoon! How's your day going?";
                                            return "Good evening! Hope you had a productive day.";
                                        } catch (e) {
                                            console.error(
                                                "Error parsing time:",
                                                e
                                            );
                                            return "Hello, welcome to Lingano!";
                                        }
                                    })()}
                                </Text>
                                <Text mt={2} color="gray.600">
                                    This greeting changes based on the current
                                    server time.
                                </Text>
                            </CardBody>
                        </Card>
                    )}
                </Box>

                {/* 4. Progress Section */}
                <Box>
                    <Heading size="md" mb={4}>
                        Project Progress
                    </Heading>
                    <Text mb={2}>Frontend Completion: 75%</Text>
                    <Progress
                        value={75}
                        mb={4}
                        colorScheme="green"
                        borderRadius="md"
                    />
                    <Text mb={2}>Backend Integration: 60%</Text>
                    <Progress
                        value={60}
                        mb={4}
                        colorScheme="blue"
                        borderRadius="md"
                    />
                    <Text mb={2}>Testing Coverage: 45%</Text>
                    <Progress
                        value={45}
                        colorScheme="orange"
                        borderRadius="md"
                    />
                </Box>

                {/* 5. Tabs Component */}
                <Box>
                    <Tabs variant="enclosed" colorScheme="blue" isFitted>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>API Status</Tab>
                            <Tab>Configuration</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Text>
                                    This dashboard provides an overview of our
                                    system's status and features. Use the tabs
                                    to navigate between different sections.
                                </Text>
                            </TabPanel>
                            <TabPanel>
                                <Stack gap={4}>
                                    <Flex
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Text fontWeight="bold">
                                            Current Time API
                                        </Text>
                                        <Badge
                                            colorScheme={
                                                error ? "red" : "green"
                                            }
                                        >
                                            {error ? "Offline" : "Online"}
                                        </Badge>
                                    </Flex>
                                    <Box
                                        borderTopWidth="1px"
                                        borderColor="gray.200"
                                    />
                                    <Text>
                                        Last fetched:{" "}
                                        {isLoading
                                            ? "Loading..."
                                            : currentTime || "N/A"}
                                    </Text>
                                    <Button
                                        size="sm"
                                        onClick={fetchTime}
                                        loading={isLoading}
                                        colorScheme="blue"
                                        variant="outline"
                                    >
                                        Check API Status
                                    </Button>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Text mb={4}>
                                    Current API endpoint configuration:
                                </Text>
                                <Code p={3} borderRadius="md" bg="gray.50">
                                    {`API_URL = ${API_URL}`}
                                </Code>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

                {/* 6. Stats Grid */}
                <Box>
                    <Heading size="md" mb={4}>
                        Dashboard Analytics
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
                        <Card>
                            <CardBody>
                                <Stat>
                                    <StatLabel>Users</StatLabel>
                                    <StatNumber>5,670</StatNumber>
                                    <StatHelpText>
                                        Feb 12 - May 10, 2025
                                    </StatHelpText>
                                </Stat>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Stat>
                                    <StatLabel>Sessions</StatLabel>
                                    <StatNumber>45.6k</StatNumber>
                                    <StatHelpText>↗︎ 23.36%</StatHelpText>
                                </Stat>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Stat>
                                    <StatLabel>Bounce Rate</StatLabel>
                                    <StatNumber>27.23%</StatNumber>
                                    <StatHelpText>↘︎ 9.05%</StatHelpText>
                                </Stat>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Stat>
                                    <StatLabel>Avg. Visit Time</StatLabel>
                                    <StatNumber>4m 32s</StatNumber>
                                    <StatHelpText>↗︎ 14.23%</StatHelpText>
                                </Stat>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* 7. Footer */}
                <Flex
                    py={10}
                    justifyContent="center"
                    borderTopWidth={1}
                    borderColor="gray.200"
                >
                    <Text>© 2025 Lingano. All rights reserved.</Text>
                </Flex>
            </VStack>
        </Container>
    );
}

export default App;
