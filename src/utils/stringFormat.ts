const points = {
    '**': '<span>',
    '*/': '</span>',
    '\n': '<br>'
}

function stringFormat(text: string): string {
    let result = text;

    for (const [key, value] of Object.entries(points)) {
        result = result.split(key).join(value);
    }

    return result;
}

export default stringFormat;
