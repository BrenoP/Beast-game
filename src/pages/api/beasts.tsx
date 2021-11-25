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
      id: 1,
      name: "Lobão",
      icon: "/creatures/werewolf.png",
      life: 2,
      type: "Fera",
      damage: 0
    },
    {
      id: 1,
      name: "Gigante",
      icon: "/creatures/bigfoot.png",
      life: 3,
      type: "Fera",
      damage: 1
    }
  ];

  const choosedBeast = beasts[Math.floor(Math.random() * 3)];

  res.status(200).json(choosedBeast);
}
