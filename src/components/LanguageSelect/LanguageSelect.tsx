'use client'

import {useState} from "react";
import {useParams} from "next/navigation";

import SelectOption from "@/components/LanguageSelect/LanguageOption";

import './style/select-language.scss';


function LanguageSelect({languages}: {
    languages: Array<LanguageOptionProps>;
}) {
    const [isActive, setIsActive] = useState(false);

    /* Current language */
    const params = useParams();
    const currentLanguage = params['lang'];

    const currentLanguageElement = languages.filter(value => value.url === currentLanguage);
    
    return (
        <div className="select" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
            <p className="field">
                <img src={currentLanguageElement[0].imgUrl} alt={`${currentLanguageElement[0].name} language flag`}/>
                {currentLanguageElement[0].name}
            </p>

            { isActive &&
                <ul>
                    {
                        languages.map((language) => 
                            <SelectOption
                                key={language.url}
                                imgUrl={language.imgUrl} 
                                name={language.name} 
                                url={language.url} 
                            />
                        )
                    }
                </ul>
            }
        </div>
    );
}

export default LanguageSelect;