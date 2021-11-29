export default function heroes(req, res) {

    const heroes = [
        {
            id: 1,
            name: "Guerreiro",
            iconPNG: "/heroes/knight.png",
            iconSVG: "/heroes/knight.svg",
            damage: 2,
            type: "Corpo a corpo",
            cost: 1,
            selected: false
        },
        {
            id: 2,
            name: "Arqueiro",
            iconPNG: "/heroes/archer.png",
            iconSVG: "/heroes/archer.svg",
            damage: 1,
            type: "A distância",
            cost: 1,
            selected: false
        },
        {
            id: 3,
            name: "Mago",
            iconPNG: "/heroes/mago.png",
            iconSVG: "/heroes/mago.svg",
            damage: 2,
            type: "Dano mágico",
            cost: 2,
            selected: false
        },
        {
            id: 4,
            name: "Bárbaro",
            iconPNG: "/heroes/barbarian.png",
            iconSVG: "/heroes/barbarian.svg",
            damage: 5,
            type: "Corpo a corpo",
            cost: 2,
            selected: false
        },
        {
            id: 5,
            name: "Caçador",
            iconPNG: "/heroes/hunter.png",
            iconSVG: "/heroes/hunter.svg",
            damage: 3,
            type: "A distância",
            cost: 2,
            selected: false
        },
        {
            id: 6,
            name: "Bruxo",
            iconPNG: "/heroes/witcher.png",
            iconSVG: "/heroes/witcher.svg",
            damage: 3,
            type: "Dano mágico",
            cost: 3,
            selected: false
        }
    ];

    res.status(200).json(heroes);
}