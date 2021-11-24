export default function beasts(req, res) {

  const beasts = [
    {
      id: 1,
      name: "",
      icon: "",
      life: 1,
      type: "",
      damage: false
    }
  ];

  const choosedBeast = beasts[Math.floor(Math.random())];

  res.status(200).json(choosedBeast);
}
