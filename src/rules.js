"use strict";

class GameColor {
    color_name;
    hexa_code;
    
    /**
     * 
     * @param {string} color_name 
     * @param {string} hexa_code 
     */
    constructor(color_name, hexa_code) {
        this.color_name = color_name;
        this.hexa_code = hexa_code;
    }
}

class Player {
    point = 0;
    bestPoint = 0;
}

let goodColor = "";
let colorsChoice = [];
// CSS Color Names
// Compiled by @bobspace. 
// https://gist.github.com/bobspace/2712980
const CSS_COLOR_NAMES = [
    new GameColor("AliceBlue", "#F0F8FF"),
    new GameColor("AntiqueWhite", "#FAEBD7"),
    new GameColor("Aqua", "#00FFFF"),
    new GameColor("Aquamarine", "#7FFFD4"),
    new GameColor("Azure", "#F0FFFF"),
    new GameColor("Beige", "#F5F5DC"),
    new GameColor("Bisque", "#FFE4C4"),
    new GameColor("Black", "#000000"),
    new GameColor("BlanchedAlmond", "#FFEBCD"),
    new GameColor("Blue", "#0000FF"),
    new GameColor("BlueViolet", "#8A2BE2"),
    new GameColor("Brown", "#A52A2A"),
    new GameColor("BurlyWood", "#DEB887"),
    new GameColor("CadetBlue", "#5F9EA0"),
    new GameColor("Chartreuse", "#7FFF00"),
    new GameColor("Chocolate", "#D2691E"),
    new GameColor("Coral", "#FF7F50"),
    new GameColor("CornflowerBlue", "#6495ED"),
    new GameColor("Cornsilk", "#FFF8DC"),
    new GameColor("Crimson", "#DC143C"),
    new GameColor("Cyan", "#00FFFF"),
    new GameColor("DarkBlue", "#00008B"),
    new GameColor("DarkCyan", "#008B8B"),
    new GameColor("DarkGoldenRod", "#B8860B"),
    new GameColor("DarkGray", "#A9A9A9"),
    new GameColor("DarkGrey", "#A9A9A9"),
    new GameColor("DarkGreen", "#006400"),
    new GameColor("DarkKhaki", "#BDB76B"),
    new GameColor("DarkMagenta", "#8B008B"),
    new GameColor("DarkOliveGreen", "#556B2F"),
    new GameColor("DarkOrange", "#FF8C00"),
    new GameColor("DarkOrchid", "#9932CC"),
    new GameColor("DarkRed", "#8B0000"),
    new GameColor("DarkSalmon", "#E9967A"),
    new GameColor("DarkSeaGreen", "#8FBC8F"),
    new GameColor("DarkSlateBlue", "#483D8B"),
    new GameColor("DarkSlateGray", "#2F4F4F"),
    new GameColor("DarkSlateGrey", "#2F4F4F"),
    new GameColor("DarkTurquoise", "#00CED1"),
    new GameColor("DarkViolet", "#9400D3"),
    new GameColor("DeepPink", "#FF1493"),
    new GameColor("DeepSkyBlue", "#00BFFF"),
    new GameColor("DimGray", "#696969"),
    new GameColor("DimGrey", "#696969"),
    new GameColor("DodgerBlue", "#1E90FF"),
    new GameColor("FireBrick", "#B22222"),
    new GameColor("FloralWhite", "#FFFAF0"),
    new GameColor("ForestGreen", "#228B22"),
    new GameColor("Fuchsia", "#FF00FF"),
    new GameColor("Gainsboro", "#DCDCDC"),
    new GameColor("GhostWhite", "#F8F8FF"),
    new GameColor("Gold", "#FFD700"),
    new GameColor("GoldenRod", "#DAA520"),
    new GameColor("Gray", "#808080"),
    new GameColor("Grey", "#808080"),
    new GameColor("Green", "#008000"),
    new GameColor("GreenYellow", "#ADFF2F"),
    new GameColor("HoneyDew", "#F0FFF0"),
    new GameColor("HotPink", "#FF69B4"),
    new GameColor("IndianRed", "#CD5C5C"),
    new GameColor("Indigo", "#4B0082"),
    new GameColor("Ivory", "#FFFFF0"),
    new GameColor("Khaki", "#F0E68C"),
    new GameColor("Lavender", "#E6E6FA"),
    new GameColor("LavenderBlush", "#FFF0F5"),
    new GameColor("LawnGreen", "#7CFC00"),
    new GameColor("LemonChiffon", "#FFFACD"),
    new GameColor("LightBlue", "#ADD8E6"),
    new GameColor("LightCoral", "#F08080"),
    new GameColor("LightCyan", "#E0FFFF"),
    new GameColor("LightGoldenRodYellow", "#FAFAD2"),
    new GameColor("LightGray", "#D3D3D3"),
    new GameColor("LightGrey", "#D3D3D3"),
    new GameColor("LightGreen", "#90EE90"),
    new GameColor("LightPink", "#FFB6C1"),
    new GameColor("LightSalmon", "#FFA07A"),
    new GameColor("LightSeaGreen", "#20B2AA"),
    new GameColor("LightSkyBlue", "#87CEFA"),
    new GameColor("LightSlateGray", "#778899"),
    new GameColor("LightSlateGrey", "#778899"),
    new GameColor("LightSteelBlue", "#B0C4DE"),
    new GameColor("LightYellow", "#FFFFE0"),
    new GameColor("Lime", "#0FF00"),
    new GameColor("LimeGreen", "#32CD32"),
    new GameColor("Linen", "#FAF0E6"),
    new GameColor("Magenta", "#FF00FF"),
    new GameColor("Maroon", "#800000"),
    new GameColor("MediumAquaMarine", "#66CDAA"),
    new GameColor("MediumBlue", "#0000CD"),
    new GameColor("MediumOrchid", "#BA55D3"),
    new GameColor("MediumPurple", "#9370DB"),
    new GameColor("MediumSeaGreen", "#3CB371"),
    new GameColor("MediumSlateBlue",	"#7B68EE"),
    new GameColor("MediumSpringGreen", "#00FA9A"),
    new GameColor("MediumTurquoise", "#48D1CC"),
    new GameColor("MediumVioletRed", "#C71585"),
    new GameColor("MidnightBlue", "#191970"),
    new GameColor("MintCream", "#F5FFFA"),
    new GameColor("MistyRose", "#FFE4E1"),
    new GameColor("Moccasin", "#FFE4B5"),
    new GameColor("NavajoWhite", "#FFDEAD"),
    new GameColor("Navy", "#000080"),
    new GameColor("OldLace", "#FDF5E6"),
    new GameColor("Olive", "#808000"),
    new GameColor("OliveDrab", "#6B8E23"),
    new GameColor("Orange", "#FFA500"),
    new GameColor("OrangeRed", "#FF4500"),
    new GameColor("Orchid", "#DA70D6"),
    new GameColor("PaleGoldenRod", "#EEE8AA"),
    new GameColor("PaleGreen", "#98FB98"),
    new GameColor("PaleTurquoise", "#AFEEEE"),
    new GameColor("PaleVioletRed", "#DB7093"),
    new GameColor("PapayaWhip", "#FFEFD5"),
    new GameColor("PeachPuff", "#FFDAB9"),
    new GameColor("Peru", "#CD853F"),
    new GameColor("Pink", "#FFC0CB"),
    new GameColor("Plum", "#DDA0DD"),
    new GameColor("PowderBlue", "#B0E0E6"),
    new GameColor("Purple", "#800080"),
    new GameColor("RebeccaPurple", "#663399"),
    new GameColor("Red", "#FF0000"),
    new GameColor("RosyBrown", "#BC8F8F"),
    new GameColor("RoyalBlue", "#4169E1"),
    new GameColor("SaddleBrown", "#8B4513"),
    new GameColor("Salmon", "#FA8072"),
    new GameColor("SandyBrown", "#F4A460"),
    new GameColor("SeaGreen", "#2E8B57"),
    new GameColor("SeaShell", "#FFF5EE"),
    new GameColor("Sienna", "#A0522D"),
    new GameColor("Silver", "#C0C0C0"),
    new GameColor("SkyBlue", "#87CEEB"),
    new GameColor("SlateBlue", "#6A5ACD"),
    new GameColor("SlateGray", "#708090"),
    new GameColor("SlateGrey", "#708090"),
    new GameColor("Snow", "#FFFAFA"),
    new GameColor("SpringGreen", "#00FF7F"),
    new GameColor("SteelBlue", "#4682B4"),
    new GameColor("Tan", "#D2B48C"),
    new GameColor("Teal", "#008080"),
    new GameColor("Thistle", "#D8BFD8"),
    new GameColor("Tomato", "#FF6347"),
    new GameColor("Turquoise", "#40E0D0"),
    new GameColor("Violet", "#EE82EE"),
    new GameColor("Wheat", "#F5DEB3"),
    new GameColor("White", "#FFFFFF"),
    new GameColor("WhiteSmoke", "#F5F5F5"),
    new GameColor("Yellow", "#FFFF00"),
    new GameColor("YellowGreen", "#9ACD32")
];

