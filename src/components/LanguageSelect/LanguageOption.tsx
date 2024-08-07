import Link from "next/link";

function LanguageOption({imgUrl, url, name}: LanguageOptionProps) {
    return (
        <li>
            <Link href={`/${url}`}>
                <img src={imgUrl} alt={`${name} language flag`}/>
                <p>{name}</p>
            </Link>
        </li>
    )
}

export default LanguageOption;