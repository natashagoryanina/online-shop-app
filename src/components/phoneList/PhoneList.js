import React from 'react';
import Section from '../Section';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = ({phones}) => {
    return (
        <>
            <Section title="Phones">
                <ul>
                    {phones.map((phone) => (
                        <PhoneListItem phone={phone} key={phone.id}/>
                    ))}
                </ul>
            </Section>
        </>
    );
};

export default PhoneList;