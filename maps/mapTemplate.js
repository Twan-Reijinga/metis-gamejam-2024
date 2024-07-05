let mapTemplate = {
    "uitleg": "",

    "startpos": { "x": 0, "y": 0, "z": 1 },

    "mappings": {
        "g": ["gate_closed.png", "gate_open.png"],
        "p": ["pressure_plate_up.png", "pressure_plate_down.png"],
        "l": ["lever_up.png", "lever_down.png"],
        "b": ["button_up.png", "button_down.png"],

        "s": ["sand1.png", "sand2.png", "sand3.png"]
    },
    "levels": [
        {
            "layers": [
                [
                    ["s", "s", "s", "s"],
                    ["s", "s", "s", "s"],
                    ["s", "s", "s", "s"],
                    ["s", "s", "s", "s"]
                ],
                [
                    [" ", " ", " ", " "],
                    ["s", "s", "g", "s"],
                    ["l", " ", " ", " "],
                    [" ", " ", " ", " "]
                ]
            ],
            "interactors": [
                {
                    "position": { "x": 0, "y": 2, "z": 1 },
                    "interations": [{ "x": 2, "y": 1, "z": 1 }]
                }
            ]
        }
    ]
}
