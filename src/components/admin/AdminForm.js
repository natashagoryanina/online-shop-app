import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

const categories = ["phones", "laptops"];

const initialState = { 
    category: categories[0],
    name: "",
    image: "",
    description: "",
    price: 0,
    isSale: false, 
};

const AdminForm = ({addProduct}) => {
    const [admForm, setAdmForm] = useState(initialState);

    const { language } = useContext(LanguageContext);
    
    const onHandleChange = (e) => {
        const {value, type, name} = e.target;

        if (type === 'file') {
           toDataURL(e.target).then((result) => 
                setAdmForm((prev) => ({
                    ...prev, [name]: result
                })));
            return;
        };

        if (type === "checkbox") {
            setAdmForm((prev) => ({
                ...prev, [name]: !prev[name]
            }));
            return;
        };

        setAdmForm((prev) => ({...prev, [name]: value }));
    };

    const toDataURL = (elem) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(elem.files[0]);
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct({...admForm, price: Number(admForm.price)});
    };

    return (
        <form onSubmit={onHandleSubmit}>
            <label>
                {language.adminForm.category}:
                <select 
                    name="category" 
                    onChange={onHandleChange} 
                    value={admForm.category}>
                        {categories.map((category) => (
                            <option 
                                value={category} 
                                key={category}>
                                {category}
                            </option>
                        ))}
                </select>
            </label>
            <label>
                {language.adminForm.name}:
                <input 
                    type="text" 
                    name="name"
                    value={admForm.name}
                    onChange={onHandleChange} 
                />
            </label>
            <label>
                {language.adminForm.img}
                <input 
                    type="file" 
                    name="image" 
                    onChange={onHandleChange} 
                />
            </label>
            {admForm.image && <img src={admForm.image} alt='product' width='200px'/>}
            <label>
                {language.adminForm.description}: 
                <textarea 
                    name="description" 
                    cols="30" 
                    rows="10"
                    value={admForm.description}
                    onChange={onHandleChange} 
                ></textarea>
            </label>
            <label>
                {language.adminForm.price}:
                <input 
                    type="number" 
                    name="price"
                    value={admForm.price}
                    onChange={onHandleChange} 
                />
            </label>
            <label>
                {language.adminForm.sale}:
                <input 
                    type="checkbox" 
                    name="isSale"
                    value={admForm.isSale}
                    checked={admForm.isSale}
                    onChange={onHandleChange} 
                />
            </label>
            <button type="submit">{language.adminForm.save}</button>
        </form>
    );
};

export default AdminForm;
