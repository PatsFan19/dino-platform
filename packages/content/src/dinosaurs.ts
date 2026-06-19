import type { QuizQuestion, TopicEntry } from './schemas';

export const DINOSAURS: TopicEntry[] = [
  {
    id: 't-rex',
    name: 'T. Rex',
    pronunciation: 'tie-RAN-oh-SOR-us REX',
    category: 'Cretaceous',
    kidFact:
      'T. Rex had a bite stronger than any animal alive today — powerful enough to ' +
      'crunch straight through solid bone! Those tiny arms look funny, but T. Rex ' +
      "didn't need them: its huge jaws did all the work.",
    sizeComparison: 'as tall as a two-story house',
    imageKey: 'dinosaurs/t-rex',
  },
  {
    id: 'triceratops',
    name: 'Triceratops',
    pronunciation: 'try-SAIR-ah-tops',
    category: 'Cretaceous',
    kidFact:
      'Triceratops had three enormous horns — two above its eyes and one on its nose — ' +
      'and a huge bony frill around its neck like a built-in shield. ' +
      'Scientists think the frill could flush with colour when Triceratops was showing off!',
    sizeComparison: 'as long as a large pickup truck',
    imageKey: 'dinosaurs/triceratops',
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    pronunciation: 'steg-oh-SOR-us',
    category: 'Jurassic',
    kidFact:
      'Stegosaurus had two rows of tall bony plates running down its back like a spiky ' +
      'mohawk! Its tail had four sharp spikes — palaeontologists call them the ' +
      '"thagomizer" — which it swung at predators like a club.',
    sizeComparison: 'as long as a school bus',
    imageKey: 'dinosaurs/stegosaurus',
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    pronunciation: 'veh-LOSS-ih-rap-tor',
    category: 'Cretaceous',
    kidFact:
      'Forget the movies — real Velociraptors were only about the size of a large turkey, ' +
      'and they were covered in feathers! Each foot had a curved killing claw, and they ' +
      'likely hunted together in packs, just like wolves do today.',
    sizeComparison: 'about the size of a large turkey',
    imageKey: 'dinosaurs/velociraptor',
  },
  {
    id: 'brachiosaurus',
    name: 'Brachiosaurus',
    pronunciation: 'BRAK-ee-oh-SOR-us',
    category: 'Jurassic',
    kidFact:
      'Brachiosaurus had a neck so long it could reach leaves at the very tops of trees ' +
      'that no other dinosaur could touch — like the ultimate giraffe! ' +
      'It needed to eat roughly 400 kg of plants every single day just to stay full.',
    sizeComparison: 'as tall as a four-story building',
    imageKey: 'dinosaurs/brachiosaurus',
  },
  {
    id: 'pteranodon',
    name: 'Pteranodon',
    pronunciation: 'teh-RAN-oh-don',
    category: 'Cretaceous',
    kidFact:
      "Pteranodon wasn't actually a dinosaur — it was a flying reptile called a pterosaur! " +
      'Its wings were made of stretchy skin attached to one super-long finger on each hand. ' +
      'It soared over ancient seas and swooped down to snatch fish, just like a pelican.',
    sizeComparison: 'wingspan as wide as a small car is long',
    imageKey: 'dinosaurs/pteranodon',
  },
];

