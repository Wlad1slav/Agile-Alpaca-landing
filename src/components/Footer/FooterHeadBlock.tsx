import Link from "next/link";

function FooterHeadBlock({heading, links, styles}: FooterHeadBlockProps) {
    return (
        <div style={{
            ...styles
        }}>
            <h3>{heading}</h3>
            <ul>
                {
                    links.map((value, index) => {
                        return <li key={`${value}_${index}`}><Link href={value.url} title={value.text}>{value.text}</Link></li>;
                    })
                }
            </ul>
        </div>
    );
}

export default FooterHeadBlock;