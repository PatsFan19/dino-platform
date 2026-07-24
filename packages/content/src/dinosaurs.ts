import type { QuizQuestion, TopicEntry } from './schemas';

export const DINOSAURS: TopicEntry[] = [
  {
    id: 't-rex',
    name: 'T. Rex',
    pronunciation: 'tie-RAN-oh-SOR-us REX',
    category: 'Cretaceous',
    kidFact:
      'Meet the mighty T-Rex! It had one of the strongest bites of any animal ever — ' +
      'strong enough to crunch right through bone. Its arms look tiny and a little funny, ' +
      "but T-Rex didn't need them. Those powerful jaws did all the work. " +
      'Ready? Give us your biggest dinosaur ROAR!',
    sizeComparison: 'As tall as a two-story house!',
    imageKey: 'dinosaurs/t-rex',
  },
  {
    id: 'triceratops',
    name: 'Triceratops',
    pronunciation: 'try-SAIR-ah-tops',
    category: 'Cretaceous',
    kidFact:
      'This is Triceratops, and its name means "three-horned face." Can you spot all three horns? ' +
      'The big bony frill behind its head worked like a shield to keep it safe. ' +
      'Triceratops was a plant-eater — it spent all day snipping ferns and leaves with its beak. Crunch!',
    sizeComparison: 'As long as a big pickup truck!',
    imageKey: 'dinosaurs/triceratops',
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    pronunciation: 'steg-oh-SOR-us',
    category: 'Jurassic',
    kidFact:
      'Look at the big plates along Stegosaurus\'s back — they stood up in a row like a mountain range! ' +
      'Scientists think the plates helped it warm up in the sun and cool down in the shade. ' +
      'Its tail had four sharp spikes for protection. Swish! ' +
      'Stegosaurus was a gentle plant-eater.',
    sizeComparison: 'As long as a school bus!',
    imageKey: 'dinosaurs/stegosaurus',
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    pronunciation: 'veh-LOSS-ih-rap-tor',
    category: 'Cretaceous',
    kidFact:
      'Velociraptor was small, speedy, and smart. Here\'s a surprise: it was covered in feathers, ' +
      'just like a bird! Its name means "speedy thief" because it could zoom after its dinner. ' +
      'It was only about the size of a turkey — much smaller than in the movies. ' +
      'Can you run in place as fast as a Velociraptor?',
    sizeComparison: 'About the size of a big turkey!',
    imageKey: 'dinosaurs/velociraptor',
  },
  {
    id: 'brachiosaurus',
    name: 'Brachiosaurus',
    pronunciation: 'BRAK-ee-oh-SOR-us',
    category: 'Jurassic',
    kidFact:
      'Look way, way up — that\'s where Brachiosaurus kept its head! ' +
      'Its neck was so long it could reach leaves at the very top of the tallest trees, ' +
      'where no other dinosaur could reach. It ate plants all day long to fill up that giant body. ' +
      'Stretch your arms up as high as you can — that\'s how Brachiosaurus reached its lunch!',
    sizeComparison: 'As tall as a four-story building!',
    imageKey: 'dinosaurs/brachiosaurus',
  },
  {
    id: 'pteranodon',
    name: 'Pteranodon',
    pronunciation: 'teh-RAN-oh-don',
    category: 'Cretaceous',
    kidFact:
      'Pteranodon soared through the sky on wings wider than a car! ' +
      "Here's a fun secret: it wasn't actually a dinosaur — it was a flying reptile that lived " +
      'alongside the dinosaurs. It glided over the ocean and swooped down to scoop up fish, ' +
      'a bit like a pelican does today. Spread your arms and glide!',
    sizeComparison: 'Its wings stretched as long as a small car!',
    imageKey: 'dinosaurs/pteranodon',
  },
  {
    id: 'spinosaurus',
    name: 'Spinosaurus',
    pronunciation: 'SPY-noh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Spinosaurus had a tall sail on its back — you can spot one from far away! ' +
      'It was even bigger than T-Rex, and it loved the water. ' +
      'It waded and splashed in rivers, catching big fish with its long, crocodile-like snout. ' +
      'A swimming dinosaur — how amazing is that?',
    sizeComparison: 'Even longer than a school bus!',
    imageKey: 'dinosaurs/spinosaurus',
  },
  {
    id: 'ankylosaurus',
    name: 'Ankylosaurus',
    pronunciation: 'an-KY-loh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Ankylosaurus was built like a tank! Thick, bumpy armor covered its whole back, ' +
      'so even big meat-eaters left it alone. At the end of its tail was a heavy club of bone ' +
      'that it could swing to protect itself. Under all that armor, it was a peaceful plant-eater.',
    sizeComparison: 'As long as a big pickup truck!',
    imageKey: 'dinosaurs/ankylosaurus',
  },
  {
    id: 'parasaurolophus',
    name: 'Parasaurolophus',
    pronunciation: 'par-ah-SOR-oh-LOH-fus',
    category: 'Cretaceous',
    kidFact:
      'See the long, curved tube on Parasaurolophus\'s head? It worked like a built-in trumpet! ' +
      'When it blew air through the tube, it made a deep, booming call that its friends could hear ' +
      'from far away. Take a big breath and make your deepest HOOONK!',
    sizeComparison: 'About as long as a school bus!',
    imageKey: 'dinosaurs/parasaurolophus',
  },
  {
    id: 'pachycephalosaurus',
    name: 'Pachycephalosaurus',
    pronunciation: 'pak-ee-SEF-ah-loh-SOR-us',
    category: 'Cretaceous',
    kidFact:
      'Pachycephalosaurus has a very long name — and a very hard head! ' +
      'The top of its skull was a thick bony dome, almost ten times thicker than yours. ' +
      'Scientists think these dinosaurs bonked heads with each other, ' +
      'the way bighorn sheep do today. What a headbanger!',
    sizeComparison: 'About the size of a big car!',
    imageKey: 'dinosaurs/pachycephalosaurus',
  },
  {
    id: 'diplodocus',
    name: 'Diplodocus',
    pronunciation: 'dip-LOD-oh-kus',
    category: 'Jurassic',
    kidFact:
      'Diplodocus was one of the longest animals to ever walk the Earth — ' +
      'as long as three school buses lined up! Its whip-like tail could crack through the air ' +
      'with a mighty SNAP. For such a giant body, it had a surprisingly small head. ' +
      'This gentle giant munched plants from morning to night.',
    sizeComparison: 'As long as three school buses!',
    imageKey: 'dinosaurs/diplodocus',
  },
  {
    id: 'coelophysis',
    name: 'Coelophysis',
    pronunciation: 'SEE-loh-FY-sis',
    category: 'Triassic',
    kidFact:
      'Coelophysis is one of the very first dinosaurs — it lived over 200 million years ago, ' +
      'long before T-Rex was born! It was light and quick, about the size of a big dog, ' +
      'and it hunted in groups with its friends. ' +
      'It zipped after lizards and bugs for its dinner. Zoom!',
    sizeComparison: 'About the size of a big dog!',
    imageKey: 'dinosaurs/coelophysis',
  },
  {
    id: 'plateosaurus',
    name: 'Plateosaurus',
    pronunciation: 'PLAT-ee-oh-SOR-us',
    category: 'Triassic',
    kidFact:
      'Plateosaurus had a clever trick: it could walk on four legs, ' +
      'then stand up on two legs to reach leaves high in the trees! ' +
      'It was one of the first really big plant-eating dinosaurs. ' +
      'Can you stand up tall and reach for the highest leaf?',
    sizeComparison: 'About as long as a big van!',
    imageKey: 'dinosaurs/plateosaurus',
  },
];

