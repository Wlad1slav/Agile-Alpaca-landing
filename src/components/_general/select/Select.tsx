'use client'

import {useState} from "react";
import {useParams} from "next/navigation";

import SelectOption from "@/components/_general/select/SelectOption";

import './style/select.scss';


function Select({languages}: {
    languages: Array<SelectOptionProps>;
}) {
    const [isActive, setIsActive] = useState(false);

    /* Current language */
    const params = useParams();
    const currentLanguage = params['lang'];

    const currentLanguageElement = languages.filter(value => value.langUrl === currentLanguage);

    return (
        <div className="select" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
            <p className="field">
                <img src={currentLanguageElement[0].imgUrl} alt={currentLanguageElement[0].name}/>
                {currentLanguageElement[0].name}
            </p>

            { isActive &&
                <ul>
                    {
                        languages.map((language) => <SelectOption imgUrl={language.imgUrl} name={language.name} langUrl={language.langUrl} />)
                    }
                </ul>
            }
        </div>
    );
}

export default Select;