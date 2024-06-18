import React from "react";

function Column({children, style}: Readonly<{
    children: React.ReactNode;
    style?: {};
}>) {
    return (
        <div className='column' style={{...style}}>
            {children}
        </div>
    );
}

export default Column;