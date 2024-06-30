const points = {
    '**': '<span>',
    '*/': '</span>',
    '\n': '<br>'
}

function stringFormat(text: string) {
    const keys = Object.keys(points);

    let result = text;

    for (const key of keys) {
        result = result.replace(key, points[key]);
    }

    return result;
}

export default stringFormat;