export const DINO_QUIZ_MAP: Record<string, QuizQuestion[]> = {
  't-rex': [
    {
      id: 't-rex-q1',
      topicId: 'topic-dinosaurs',
      question: 'What did T. Rex like to eat?',
      narration: { locale: 'en-US', script: 'What did T. Rex like to eat?' },
      options: [
        { id: 'a', label: 'Plants and leaves' },
        { id: 'b', label: 'Meat from other dinosaurs' },
        { id: 'c', label: 'Fish and berries' },
      ],
      correctOptionId: 'b',
      explanation:
        'T. Rex was a carnivore — a meat eater! Its powerful jaws could crunch straight through bone.',
      explanationNarration: {
        locale: 'en-US',
        script: 'T. Rex was a carnivore — a meat eater! Its powerful jaws could crunch straight through bone.',
      },
    },
    {
      id: 't-rex-q2',
      topicId: 'topic-dinosaurs',
      question: "What was T. Rex's most powerful weapon?",
      narration: { locale: 'en-US', script: "What was T. Rex's most powerful weapon?" },
      options: [
        { id: 'a', label: 'Its tiny arms' },
        { id: 'b', label: 'Its giant jaws' },
        { id: 'c', label: 'Its tail' },
      ],
      correctOptionId: 'b',
      explanation:
        'T. Rex had one of the strongest bites of any animal that ever lived — even stronger than a crocodile!',
      explanationNarration: {
        locale: 'en-US',
        script: 'T. Rex had one of the strongest bites of any animal that ever lived — even stronger than a crocodile!',
      },
    },
    {
      id: 't-rex-q3',
      topicId: 'topic-dinosaurs',
      question: 'How tall was a full-grown T. Rex?',
      narration: { locale: 'en-US', script: 'How tall was a full-grown T. Rex?' },
      options: [
        { id: 'a', label: 'About as tall as a cat' },
        { id: 'b', label: 'As tall as a two-story house' },
        { id: 'c', label: 'The same size as you' },
      ],
      correctOptionId: 'b',
      explanation:
        'A full-grown T. Rex stood about 6 metres tall — taller than most houses!',
      explanationNarration: {
        locale: 'en-US',
        script: 'A full-grown T. Rex stood about 6 metres tall — taller than most houses!',
      },
    },
  ],

  'triceratops': [
    {
      id: 'triceratops-q1',
      topicId: 'topic-dinosaurs',
      question: 'How many horns did Triceratops have?',
      narration: { locale: 'en-US', script: 'How many horns did Triceratops have?' },
      options: [
        { id: 'a', label: 'One' },
        { id: 'b', label: 'Two' },
        { id: 'c', label: 'Three' },
      ],
      correctOptionId: 'c',
      explanation:
        '"Tri" means three! Triceratops had two long horns above its eyes and one shorter horn on its nose.',
      explanationNarration: {
        locale: 'en-US',
        script: '"Tri" means three! Triceratops had two long horns above its eyes and one shorter horn on its nose.',
      },
    },
    {
      id: 'triceratops-q2',
      topicId: 'topic-dinosaurs',
      question: "What was the big frill on Triceratops's neck for?",
      narration: { locale: 'en-US', script: "What was the big frill on Triceratops's neck for?" },
      options: [
        { id: 'a', label: 'To store food' },
        { id: 'b', label: 'To fly through the air' },
        { id: 'c', label: 'To protect its neck and show off' },
      ],
      correctOptionId: 'c',
      explanation:
        'The frill acted like a built-in shield to protect Triceratops, and it might have changed colour to communicate!',
      explanationNarration: {
        locale: 'en-US',
        script: 'The frill acted like a built-in shield to protect Triceratops, and it might have changed colour to communicate!',
      },
    },
    {
      id: 'triceratops-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Triceratops eat?',
      narration: { locale: 'en-US', script: 'What did Triceratops eat?' },
      options: [
        { id: 'a', label: 'Meat from other dinosaurs' },
        { id: 'b', label: 'Plants and shrubs' },
        { id: 'c', label: 'Insects' },
      ],
      correctOptionId: 'b',
      explanation:
        'Triceratops was a herbivore — a plant eater! Its beak was perfect for snipping through tough plants.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Triceratops was a herbivore — a plant eater! Its beak was perfect for snipping through tough plants.',
      },
    },
  ],

  'stegosaurus': [
    {
      id: 'stegosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: "What are the spikes on Stegosaurus's tail called?",
      narration: { locale: 'en-US', script: "What are the spikes on Stegosaurus's tail called?" },
      options: [
        { id: 'a', label: 'Plates' },
        { id: 'b', label: 'The thagomizer' },
        { id: 'c', label: 'Spiky spikes' },
      ],
      correctOptionId: 'b',
      explanation:
        'Scientists named the tail spikes "the thagomizer" — and Stegosaurus used them to defend against predators!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Scientists named the tail spikes "the thagomizer" — and Stegosaurus used them to defend against predators!',
      },
    },
    {
      id: 'stegosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: "What were the big plates on Stegosaurus's back for?",
      narration: { locale: 'en-US', script: "What were the big plates on Stegosaurus's back for?" },
      options: [
        { id: 'a', label: 'For flying' },
        { id: 'b', label: 'To help warm up and cool down' },
        { id: 'c', label: 'To store food' },
      ],
      correctOptionId: 'b',
      explanation:
        'The plates may have soaked up heat from the sun and released heat when Stegosaurus got too hot — like a built-in thermostat!',
      explanationNarration: {
        locale: 'en-US',
        script: 'The plates may have soaked up heat from the sun and released heat when Stegosaurus got too hot — like a built-in thermostat!',
      },
    },
    {
      id: 'stegosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'How big was the brain of a Stegosaurus?',
      narration: { locale: 'en-US', script: 'How big was the brain of a Stegosaurus?' },
      options: [
        { id: 'a', label: 'As big as a walnut' },
        { id: 'b', label: 'As big as a football' },
        { id: 'c', label: 'As big as yours' },
      ],
      correctOptionId: 'a',
      explanation:
        'Despite being as long as a school bus, Stegosaurus had a tiny brain — about the size of a walnut! Small but it did the job.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Despite being as long as a school bus, Stegosaurus had a tiny brain — about the size of a walnut! Small but it did the job.',
      },
    },
  ],

  'velociraptor': [
    {
      id: 'velociraptor-q1',
      topicId: 'topic-dinosaurs',
      question: 'How big was a real Velociraptor?',
      narration: { locale: 'en-US', script: 'How big was a real Velociraptor?' },
      options: [
        { id: 'a', label: 'As big as a large turkey' },
        { id: 'b', label: 'As big as a school bus' },
        { id: 'c', label: 'As tall as a house' },
      ],
      correctOptionId: 'a',
      explanation:
        'Real Velociraptors were only about the size of a large turkey — much smaller than they look in the movies!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Real Velociraptors were only about the size of a large turkey — much smaller than they look in the movies!',
      },
    },
    {
      id: 'velociraptor-q2',
      topicId: 'topic-dinosaurs',
      question: "What covered Velociraptor's body?",
      narration: { locale: 'en-US', script: "What covered Velociraptor's body?" },
      options: [
        { id: 'a', label: 'Scales like a fish' },
        { id: 'b', label: 'Feathers' },
        { id: 'c', label: 'Fur like a dog' },
      ],
      correctOptionId: 'b',
      explanation:
        'Real Velociraptors had feathers! They are closely related to modern birds — so a chicken is actually a tiny cousin of Velociraptor!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Real Velociraptors had feathers! They are closely related to modern birds — so a chicken is actually a tiny cousin of Velociraptor!',
      },
    },
    {
      id: 'velociraptor-q3',
      topicId: 'topic-dinosaurs',
      question: "What was special about Velociraptor's foot?",
      narration: { locale: 'en-US', script: "What was special about Velociraptor's foot?" },
      options: [
        { id: 'a', label: 'Webbed feet for swimming' },
        { id: 'b', label: 'Hooves like a horse' },
        { id: 'c', label: 'A large curved claw for hunting' },
      ],
      correctOptionId: 'c',
      explanation:
        'Velociraptor had a special sickle-shaped claw on each foot that it kept raised off the ground and used like a dagger to catch prey!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Velociraptor had a special sickle-shaped claw on each foot that it kept raised off the ground and used like a dagger to catch prey!',
      },
    },
  ],

  'brachiosaurus': [
    {
      id: 'brachiosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: 'What was Brachiosaurus most famous for?',
      narration: { locale: 'en-US', script: 'What was Brachiosaurus most famous for?' },
      options: [
        { id: 'a', label: 'Its enormous teeth' },
        { id: 'b', label: 'Its incredibly long neck' },
        { id: 'c', label: 'Its super-fast running' },
      ],
      correctOptionId: 'b',
      explanation:
        'Brachiosaurus had a neck so long it could reach leaves at the very tops of tall trees — like the ultimate giraffe!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Brachiosaurus had a neck so long it could reach leaves at the very tops of tall trees — like the ultimate giraffe!',
      },
    },
    {
      id: 'brachiosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'What did Brachiosaurus eat?',
      narration: { locale: 'en-US', script: 'What did Brachiosaurus eat?' },
      options: [
        { id: 'a', label: 'Meat from other dinosaurs' },
        { id: 'b', label: 'Fish from lakes' },
        { id: 'c', label: 'Leaves from the tops of tall trees' },
      ],
      correctOptionId: 'c',
      explanation:
        'Brachiosaurus used its amazing long neck to reach treetop leaves that no other dinosaur could get to!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Brachiosaurus used its amazing long neck to reach treetop leaves that no other dinosaur could get to!',
      },
    },
    {
      id: 'brachiosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'How much did Brachiosaurus eat in a single day?',
      narration: { locale: 'en-US', script: 'How much did Brachiosaurus eat in a single day?' },
      options: [
        { id: 'a', label: 'About the same as you' },
        { id: 'b', label: 'About 400 kilograms of plants' },
        { id: 'c', label: 'Nothing — it stored energy like a cactus' },
      ],
      correctOptionId: 'b',
      explanation:
        'Brachiosaurus needed to munch through roughly 400 kilograms of plants every single day just to stay full — that is like eating a whole car full of salad!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Brachiosaurus needed to munch through roughly 400 kilograms of plants every single day just to stay full — that is like eating a whole car full of salad!',
      },
    },
  ],

  'pteranodon': [
    {
      id: 'pteranodon-q1',
      topicId: 'topic-dinosaurs',
      question: 'Was Pteranodon actually a dinosaur?',
      narration: { locale: 'en-US', script: 'Was Pteranodon actually a dinosaur?' },
      options: [
        { id: 'a', label: 'Yes, it was a flying dinosaur' },
        { id: 'b', label: 'No, it was a flying reptile called a pterosaur' },
        { id: 'c', label: 'No, it was a giant bird' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pteranodon was a pterosaur — a flying reptile that lived at the same time as dinosaurs but was not actually one!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Pteranodon was a pterosaur — a flying reptile that lived at the same time as dinosaurs but was not actually one!',
      },
    },
    {
      id: 'pteranodon-q2',
      topicId: 'topic-dinosaurs',
      question: "What were Pteranodon's wings made of?",
      narration: { locale: 'en-US', script: "What were Pteranodon's wings made of?" },
      options: [
        { id: 'a', label: 'Feathers like a bird' },
        { id: 'b', label: 'Scales like a fish' },
        { id: 'c', label: 'Skin stretched over a very long finger' },
      ],
      correctOptionId: 'c',
      explanation:
        "Pteranodon's wings were made of thin stretchy skin attached to an extra-long finger on each hand — like a natural hang glider!",
      explanationNarration: {
        locale: 'en-US',
        script: "Pteranodon's wings were made of thin stretchy skin attached to an extra-long finger on each hand — like a natural hang glider!",
      },
    },
    {
      id: 'pteranodon-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Pteranodon eat?',
      narration: { locale: 'en-US', script: 'What did Pteranodon eat?' },
      options: [
        { id: 'a', label: 'Plants and berries' },
        { id: 'b', label: 'Other flying reptiles' },
        { id: 'c', label: 'Fish it snatched from the sea' },
      ],
      correctOptionId: 'c',
      explanation:
        'Pteranodon soared over ancient oceans and swooped down to snatch fish — just like a pelican does today!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Pteranodon soared over ancient oceans and swooped down to snatch fish — just like a pelican does today!',
      },
    },
  ],
};
