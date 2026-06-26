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
  {
    id: 'spinosaurus',
    name: 'Spinosaurus',
    pronunciation: 'SPY-noh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Spinosaurus was the largest meat-eating dinosaur ever discovered — even bigger than ' +
      'T. Rex! It had a giant sail on its back made of long spines, which may have helped ' +
      'it stay cool or impress friends. Scientists think it was an expert fisher that waded ' +
      'into rivers to catch enormous fish with its crocodile-like snout.',
    sizeComparison: 'longer than a school bus',
    imageKey: 'dinosaurs/spinosaurus',
  },
  {
    id: 'ankylosaurus',
    name: 'Ankylosaurus',
    pronunciation: 'an-KY-loh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Ankylosaurus was built like a living tank — its back was covered in thick bony ' +
      'armour, and spikes stuck out from its sides. Its most fearsome feature was the ' +
      'enormous bony club on the end of its tail, which could swing with enough force ' +
      'to shatter bones. Even T. Rex would think twice before picking a fight!',
    sizeComparison: 'as long as a large pickup truck',
    imageKey: 'dinosaurs/ankylosaurus',
  },
  {
    id: 'parasaurolophus',
    name: 'Parasaurolophus',
    pronunciation: 'par-ah-SOR-oh-LOH-fus',
    category: 'Cretaceous',
    kidFact:
      'Parasaurolophus had a long, curved hollow tube on top of its head — like a ' +
      'built-in musical instrument! By blowing air through the tube, it could make a ' +
      'deep, booming call to communicate with its herd from far away. Scientists built ' +
      'a model of the crest and played it — it sounded just like a low trombone!',
    sizeComparison: 'about the same length as a school bus',
    imageKey: 'dinosaurs/parasaurolophus',
  },
  {
    id: 'pachycephalosaurus',
    name: 'Pachycephalosaurus',
    pronunciation: 'pak-ee-SEF-ah-loh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Pachycephalosaurus had a dome of solid bone on top of its head up to 25 centimetres ' +
      'thick — almost as thick as your arm is long! Males would charge at each other and ' +
      'crash their domed heads together to compete, just like bighorn sheep do today. ' +
      'Its name literally means "thick-headed lizard"!',
    sizeComparison: 'about the length of a large car',
    imageKey: 'dinosaurs/pachycephalosaurus',
  },
  {
    id: 'diplodocus',
    name: 'Diplodocus',
    pronunciation: 'dip-LOD-oh-kus',
    category: 'Jurassic',
    kidFact:
      'Diplodocus had one of the longest tails of any animal that ever lived — up to ' +
      '14 metres! Scientists think it could crack its tail like a whip, creating a sonic ' +
      'boom louder than a thunderclap. Despite being one of the longest animals ever, ' +
      'its head was tiny and it spent its days peacefully munching plants.',
    sizeComparison: 'as long as three school buses end to end',
    imageKey: 'dinosaurs/diplodocus',
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

  'spinosaurus': [
    {
      id: 'spinosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: 'Which dinosaur was bigger — T. Rex or Spinosaurus?',
      narration: { locale: 'en-US', script: 'Which dinosaur was bigger — T. Rex or Spinosaurus?' },
      options: [
        { id: 'a', label: 'T. Rex was much bigger' },
        { id: 'b', label: 'They were exactly the same size' },
        { id: 'c', label: 'Spinosaurus was bigger!' },
      ],
      correctOptionId: 'c',
      explanation: 'Spinosaurus is the largest meat-eating dinosaur ever found — even bigger than T. Rex!',
      explanationNarration: { locale: 'en-US', script: 'Spinosaurus is the largest meat-eating dinosaur ever found — even bigger than T. Rex!' },
    },
    {
      id: 'spinosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: "What was the tall structure on Spinosaurus's back?",
      narration: { locale: 'en-US', script: "What was the tall structure on Spinosaurus's back?" },
      options: [
        { id: 'a', label: 'A shell like a turtle' },
        { id: 'b', label: 'A sail made of long spines' },
        { id: 'c', label: 'Feathers for flying' },
      ],
      correctOptionId: 'b',
      explanation: 'Spinosaurus had a giant sail on its back made of long spines — it may have helped it stay cool or impress other dinosaurs!',
      explanationNarration: { locale: 'en-US', script: 'Spinosaurus had a giant sail on its back made of long spines — it may have helped it stay cool or impress other dinosaurs!' },
    },
    {
      id: 'spinosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Spinosaurus mostly eat?',
      narration: { locale: 'en-US', script: 'What did Spinosaurus mostly eat?' },
      options: [
        { id: 'a', label: 'Plants and berries' },
        { id: 'b', label: 'Other dinosaurs' },
        { id: 'c', label: 'Fish from rivers' },
      ],
      correctOptionId: 'c',
      explanation: 'Spinosaurus was an expert fisher! Its long crocodile-like snout was perfect for snatching fish from rivers.',
      explanationNarration: { locale: 'en-US', script: 'Spinosaurus was an expert fisher! Its long crocodile-like snout was perfect for snatching fish from rivers.' },
    },
  ],

  'ankylosaurus': [
    {
      id: 'ankylosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: "What covered Ankylosaurus's back?",
      narration: { locale: 'en-US', script: "What covered Ankylosaurus's back?" },
      options: [
        { id: 'a', label: 'Thick bony armour' },
        { id: 'b', label: 'Feathers' },
        { id: 'c', label: 'Scales like a fish' },
      ],
      correctOptionId: 'a',
      explanation: "Ankylosaurus was like a living tank — its back was covered in thick bony armour to protect it from predators!",
      explanationNarration: { locale: 'en-US', script: "Ankylosaurus was like a living tank — its back was covered in thick bony armour to protect it from predators!" },
    },
    {
      id: 'ankylosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: "What weapon did Ankylosaurus have on its tail?",
      narration: { locale: 'en-US', script: "What weapon did Ankylosaurus have on its tail?" },
      options: [
        { id: 'a', label: 'Sharp spikes' },
        { id: 'b', label: 'A massive bony club' },
        { id: 'c', label: 'A whip-like tip' },
      ],
      correctOptionId: 'b',
      explanation: 'The club on the end of its tail could swing hard enough to shatter bones — even T. Rex would avoid picking a fight!',
      explanationNarration: { locale: 'en-US', script: 'The club on the end of its tail could swing hard enough to shatter bones — even T. Rex would avoid picking a fight!' },
    },
    {
      id: 'ankylosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Ankylosaurus eat?',
      narration: { locale: 'en-US', script: 'What did Ankylosaurus eat?' },
      options: [
        { id: 'a', label: 'Meat from other dinosaurs' },
        { id: 'b', label: 'Fish' },
        { id: 'c', label: 'Plants' },
      ],
      correctOptionId: 'c',
      explanation: 'Despite all that armour and weaponry, Ankylosaurus was actually a peaceful plant-eater!',
      explanationNarration: { locale: 'en-US', script: 'Despite all that armour and weaponry, Ankylosaurus was actually a peaceful plant-eater!' },
    },
  ],

  'parasaurolophus': [
    {
      id: 'parasaurolophus-q1',
      topicId: 'topic-dinosaurs',
      question: "What was the long hollow tube on Parasaurolophus's head used for?",
      narration: { locale: 'en-US', script: "What was the long hollow tube on Parasaurolophus's head used for?" },
      options: [
        { id: 'a', label: 'Storing food' },
        { id: 'b', label: 'Making sounds to communicate' },
        { id: 'c', label: 'Sniffing out predators' },
      ],
      correctOptionId: 'b',
      explanation: 'The hollow tube worked like a musical instrument — Parasaurolophus could blow air through it to make a deep booming call!',
      explanationNarration: { locale: 'en-US', script: 'The hollow tube worked like a musical instrument — Parasaurolophus could blow air through it to make a deep booming call!' },
    },
    {
      id: 'parasaurolophus-q2',
      topicId: 'topic-dinosaurs',
      question: "What did Parasaurolophus's call sound like?",
      narration: { locale: 'en-US', script: "What did Parasaurolophus's call sound like?" },
      options: [
        { id: 'a', label: 'A high-pitched squeak' },
        { id: 'b', label: 'Complete silence' },
        { id: 'c', label: 'A deep booming sound like a trombone' },
      ],
      correctOptionId: 'c',
      explanation: 'Scientists built a model of the crest and played it — it made a low booming sound just like a trombone!',
      explanationNarration: { locale: 'en-US', script: 'Scientists built a model of the crest and played it — it made a low booming sound just like a trombone!' },
    },
    {
      id: 'parasaurolophus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Parasaurolophus eat?',
      narration: { locale: 'en-US', script: 'What did Parasaurolophus eat?' },
      options: [
        { id: 'a', label: 'Meat' },
        { id: 'b', label: 'Plants' },
        { id: 'c', label: 'Fish' },
      ],
      correctOptionId: 'b',
      explanation: 'Parasaurolophus was a herbivore — a plant eater! Its flat duck-like beak was great for snipping leaves.',
      explanationNarration: { locale: 'en-US', script: 'Parasaurolophus was a herbivore — a plant eater! Its flat duck-like beak was great for snipping leaves.' },
    },
  ],

  'pachycephalosaurus': [
    {
      id: 'pachycephalosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: "What was special about Pachycephalosaurus's skull?",
      narration: { locale: 'en-US', script: "What was special about Pachycephalosaurus's skull?" },
      options: [
        { id: 'a', label: 'It had three long horns' },
        { id: 'b', label: 'It had a super-thick dome of solid bone' },
        { id: 'c', label: 'It was shaped like a sail' },
      ],
      correctOptionId: 'b',
      explanation: 'The dome on its head was made of solid bone up to 25 centimetres thick — that is almost as thick as your arm is long!',
      explanationNarration: { locale: 'en-US', script: 'The dome on its head was made of solid bone up to 25 centimetres thick — that is almost as thick as your arm is long!' },
    },
    {
      id: 'pachycephalosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'Why did Pachycephalosaurus headbutt rivals?',
      narration: { locale: 'en-US', script: 'Why did Pachycephalosaurus headbutt rivals?' },
      options: [
        { id: 'a', label: 'To scare away predators' },
        { id: 'b', label: 'To find food underground' },
        { id: 'c', label: 'To compete for mates, like bighorn sheep today' },
      ],
      correctOptionId: 'c',
      explanation: 'Just like bighorn sheep crash their horns together today, Pachycephalosaurus would headbutt rivals to show who was strongest!',
      explanationNarration: { locale: 'en-US', script: 'Just like bighorn sheep crash their horns together today, Pachycephalosaurus would headbutt rivals to show who was strongest!' },
    },
    {
      id: 'pachycephalosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What does the name "Pachycephalosaurus" mean?',
      narration: { locale: 'en-US', script: 'What does the name Pachycephalosaurus mean?' },
      options: [
        { id: 'a', label: 'Fast running lizard' },
        { id: 'b', label: 'Thick-headed lizard' },
        { id: 'c', label: 'Armoured lizard' },
      ],
      correctOptionId: 'b',
      explanation: '"Pachy" means thick, "cephalo" means head — so Pachycephalosaurus literally means thick-headed lizard!',
      explanationNarration: { locale: 'en-US', script: '"Pachy" means thick, "cephalo" means head — so Pachycephalosaurus literally means thick-headed lizard!' },
    },
  ],

  'diplodocus': [
    {
      id: 'diplodocus-q1',
      topicId: 'topic-dinosaurs',
      question: "What could Diplodocus do with its enormous tail?",
      narration: { locale: 'en-US', script: "What could Diplodocus do with its enormous tail?" },
      options: [
        { id: 'a', label: 'Sting like a scorpion' },
        { id: 'b', label: 'Crack it like a whip to make a sonic boom' },
        { id: 'c', label: 'Hold onto tree branches' },
      ],
      correctOptionId: 'b',
      explanation: "Diplodocus's tail was up to 14 metres long and scientists think it cracked like a whip — making a boom louder than a thunderclap!",
      explanationNarration: { locale: 'en-US', script: "Diplodocus's tail was up to 14 metres long and scientists think it cracked like a whip — making a boom louder than a thunderclap!" },
    },
    {
      id: 'diplodocus-q2',
      topicId: 'topic-dinosaurs',
      question: 'What did Diplodocus eat?',
      narration: { locale: 'en-US', script: 'What did Diplodocus eat?' },
      options: [
        { id: 'a', label: 'Other dinosaurs' },
        { id: 'b', label: 'Fish' },
        { id: 'c', label: 'Plants' },
      ],
      correctOptionId: 'c',
      explanation: 'Despite being enormous, Diplodocus was a gentle giant that only ate plants — it needed to munch all day to fuel that huge body!',
      explanationNarration: { locale: 'en-US', script: 'Despite being enormous, Diplodocus was a gentle giant that only ate plants — it needed to munch all day to fuel that huge body!' },
    },
    {
      id: 'diplodocus-q3',
      topicId: 'topic-dinosaurs',
      question: 'How is Diplodocus different from Brachiosaurus?',
      narration: { locale: 'en-US', script: 'How is Diplodocus different from Brachiosaurus?' },
      options: [
        { id: 'a', label: 'Diplodocus was much longer but held its neck lower' },
        { id: 'b', label: 'Diplodocus was much shorter' },
        { id: 'c', label: 'They looked exactly the same' },
      ],
      correctOptionId: 'a',
      explanation: 'Diplodocus was even longer than Brachiosaurus but held its neck out horizontally rather than reaching up — like two different kinds of giant!',
      explanationNarration: { locale: 'en-US', script: 'Diplodocus was even longer than Brachiosaurus but held its neck out horizontally rather than reaching up — like two different kinds of giant!' },
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
