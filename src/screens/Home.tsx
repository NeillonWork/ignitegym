import { useState } from "react";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, Text, Heading, HStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExercicesCard";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Triceps",
    "Ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px="$8">
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercicios
          </Heading>
          <Text>4</Text>
        </HStack>
        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