export const DINO_QUIZ_MAP: Record<string, QuizQuestion[]> = {
  't-rex': [
    {
      id: 't-rex-q1',
      topicId: 'topic-dinosaurs',
      question: 'What did T-Rex eat?',
      narration: { locale: 'en-US', script: 'What did T-Rex eat?' },
      options: [
        { id: 'a', label: 'Plants and leaves' },
        { id: 'b', label: 'Meat' },
        { id: 'c', label: 'Fish and berries' },
      ],
      correctOptionId: 'b',
      explanation:
        "That's right — T-Rex ate meat! Animals that eat meat are called carnivores. T-Rex was one of the biggest carnivores ever!",
      explanationNarration: {
        locale: 'en-US',
        script: "That's right — T-Rex ate meat! Animals that eat meat are called carnivores. T-Rex was one of the biggest carnivores ever!",
      },
    },
    {
      id: 't-rex-q2',
      topicId: 'topic-dinosaurs',
      question: "What was T-Rex's superpower?",
      narration: { locale: 'en-US', script: "What was T-Rex's superpower?" },
      options: [
        { id: 'a', label: 'Its tiny arms' },
        { id: 'b', label: 'Its powerful bite' },
        { id: 'c', label: 'Its long tail' },
      ],
      correctOptionId: 'b',
      explanation:
        'Its powerful bite! T-Rex could bite harder than almost any animal that ever lived — strong enough to crunch through bone.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Its powerful bite! T-Rex could bite harder than almost any animal that ever lived — strong enough to crunch through bone.',
      },
    },
    {
      id: 't-rex-q3',
      topicId: 'topic-dinosaurs',
      question: 'How tall was a grown-up T-Rex?',
      narration: { locale: 'en-US', script: 'How tall was a grown-up T-Rex?' },
      options: [
        { id: 'a', label: 'About as tall as a cat' },
        { id: 'b', label: 'As tall as a two-story house' },
        { id: 'c', label: 'The same size as you' },
      ],
      correctOptionId: 'b',
      explanation:
        'A grown-up T-Rex stood as tall as a two-story house. Imagine one looking in through an upstairs window!',
      explanationNarration: {
        locale: 'en-US',
        script: 'A grown-up T-Rex stood as tall as a two-story house. Imagine one looking in through an upstairs window!',
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
        'Three horns — two long ones above its eyes and one short one on its nose. That\'s why its name means "three-horned face"!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Three horns — two long ones above its eyes and one short one on its nose. That\'s why its name means "three-horned face"!',
      },
    },
    {
      id: 'triceratops-q2',
      topicId: 'topic-dinosaurs',
      question: 'What was the big frill for?',
      narration: { locale: 'en-US', script: 'What was the big frill for?' },
      options: [
        { id: 'a', label: 'To store food' },
        { id: 'b', label: 'To fly through the air' },
        { id: 'c', label: 'To protect its neck and show off' },
      ],
      correctOptionId: 'c',
      explanation:
        'The frill worked like a shield to protect its neck — and scientists think it helped Triceratops show off to its friends, too!',
      explanationNarration: {
        locale: 'en-US',
        script: 'The frill worked like a shield to protect its neck — and scientists think it helped Triceratops show off to its friends, too!',
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
        'Plants! Triceratops used its sharp beak like scissors to snip off ferns and leaves all day long.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Plants! Triceratops used its sharp beak like scissors to snip off ferns and leaves all day long.',
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
        "It's called a thagomizer — what a fun word! Stegosaurus swung those four sharp spikes to protect itself.",
      explanationNarration: {
        locale: 'en-US',
        script: "It's called a thagomizer — what a fun word! Stegosaurus swung those four sharp spikes to protect itself.",
      },
    },
    {
      id: 'stegosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'What were the big plates on its back for?',
      narration: { locale: 'en-US', script: 'What were the big plates on its back for?' },
      options: [
        { id: 'a', label: 'For flying' },
        { id: 'b', label: 'To help warm up and cool down' },
        { id: 'c', label: 'To store food' },
      ],
      correctOptionId: 'b',
      explanation:
        'The plates helped Stegosaurus warm up in the sun and cool down in the breeze — like a built-in blanket and fan!',
      explanationNarration: {
        locale: 'en-US',
        script: 'The plates helped Stegosaurus warm up in the sun and cool down in the breeze — like a built-in blanket and fan!',
      },
    },
    {
      id: 'stegosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: "How big was Stegosaurus's brain?",
      narration: { locale: 'en-US', script: "How big was Stegosaurus's brain?" },
      options: [
        { id: 'a', label: 'As big as a walnut' },
        { id: 'b', label: 'As big as a football' },
        { id: 'c', label: 'As big as yours' },
      ],
      correctOptionId: 'a',
      explanation:
        'Only as big as a walnut — in a body the size of a school bus! But it was just the right brain for a Stegosaurus.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Only as big as a walnut — in a body the size of a school bus! But it was just the right brain for a Stegosaurus.',
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
        'Real Velociraptors were only about the size of a turkey — much smaller than the ones in movies. Surprise!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Real Velociraptors were only about the size of a turkey — much smaller than the ones in movies. Surprise!',
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
        'Feathers, just like a bird! In fact, birds today are related to dinosaurs like Velociraptor.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Feathers, just like a bird! In fact, birds today are related to dinosaurs like Velociraptor.',
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
        { id: 'c', label: 'A big curved claw' },
      ],
      correctOptionId: 'c',
      explanation:
        'Each foot had one big curved claw that it held up off the ground to keep it sharp — like a special tool!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Each foot had one big curved claw that it held up off the ground to keep it sharp — like a special tool!',
      },
    },
  ],

  'brachiosaurus': [
    {
      id: 'brachiosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: 'What is Brachiosaurus famous for?',
      narration: { locale: 'en-US', script: 'What is Brachiosaurus famous for?' },
      options: [
        { id: 'a', label: 'Its enormous teeth' },
        { id: 'b', label: 'Its incredibly long neck' },
        { id: 'c', label: 'Its super-fast running' },
      ],
      correctOptionId: 'b',
      explanation:
        'Its amazing long neck! It could reach leaves at the tops of the tallest trees, where no other dinosaur could reach.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Its amazing long neck! It could reach leaves at the tops of the tallest trees, where no other dinosaur could reach.',
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
        'Leaves from the very tops of the trees! Its long neck worked like a crane to reach the freshest leaves.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Leaves from the very tops of the trees! Its long neck worked like a crane to reach the freshest leaves.',
      },
    },
    {
      id: 'brachiosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'How much did it eat in one day?',
      narration: { locale: 'en-US', script: 'How much did it eat in one day?' },
      options: [
        { id: 'a', label: 'About the same as you' },
        { id: 'b', label: 'About 400 kilograms of plants' },
        { id: 'c', label: 'Nothing at all' },
      ],
      correctOptionId: 'b',
      explanation:
        'About 400 kilograms of plants every single day — that\'s like eating a whole car full of salad!',
      explanationNarration: {
        locale: 'en-US',
        script: 'About 400 kilograms of plants every single day — that\'s like eating a whole car full of salad!',
      },
    },
  ],

  'spinosaurus': [
    {
      id: 'spinosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: 'Which was bigger — T-Rex or Spinosaurus?',
      narration: { locale: 'en-US', script: 'Which was bigger — T-Rex or Spinosaurus?' },
      options: [
        { id: 'a', label: 'T-Rex was much bigger' },
        { id: 'b', label: 'They were exactly the same size' },
        { id: 'c', label: 'Spinosaurus was bigger!' },
      ],
      correctOptionId: 'c',
      explanation: 'Spinosaurus was even bigger than T-Rex — the biggest meat-eating dinosaur ever discovered!',
      explanationNarration: { locale: 'en-US', script: 'Spinosaurus was even bigger than T-Rex — the biggest meat-eating dinosaur ever discovered!' },
    },
    {
      id: 'spinosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: "What was on Spinosaurus's back?",
      narration: { locale: 'en-US', script: "What was on Spinosaurus's back?" },
      options: [
        { id: 'a', label: 'A shell like a turtle' },
        { id: 'b', label: 'A tall sail' },
        { id: 'c', label: 'Feathers for flying' },
      ],
      correctOptionId: 'b',
      explanation: 'A tall sail made of long spines! Scientists think it may have helped Spinosaurus stay cool and show off.',
      explanationNarration: { locale: 'en-US', script: 'A tall sail made of long spines! Scientists think it may have helped Spinosaurus stay cool and show off.' },
    },
    {
      id: 'spinosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Spinosaurus eat?',
      narration: { locale: 'en-US', script: 'What did Spinosaurus eat?' },
      options: [
        { id: 'a', label: 'Plants and berries' },
        { id: 'b', label: 'Other dinosaurs' },
        { id: 'c', label: 'Fish from rivers' },
      ],
      correctOptionId: 'c',
      explanation: 'Big fish from the river! Spinosaurus was a champion fisher with a long snout like a crocodile.',
      explanationNarration: { locale: 'en-US', script: 'Big fish from the river! Spinosaurus was a champion fisher with a long snout like a crocodile.' },
    },
  ],

  'ankylosaurus': [
    {
      id: 'ankylosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: "What covered Ankylosaurus's back?",
      narration: { locale: 'en-US', script: "What covered Ankylosaurus's back?" },
      options: [
        { id: 'a', label: 'Thick bony armor' },
        { id: 'b', label: 'Feathers' },
        { id: 'c', label: 'Scales like a fish' },
      ],
      correctOptionId: 'a',
      explanation: 'Thick, bumpy armor made of bone — like a knight\'s shield! Even hungry meat-eaters left Ankylosaurus alone.',
      explanationNarration: { locale: 'en-US', script: 'Thick, bumpy armor made of bone — like a knight\'s shield! Even hungry meat-eaters left Ankylosaurus alone.' },
    },
    {
      id: 'ankylosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'What did Ankylosaurus have on its tail?',
      narration: { locale: 'en-US', script: 'What did Ankylosaurus have on its tail?' },
      options: [
        { id: 'a', label: 'Sharp spikes' },
        { id: 'b', label: 'A big round club' },
        { id: 'c', label: 'A whip-like tip' },
      ],
      correctOptionId: 'b',
      explanation: 'A heavy club of solid bone! One good swing could protect it from even the biggest dinosaurs.',
      explanationNarration: { locale: 'en-US', script: 'A heavy club of solid bone! One good swing could protect it from even the biggest dinosaurs.' },
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
      explanation: 'Plants! Under all that tough armor, Ankylosaurus was a peaceful plant-eater.',
      explanationNarration: { locale: 'en-US', script: 'Plants! Under all that tough armor, Ankylosaurus was a peaceful plant-eater.' },
    },
  ],

  'parasaurolophus': [
    {
      id: 'parasaurolophus-q1',
      topicId: 'topic-dinosaurs',
      question: 'What was the long tube on its head for?',
      narration: { locale: 'en-US', script: 'What was the long tube on its head for?' },
      options: [
        { id: 'a', label: 'Storing food' },
        { id: 'b', label: 'Making sounds to call its friends' },
        { id: 'c', label: 'Sniffing out food' },
      ],
      correctOptionId: 'b',
      explanation: 'Making sounds! The tube worked like a built-in trumpet, so Parasaurolophus could call to friends far away.',
      explanationNarration: { locale: 'en-US', script: 'Making sounds! The tube worked like a built-in trumpet, so Parasaurolophus could call to friends far away.' },
    },
    {
      id: 'parasaurolophus-q2',
      topicId: 'topic-dinosaurs',
      question: 'What did its call sound like?',
      narration: { locale: 'en-US', script: 'What did its call sound like?' },
      options: [
        { id: 'a', label: 'A high squeak' },
        { id: 'b', label: 'Complete silence' },
        { id: 'c', label: 'A deep booming sound' },
      ],
      correctOptionId: 'c',
      explanation: 'A deep, booming sound, like a giant trombone. Try making your deepest, loudest HOOONK!',
      explanationNarration: { locale: 'en-US', script: 'A deep, booming sound, like a giant trombone. Try making your deepest, loudest HOOONK!' },
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
      explanation: 'Plants! Its wide, flat beak was perfect for snipping leaves and pine needles.',
      explanationNarration: { locale: 'en-US', script: 'Plants! Its wide, flat beak was perfect for snipping leaves and pine needles.' },
    },
  ],

  'pachycephalosaurus': [
    {
      id: 'pachycephalosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: 'What was special about its head?',
      narration: { locale: 'en-US', script: 'What was special about its head?' },
      options: [
        { id: 'a', label: 'It had three long horns' },
        { id: 'b', label: 'A super thick bony dome' },
        { id: 'c', label: 'It was shaped like a sail' },
      ],
      correctOptionId: 'b',
      explanation: 'A thick bony dome on top of its skull — almost ten times thicker than the top of your head!',
      explanationNarration: { locale: 'en-US', script: 'A thick bony dome on top of its skull — almost ten times thicker than the top of your head!' },
    },
    {
      id: 'pachycephalosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'Why did it bonk heads with friends?',
      narration: { locale: 'en-US', script: 'Why did it bonk heads with friends?' },
      options: [
        { id: 'a', label: 'To scare away predators' },
        { id: 'b', label: 'To find food underground' },
        { id: 'c', label: "To see who was strongest" },
      ],
      correctOptionId: 'c',
      explanation: 'To see who was strongest — just like bighorn sheep do today! Its thick dome kept its brain safe.',
      explanationNarration: { locale: 'en-US', script: 'To see who was strongest — just like bighorn sheep do today! Its thick dome kept its brain safe.' },
    },
    {
      id: 'pachycephalosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What does its name mean?',
      narration: { locale: 'en-US', script: 'What does its name mean?' },
      options: [
        { id: 'a', label: 'Fast running lizard' },
        { id: 'b', label: 'Thick-headed lizard' },
        { id: 'c', label: 'Armored lizard' },
      ],
      correctOptionId: 'b',
      explanation: 'Thick-headed lizard! Scientists gave it that name because of its amazing bony dome.',
      explanationNarration: { locale: 'en-US', script: 'Thick-headed lizard! Scientists gave it that name because of its amazing bony dome.' },
    },
  ],

  'diplodocus': [
    {
      id: 'diplodocus-q1',
      topicId: 'topic-dinosaurs',
      question: 'What could Diplodocus do with its long tail?',
      narration: { locale: 'en-US', script: 'What could Diplodocus do with its long tail?' },
      options: [
        { id: 'a', label: 'Sting like a scorpion' },
        { id: 'b', label: 'Crack it like a big whip' },
        { id: 'c', label: 'Hold onto tree branches' },
      ],
      correctOptionId: 'b',
      explanation: 'It could crack its tail like a giant whip — scientists think it made a sound as loud as thunder!',
      explanationNarration: { locale: 'en-US', script: 'It could crack its tail like a giant whip — scientists think it made a sound as loud as thunder!' },
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
      explanation: 'Plants, from morning to night! Diplodocus was a gentle giant with a very big appetite.',
      explanationNarration: { locale: 'en-US', script: 'Plants, from morning to night! Diplodocus was a gentle giant with a very big appetite.' },
    },
    {
      id: 'diplodocus-q3',
      topicId: 'topic-dinosaurs',
      question: 'How is Diplodocus different from Brachiosaurus?',
      narration: { locale: 'en-US', script: 'How is Diplodocus different from Brachiosaurus?' },
      options: [
        { id: 'a', label: 'Diplodocus was longer and held its neck low' },
        { id: 'b', label: 'Diplodocus was much shorter' },
        { id: 'c', label: 'They looked exactly the same' },
      ],
      correctOptionId: 'a',
      explanation: 'Diplodocus was even longer, and it held its neck out low like a bridge. Two very different giants!',
      explanationNarration: { locale: 'en-US', script: 'Diplodocus was even longer, and it held its neck out low like a bridge. Two very different giants!' },
    },
  ],

  'coelophysis': [
    {
      id: 'coelophysis-q1',
      topicId: 'topic-dinosaurs',
      question: 'How long ago did Coelophysis live?',
      narration: { locale: 'en-US', script: 'How long ago did Coelophysis live?' },
      options: [
        { id: 'a', label: 'About 65 million years ago' },
        { id: 'b', label: 'About 228 million years ago' },
        { id: 'c', label: 'About 10 million years ago' },
      ],
      correctOptionId: 'b',
      explanation:
        'About 228 million years ago — one of the very first dinosaurs, long before T-Rex was even born!',
      explanationNarration: {
        locale: 'en-US',
        script: 'About 228 million years ago — one of the very first dinosaurs, long before T-Rex was even born!',
      },
    },
    {
      id: 'coelophysis-q2',
      topicId: 'topic-dinosaurs',
      question: 'How big was Coelophysis?',
      narration: { locale: 'en-US', script: 'How big was Coelophysis?' },
      options: [
        { id: 'a', label: 'As big as a T-Rex' },
        { id: 'b', label: 'As big as a school bus' },
        { id: 'c', label: 'About the size of a big dog' },
      ],
      correctOptionId: 'c',
      explanation:
        'About the size of a big dog — small, light, and built for speed!',
      explanationNarration: {
        locale: 'en-US',
        script: 'About the size of a big dog — small, light, and built for speed!',
      },
    },
    {
      id: 'coelophysis-q3',
      topicId: 'topic-dinosaurs',
      question: 'What did Coelophysis eat?',
      narration: { locale: 'en-US', script: 'What did Coelophysis eat?' },
      options: [
        { id: 'a', label: 'Plants and leaves' },
        { id: 'b', label: 'Small animals like lizards and bugs' },
        { id: 'c', label: 'Fish from the ocean' },
      ],
      correctOptionId: 'b',
      explanation:
        'Little lizards and bugs! Coelophysis was quick — it could snap up its dinner before it got away.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Little lizards and bugs! Coelophysis was quick — it could snap up its dinner before it got away.',
      },
    },
  ],

  'plateosaurus': [
    {
      id: 'plateosaurus-q1',
      topicId: 'topic-dinosaurs',
      question: "What could Plateosaurus's legs do?",
      narration: { locale: 'en-US', script: "What could Plateosaurus's legs do?" },
      options: [
        { id: 'a', label: 'Only walk on four legs' },
        { id: 'b', label: 'Walk on two legs or four legs' },
        { id: 'c', label: 'Only hop like a kangaroo' },
      ],
      correctOptionId: 'b',
      explanation:
        'Both! It walked on four legs, then stood up on two to reach the tastiest leaves up high. What a clever trick!',
      explanationNarration: {
        locale: 'en-US',
        script: 'Both! It walked on four legs, then stood up on two to reach the tastiest leaves up high. What a clever trick!',
      },
    },
    {
      id: 'plateosaurus-q2',
      topicId: 'topic-dinosaurs',
      question: 'Did Plateosaurus eat meat or plants?',
      narration: { locale: 'en-US', script: 'Did Plateosaurus eat meat or plants?' },
      options: [
        { id: 'a', label: 'Meat' },
        { id: 'b', label: 'Plants' },
        { id: 'c', label: 'Both plants and meat' },
      ],
      correctOptionId: 'b',
      explanation:
        'Plants! Its long neck helped it reach leaves that other dinosaurs couldn\'t.',
      explanationNarration: {
        locale: 'en-US',
        script: "Plants! Its long neck helped it reach leaves that other dinosaurs couldn't.",
      },
    },
    {
      id: 'plateosaurus-q3',
      topicId: 'topic-dinosaurs',
      question: 'What does the name Plateosaurus mean?',
      narration: { locale: 'en-US', script: 'What does the name Plateosaurus mean?' },
      options: [
        { id: 'a', label: 'Fast lizard' },
        { id: 'b', label: 'Armored lizard' },
        { id: 'c', label: 'Broad lizard' },
      ],
      correctOptionId: 'c',
      explanation:
        'Broad lizard! Its wide, flat teeth were just right for grinding up plants.',
      explanationNarration: {
        locale: 'en-US',
        script: 'Broad lizard! Its wide, flat teeth were just right for grinding up plants.',
      },
    },
  ],
};
