import React from 'react'

const Section = ({title, children}) => {
    return (
        <section>
            <h4>{title.toUpperCase()}</h4>
            {children}
        </section>
    );
};

export default Section;