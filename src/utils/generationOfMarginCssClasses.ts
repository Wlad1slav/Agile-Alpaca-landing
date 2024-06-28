function generationOfMarginCssClasses(margins: MarginCssClasses | undefined): string {
    const classes = [
        margins?.bottom !== undefined ? `mb--${margins.bottom}` : '',
        margins?.top !== undefined ? `mt--${margins.top}` : '',
        margins?.right !== undefined ? `mr--${margins.right}` : '',
        margins?.left !== undefined ? `ml--${margins.left}` : ''
    ];

    return classes.filter(Boolean).join(' ');
}

export default generationOfMarginCssClasses;
