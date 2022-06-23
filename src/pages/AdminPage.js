import React from 'react';
import AdminForm from '../components/admin/AdminForm';
import Section from '../components/Section';

const AdminPage = ({ addProduct }) => {

    return (
        <Section>
            <AdminForm addProduct={addProduct}/>
        </Section>
    );
};

export default AdminPage;