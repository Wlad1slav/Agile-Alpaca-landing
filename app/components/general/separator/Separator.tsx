import React from "react";

import '../../../stylesheet/fills.scss';

interface SeparatorProps {
    fill?: string;
}

interface SeparatorInterface {
    [key: string]: (props?: SeparatorProps) => JSX.Element;
}

const createSeparator = (path: JSX.Element) => (
    {fill = 'fill--standard'}: SeparatorProps = {}
) => {
    return (
        <svg className={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            {path}
        </svg>
    );
}

const Separator: SeparatorInterface = {
    WaveTop: createSeparator(
        <path d="M0,128L80,128C160,128,320,128,480,160C640,192,800,256,960,272C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    ),
    WaveBottom: createSeparator(
        <path d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,181.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    ),
}

export default Separator;