/**
 * 
 * @returns {GameColor}
 */
function getRandomCSSColor() {
    const index = getRandomInt(0, (CSS_COLOR_NAMES.length - 1));
    
    return CSS_COLOR_NAMES[index];
}

/**
 * 
 * @param {number} min integer
 * @param {number} max integer
 * @returns {number} a Number Bewteen [min, max]
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} nb_colors positive int
 * @returns {GameColor[]}
 */
function getColors(nb_colors) {
    let colors = new Array(nb_colors);

    for(let i = 0; i < nb_colors; i++) {
        let need_generate_color = true;
        let css_color;
        while (need_generate_color === true) {
            css_color = getRandomCSSColor();
            need_generate_color = isColorAlreadyChoose(colors, css_color);
        }
        colors[i] = css_color;
    }

    return colors
}

/**
 * 
 * @param {GameColor[]} colors 
 * @param {GameColor} cssColor 
 */
function isColorAlreadyChoose(colors, cssColor) {
    const found = colors.find(element => element.hexa_code === cssColor.hexa_code);
    if (found === undefined) {
        return false;
    }

    return true;
}

/**
 * 
 * @returns {GameColor} an hexa color
 */
function getRandomCSSColor2() {
    let uint8 = new Uint8Array(3);

    for (let i = 0; i < 3; i++) {
        uint8[i] = getRandomInt(0, 255);
    }

    const hexa_code = "#" + uint8.map(c => c.toString(16).padStart(2, "0")).join("");

    return new GameColor(hexa_code, hexa_code);
}
