export default function heroes(req, res) {

    const heroes = [
        {
            id: 1,
            name: "Guerreiro",
            icon: "/knight.png",
            damage: 2,
            type: "Corpo a corpo",
            cost: 1,
            selected: false
        },
        {
            id: 2,
            name: "Arqueiro",
            icon: "/archer.png",
            damage: 1,
            type: "A distância",
            cost: 1,
            selected: false
        },
        {
            id: 3,
            name: "Mago",
            icon: "/mago.png",
            damage: 2,
            type: "A distância",
            cost: 3,
            selected: false
        }
    ];

    res.status(200).json(heroes);
}