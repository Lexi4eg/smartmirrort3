export default function ConvertStringToHourMinute(input: string | number | undefined) {
    if (input === '─') {
        return [0, 180];
    }
    if (input === '│') {
        return [90, 270];
    }
    if (input === '┌') {
        return [0, 90];
    }
    if (input === '┐') {
        return [90, 180];
    }
    if (input === '└') {
        return [0, 270];
    }
    if (input === '┘') {
        return [180, 270];
    }
}