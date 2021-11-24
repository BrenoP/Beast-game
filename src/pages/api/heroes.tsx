export default function heroes(req, res) {

    const heroes = [
        {
            id: 1,
            name: "Guerreiro",
            icon: "/knight.png",
            damage: 2,
            type: "melee"
        },
        {
            id: 2,
            name: "Arqueiro",
            icon: "/archer.png",
            damage: 1,
            type: "range"
        },
        {
            id: 3,
            name: "Mago",
            icon: "/mago.png",
            damage: 1,
            type: "area"
        }
    ];

    res.status(200).json(heroes);
}