'use client';

import ModalPortal from '@/common/ModalPortal'
import React, { useState } from 'react'
import styles from "@/components/header/Header.module.scss";
import Image from 'next/image';

const ContactUsModal = ({ isModal, onClose }) => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        walletLink: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const handleFileChange = (e) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         file: e.target.files[0],
    //     }));
    // };


    return (
        <ModalPortal childClassName={styles.contact_modal_wrapper} show={isModal} onClose={onClose}>
            <div className={styles.header_wrap}>
                <h1 className={`${styles.heading}`}>اتصل بنا</h1>
                <button className={styles.close_btn} onClick={onClose}>
                    <Image src="https://loopwebsite.s3.ap-south-1.amazonaws.com/basil_cross-solid.svg" alt="" width="28" height="28" />
                </button>
            </div>

            <div className={styles.modal_Body}>
                <div className={styles.form_wrapper}>
                    <input
                        type="text"
                        name="name"
                        placeholder="أدخل الاسم"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.form_input}
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <input
                        type="email"
                        name="email"
                        placeholder="أدخل البريد الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.form_input}
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <input
                        type="number"
                        name="phone"
                        placeholder="أدخل رقم الجوال"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.form_input}
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <input
                        type="text"
                        name="walletLink"
                        placeholder="رابط المحفظة"
                        value={formData.walletLink}
                        onChange={handleChange}
                        className={styles.form_input}
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <textarea
                        type="text"
                        name="walletLink"
                        placeholder="اكتب رسالتك"
                        row="10"
                        // value={formData.walletLink}
                        // onChange={handleChange}
                        className={styles.form_inputarea}
                    />
                </div>

                <div className={styles.btn_group}>
                    <button type="button" className={styles.apply_btn}>إرسال</button>
                    <button type="button" className={styles.close_btn} onClick={onClose}>يغلق</button>
                </div>
            </div>
        </ModalPortal>
    )
}

export default ContactUsModal
