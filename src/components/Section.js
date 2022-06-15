import React from 'react'

const Section = ({title, children}) => {
    return (
        <section>
            <h2>{title.toUpperCase()}</h2>
            {children}
        </section>
    );
};

export default Section;