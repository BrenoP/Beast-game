export default function beasts(req, res) {

  const beasts = [
    {
      id: 1,
      name: "Dragão",
      icon: "/creatures/final-boss.png",
      life: 15,
      type: "Voador",
      damage: 1
    },
    {
      id: 2,
      name: "Lobão",
      icon: "/creatures/werewolf.png",
      life: 4,
      type: "Fera",
      damage: 0
    },
    {
      id: 3,
      name: "Gigante",
      icon: "/creatures/bigfoot.png",
      life: 6,
      type: "Fera",
      damage: 0
    },
    {
      id: 4,
      name: "Golem",
      icon: "/creatures/golem.png",
      life: 11,
      type: "Criatura mágica",
      damage: 0
    },
    {
      id: 5,
      name: "Demônio",
      icon: "/creatures/demon.png",
      life: 7,
      type: "Criatura mágica",
      damage: 1
    },
    {
      id: 6,
      name: "Árvore mágica",
      icon: "/creatures/magic-tree.png",
      life: 9,
      type: "Criatura mágica",
      damage: 0
    },
    {
      id: 7,
      name: "Yeti",
      icon: "/creatures/yeti.png",
      life: 12,
      type: "Fera",
      damage: 0
    },
    {
      id: 8,
      name: "Minotauro",
      icon: "/creatures/minotauro.png",
      life: 10,
      type: "Fera",
      damage: 0
    },
    {
      id: 9,
      name: "Hydra",
      icon: "/creatures/hydra.png",
      life: 11,
      type: "Fera",
      damage: 0
    }
  ];

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
  
    return array;
  }

  const orderOfBeasts = shuffle(beasts);

  res.status(200).json(orderOfBeasts);
}
