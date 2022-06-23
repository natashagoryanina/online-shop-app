import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { AdminFormContainer } from './AdminFormStyled';
import asminFormImg from '../../images/waves_6.jpeg';
import sprite from '../../icons/adminForm/sprite.svg';

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
        <AdminFormContainer>
            <div className='admin-img_container'>
                <img className='admin-img' src={asminFormImg} alt='admin form'/>
                <div className='admin-img_text'>
                    {language.adminForm.imgText}
                </div>
            </div>
            <div className='admin-form_container'>
                <form className='admin-form' onSubmit={onHandleSubmit}>
                    <label className='admin-form_item'>
                        {language.adminForm.category}:
                        <div className='admin-form_select-container'>
                            <select 
                                className="admin-form_select"
                                name="category" 
                                onChange={onHandleChange} 
                                value={admForm.category}>
                                    {categories.map((category) => (
                                        <option 
                                            className="admin-form_select-option"
                                            value={category} 
                                            key={category}>
                                            {category}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </label>
                    <label className='admin-form_item'>
                        {language.adminForm.name}:
                        <input 
                            className='admin-form_input'
                            type="text" 
                            name="name"
                            value={admForm.name}
                            onChange={onHandleChange} 
                            autoFocus
                        />
                    </label>
                    <label className='admin-form_item'>
                        {language.adminForm.description}: 
                        <textarea 
                            className='admin-form_textarea'
                            name="description" 
                            cols="35" 
                            rows="3"
                            value={admForm.description}
                            onChange={onHandleChange} 
                        ></textarea>
                    </label>
                    <label className='admin-form_item'>
                        {language.adminForm.price}:
                        <input 
                            className='admin-form_input'
                            type="number" 
                            name="price"
                            value={admForm.price}
                            onChange={onHandleChange} 
                        />
                    </label>
                    <label className='admin-form_item'>
                        {language.adminForm.sale}:
                        <input 
                            className='admin-form_checkbox'
                            type="checkbox" 
                            name="isSale"
                            value={admForm.isSale}
                            checked={admForm.isSale}
                            onChange={onHandleChange} 
                        />
                        <span className="admin-form_checkmark"></span>
                    </label>
                    <label className='admin-form_item'>
                        {language.adminForm.img}: 
                        <input 
                            className='admin-form_file'
                            type="file" 
                            name="image" 
                            onChange={onHandleChange} 
                        />
                        <svg className='admin-form_icon'>
                            <use href={sprite + '#icon-image'}/>
                        </svg>
                    </label>
                    {admForm.image && <img src={admForm.image} alt='product' width='100px'/>}
                    <button 
                        className='admin-form_btn'
                        type="submit"
                    >
                        {language.adminForm.save}
                    </button>
                </form>
            </div>
        </AdminFormContainer>
    );
};

export default AdminForm;
