function FooterHeadBlock({heading, links, styles}: FooterHeadBlockProps) {
    return (
        <div style={{
            ...styles
        }}>
            <h3>{heading}</h3>
            <ul>
                {
                    links.map((value) => {
                        return <li><a href={value.url}>{value.text}</a></li>;
                    })
                }
            </ul>
        </div>
    );
}

export default FooterHeadBlock;