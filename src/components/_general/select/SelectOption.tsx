import Link from "next/link";

function SelectOption({imgUrl, langUrl, name}: SelectOptionProps) {
    return (
        <li>
            <Link href={`/${langUrl}`}>
                <img src={imgUrl} alt={name}/>
                <p>{name}</p>
            </Link>
        </li>
    )
}

export default SelectOption;