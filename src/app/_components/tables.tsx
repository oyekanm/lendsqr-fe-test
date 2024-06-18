"use client"

import styles from '@/styles/component/table.module.scss';
import Image from 'next/image';
import MoreOptionsComponent from './moreOptionsComponent';
import { useState } from 'react';
import Pagination from './pagination';
import FilterCard from './filterCard';

type Props = {
    data: data[];
    headers: string[]
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

function Table({ data, headers }: Props) {
    const [perPage, setPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [open,setOpen] = useState(false)
    const [tableData, setTableData] = useState(data)
    const dataNo = tableData?.length

    const lastPostIndex = currentPage * perPage;
    const firstPostIndex = lastPostIndex - perPage;

    const users = tableData.slice(firstPostIndex, lastPostIndex);

    const changeCurrentPage = (value: number) => setCurrentPage(value);

    const finalIndex = dataNo / perPage;

    const prevPage = () => {
        setCurrentPage((prevCurrent) => {
            let prevPage = prevCurrent - 1;
            if (prevPage < 1) {
                prevPage = finalIndex;
            }
            return prevPage;
        });
    };
    const nextPage = () => {
        setCurrentPage((prevCurrent) => {
            let nextPage = prevCurrent + 1;
            if (nextPage > finalIndex) {
                nextPage = 1;
            }
            return nextPage;
        });
    };

    const newArray = Array.from({ length: finalIndex }, (_, i) => i)
    // console.log(newArray)
    return (
        <>
            <div className={styles.container}>
                {tableData?.length > 0 ?<table className={`${styles.table}`}>
                    <thead>
                        <tr>
                            {headers.map((header) => {
                                return (
                                    <th key={header}>
                                        {header}
                                        <span onClick={() => setOpen(!open)}>
                                            <Image src={"/images/filterbtn.png"} alt='logo' width={16} height={16} />
                                        </span>
                                    </th>

                                );
                            })}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((row, i) => {
                            const state = row.status
                            const date: any = new Date(row.date).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric" })
                            return (
                                <tr className={`${styles.tr}`} key={i}>
                                    <td key={row.name}>{row.organization}</td>
                                    <td key={row.name}>{row.name}</td>
                                    <td key={row.name}>{row.email}</td>
                                    <td key={row.name}>{row.phone}</td>
                                    <td key={row.name}>{date}</td>
                                    <td key={row.name} >
                                        <span className={`${styles.status} ${styles[state]}`}>{row.status}</span>
                                    </td>
                                    <td key={row.name} >
                                        <MoreOptionsComponent data={row} />
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>: <p className={styles.empty}>None of the values match the data</p>}
                {tableData?.length > 0 && open && <FilterCard setOpen={setOpen} setData={setTableData} data={tableData} />}
            </div>
           {tableData?.length >0 && <Pagination
                perPage={perPage}
                total={dataNo}
                totalhalf={finalIndex}
                changeCurrentPage={changeCurrentPage}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
                newArray={newArray}
            />}
        </>
    );
}

export default Table;
