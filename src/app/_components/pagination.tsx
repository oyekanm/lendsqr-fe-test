import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import styles from "@/styles/component/pagination.module.scss"

type Props = {
    perPage: number,
    total: number,
    totalhalf: number,
    changeCurrentPage: (value: number) => void,
    prevPage: () => void,
    nextPage: () => void,
    currentPage: number,
    newArray: number[]
}

export default function Pagination(props: Props) {

    const {
        perPage,
        total,
        totalhalf,
        changeCurrentPage,
        prevPage,
        nextPage,
        currentPage,
        newArray
    } = props
    console.log(currentPage)

    return (
        <div className={styles.main_container}>
            <div className={styles.first_container}>
                <p className={styles.span}>Showing</p>
                <select name="filter" id="filter" onChange={(value) =>  changeCurrentPage(Number(value.target.value))}>
                 {
                    newArray.map(no=>{
                        return <option   key={no} value={no + 1}>{(no + 1) * perPage}</option>
                    })
                 }
                </select>
                <p className={styles.span}>out of {total}</p>
            </div>
            <div className={styles.second_container}>
                <button  onClick={prevPage}>
                    <ChevronLeft />
                </button>
                <div  >
                    {currentPage < totalhalf - 1 && currentPage < totalhalf && newArray.slice(currentPage - 1, currentPage + 2).map(no => {
                        // active class
                        const active = currentPage === no + 1 ? styles.span_active : ""
                        return <span onClick={() => changeCurrentPage(no + 1)} key={no} className={`${active} `}>{no + 1}</span>
                    })}
                </div>
                {currentPage < totalhalf - 1 && currentPage < totalhalf && <span>...</span>}
                <div >
                    {newArray.slice(totalhalf - 2, totalhalf).map(no => {
                        // active class
                        const active = currentPage === no + 1 ? styles.span_active : ""
                        return <span onClick={() => changeCurrentPage(no + 1)} key={no} className={`${active} `}>{no + 1}</span>
                    })}
                </div>
                <button  onClick={nextPage}>
                    <ChevronRight  />
                </button>
            </div>
        </div>
    )
}
