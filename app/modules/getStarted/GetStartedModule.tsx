'use client'

import {useState} from "react";

import GSIcon from "@/app/components/getStarted/GSIcon";
import GSInputField from "@/app/components/getStarted/GSInputField";
import GSButton from "@/app/components/getStarted/GSButton";

import './style.scss';

function GetStartedModule() {

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
                />
            </div>
            <GSButton />
        </div>
    );
}

export default GetStartedModule;