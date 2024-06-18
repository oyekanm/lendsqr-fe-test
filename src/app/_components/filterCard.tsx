"use client"

import React, { useState } from 'react'
import styles from "@/styles/component/filterCard.module.scss"
import { companies, userStatuses } from '../(Dashboard)/users/page'

type Props = {
    data: data[],
    setData: any,
    setOpen:any
}

interface data {
    name: string,
    email: string,
    phone: string,
    date: string,
    organization: string,
    status: string
    id: string,
    gender: string
}

export default function FilterCard({ data, setData, setOpen }: Props) {
    const [value, setValue] = useState({
        organization: '',
        username: '',
        email: "",
        phone: "",
        date: "",
        status: ""
    });
    const handleInput = (
        e: React.ChangeEvent<
            HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    const handleSelect = (name: string, selectValue: string) => {
        setValue({ ...value, [name]: selectValue });
    }
    const resetValue = () => {
        setValue({
            organization: '',
            username: '',
            email: "",
            phone: "",
            date: "",
            status: ""
        })
    }
    const filterData = () => {
        const newData = data.filter(data => {
            if (data.name === value.username || data.organization === value.organization || data.email === value.email, data.date === value.date || data.phone === value.phone || data.status === value.status) {
                return true
            }
            return false
        })
        setData(newData)
        setOpen(false)

        console.log(newData)
    }
    // console.log(value)
    return (
        <div className={styles.card}>
            <div className={styles.input_div}>
                <label htmlFor="organization">organization</label>
                <div>
                    <select name="organization" id="organization" onChange={(value) => handleSelect(value.target.name, value.target.value)}>
                        <option value={"Select"}>{"Select"}</option>
                        {
                            companies.map(com => {
                                return <option key={com} value={com}>{com}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className={styles.input_div}>
                <label htmlFor="name">username</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        id="name"
                        value={value.username}
                        placeholder='User'
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.input_div}>
                <label htmlFor="email">email</label>
                <div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={value.email}
                        placeholder='Email'
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.input_div}>
                <label htmlFor="date">date</label>
                <div>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={value.date}
                        placeholder='Date'
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.input_div}>
                <label htmlFor="phone">phone number</label>
                <div>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={value.phone}
                        placeholder='Phone Number'
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.input_div}>
                <label htmlFor="status">status</label>
                <div>
                    <select name="status" id="status" onChange={(value) => handleSelect(value.target.name, value.target.value)}>
                        <option value={"Select"}>{"Select"}</option>
                        {
                            userStatuses.map(com => {
                                return <option key={com} value={com}>{com}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className={styles.button_div}>
                <button onClick={resetValue} className={styles.reset}>reset</button>
                <button onClick={filterData} className={styles.filter}>filter</button>
            </div>
        </div>
    )
}
