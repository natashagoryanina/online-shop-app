import React, { useContext } from 'react';
import AdminForm from '../components/admin/AdminForm';
import { LanguageContext } from '../components/App';
import Section from '../components/Section';

const AdminPage = ({ addProduct }) => {
    const { language } = useContext(LanguageContext);

    return (
        <Section title={language.section.admin}>
            <AdminForm addProduct={addProduct}/>
        </Section>
    );
};

export default AdminPage;