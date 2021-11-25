export default function beasts(req, res) {

  const beasts = [
    {
      id: 1,
      name: "Dragão",
      icon: "/creatures/final-boss.png",
      life: 4,
      type: "Voador",
      damage: 2
    },
    {
      id: 2,
      name: "Lobão",
      icon: "/creatures/werewolf.png",
      life: 2,
      type: "Fera",
      damage: 0
    },
    {
      id: 3,
      name: "Gigante",
      icon: "/creatures/bigfoot.png",
      life: 3,
      type: "Fera",
      damage: 1
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
