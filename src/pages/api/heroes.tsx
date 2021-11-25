export default function heroes(req, res) {

    const heroes = [
        {
            id: 1,
            name: "Guerreiro",
            icon: "/knight.png",
            damage: 2,
            type: "Corpo a corpo",
            coast: 1,
            selected: false
        },
        {
            id: 2,
            name: "Arqueiro",
            icon: "/archer.png",
            damage: 1,
            type: "A distância",
            coast: 1,
            selected: false
        },
        {
            id: 3,
            name: "Mago",
            icon: "/mago.png",
            damage: 1,
            type: "Em área",
            coast: 3,
            selected: false
        }
    ];

    res.status(200).json(heroes);
}