import type { TopicEntry } from './schemas';

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
