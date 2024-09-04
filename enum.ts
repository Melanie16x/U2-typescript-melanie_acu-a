enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColor(color: Color): string {
    return `El color es: ${color}.`;
}

const color: Color = Color.Red;
console.log(getColor(color));
