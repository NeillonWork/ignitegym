import { Heading, HStack, VStack, Text } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$3"
      mb="$3"
      bg="$gray600"
      rounded="$sm"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack flex={1}>
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$md">
        08:30
      </Text>
    </HStack>
  );
}
