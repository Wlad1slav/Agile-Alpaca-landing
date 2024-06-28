import React from 'react';

import './styles/navbar.scss';

function NavBar({ children }: Readonly<{ children: React.ReactNode; }>) {
    const childrenArray = React.Children.toArray(children);
    return (
        <nav>
            {
                childrenArray.map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                        {index < childrenArray.length - 1 && '•'}
                    </React.Fragment>
                ))
            }
        </nav>
    );
}

export default NavBar;
