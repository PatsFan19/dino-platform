import type { Fact, Topic, ContentBundle } from '@dinasour/content';

export const dinoTopic: Topic = {
  id: 'topic-dinosaurs',
  slug: 'dinosaurs',
  title: 'Dinosaurs',
  description: 'Discover the giants that ruled the Earth millions of years ago.',
  coverImageAlt: 'A friendly T-Rex standing in a prehistoric jungle',
  ageRange: { min: 4, max: 9 },
};

export const dinoFacts: Fact[] = [
  {
    id: 'fact-trex',
    topicId: 'topic-dinosaurs',
    title: 'T-Rex had tiny arms!',
    body:
      'Tyrannosaurus Rex was one of the biggest meat-eating dinosaurs ever. ' +
      'Even though it had very short arms, it had the strongest bite of any land animal.',
    imageAlt: 'A Tyrannosaurus Rex roaring with its small arms visible',
    narration: {
      locale: 'en-US',
      script:
        "Tyrannosaurus Rex was one of the biggest meat-eating dinosaurs ever! " +
        "Even though it had really tiny arms, it had a super strong bite.",
      audioFile: 'assets/audio/fact-trex.mp3',
    },
    tags: ['theropod', 'carnivore', 'cretaceous'],
  },
  {
    id: 'fact-triceratops',
    topicId: 'topic-dinosaurs',
    title: 'Triceratops had three horns',
    body:
      'Triceratops had three sharp horns on its face and a big bony frill around its neck. ' +
      'It used these to protect itself from predators like T-Rex.',
    imageAlt: 'A Triceratops with three large horns and a wide neck frill',
    narration: {
      locale: 'en-US',
      script:
        "Triceratops had three sharp horns and a big bony shield around its neck! " +
        "It used them to stay safe from hungry T-Rexes.",
      audioFile: 'assets/audio/fact-triceratops.mp3',
    },
    tags: ['ceratopsid', 'herbivore', 'cretaceous'],
  },
  {
    id: 'fact-brachiosaurus',
    topicId: 'topic-dinosaurs',
    title: 'Brachiosaurus had a super long neck',
    body:
      'Brachiosaurus was so tall it could eat leaves from the very tops of trees — ' +
      'like a giant prehistoric giraffe! It was as long as two school buses.',
    imageAlt: 'A Brachiosaurus stretching its long neck to eat leaves from a tall tree',
    narration: {
      locale: 'en-US',
      script:
        "Brachiosaurus was like a giant giraffe dinosaur! " +
        "Its neck was so long it could reach the very tops of the tallest trees.",
      audioFile: 'assets/audio/fact-brachiosaurus.mp3',
    },
    tags: ['sauropod', 'herbivore', 'jurassic'],
  },
];

export const dinoBundle: ContentBundle = {
  topic: dinoTopic,
  facts: dinoFacts,
  quiz: [],
  version: '0.1.0',
};
