'use client'

import {useState} from "react";

import GSIcon from "@/components/_blocks/GetStarted/GSIcon";
import GSInputField from "@/components/_blocks/GetStarted/GSInputField";
import GSButton from "@/components/_blocks/GetStarted/GSButton";

import './styles/gs.block.scss';

function GetStartedBlock({fieldPlaceholder, buttonText}: Readonly<{
    fieldPlaceholder: string;
    buttonText: string;
}>) {

    const [activeField, setActiveField] = useState(false);

    const onFieldFocus = () => {
        setActiveField(true);
    }

    const onFieldBlur = () => {
        setActiveField(false);
    }

    return (
        <div className="get-started">
            <div className="field">
                <GSIcon isActive={activeField} />
                <GSInputField
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                    placeholder={fieldPlaceholder}
                />
            </div>
            <GSButton text={buttonText} />
        </div>
    );
}

export default GetStartedBlock;