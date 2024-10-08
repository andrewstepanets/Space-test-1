import React from 'react';
import { useState } from 'react';
import { Box, Button, Input, VStack, Flex, Text } from '@chakra-ui/react';
import { DataDetails } from './types';

const data: DataDetails[] = [
  { name: 'Item A', price: 125 },
  { name: 'Item B', price: 230 },
  { name: 'Item C', price: 295 },
  { name: 'Item D', price: 245 },
  { name: 'Item E', price: 900 },
  { name: 'Item F', price: 875 },
  { name: 'Item G', price: 235 },
  { name: 'Item H', price: 400 },
];

export function Test() {
  const [filterText, setFilterText] = useState<string>('');
  const [showCheapest, setShowCheapest] = useState<boolean>(true);

  // Filter items by name
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sort items by price
  const sortedData = [...filteredData].sort((a, b) => a.price - b.price);

  // Show either the cheapest 5 or all items
  const displayData = showCheapest ? sortedData.slice(0, 5) : sortedData;

  return (
    <Box p={6} maxW='50vw' mx='auto'>
      <Flex mb={4} align='center' justify='space-between'>
        <Input
          placeholder='Filter by name'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          width='80%'
        />
        <Button
          colorScheme='blue'
          onClick={() => {
            setShowCheapest(!showCheapest);
            setFilterText(''); // Reset filter when toggling between all and cheapest
          }}
          ml={2}
        >
          {showCheapest ? 'Show All Items' : 'Show Cheapest 5'}
        </Button>
      </Flex>

      {/* Display message if no items are found */}
      {filteredData.length === 0 ? (
        <Text textAlign='center' mt={4} color='gray.500'>
          No items found
        </Text>
      ) : (
        <VStack spacing={4} align='stretch'>
          {displayData.map((item) => (
            <Flex
              key={item.name}
              justify='space-between'
              bg='gray.100'
              p={4}
              borderRadius='md'
              _hover={{ bg: 'blue.100' }}
            >
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </Flex>
          ))}
        </VStack>
      )}
    </Box>
  );
}
