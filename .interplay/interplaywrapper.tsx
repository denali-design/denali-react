import React from 'react';

export const InterplayWrapper: React.FC<InterplayWrapperProps> = ({
    _theme = 'light',
    children,
}: InterplayWrapperProps) => {
    console.log('InterplayWrapper received _theme:', _theme);

    //don't actually want to render anything for global styles, the css is already included on the page
    //we just add class to body so that it is picked up

    if (_theme === 'dark') {
        console.log('adding denali-dark-theme class');
        document.body.classList.add('denali-dark-theme');
    } else {
        document.body.classList.remove('denali-dark-theme');
    }

    return <React.Fragment>{children}</React.Fragment>;
};

export interface InterplayWrapperProps {
    _theme?: string;
}
