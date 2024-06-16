import styles from '@/styles/component/Table.module.scss';
import Image from 'next/image';

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
}

function Table({ data, headers }: Props) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>
                                {header}
                                <span>
                                    <Image src={"/images/filterbtn.png"} alt='logo' width={16} height={16} />
                                </span>
                            </th>

                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                         const state = row.status
                        return(
                        <tr className={`${styles.tr} py-16`} key={row.name}>
                            <td key={row.name}>{row.organization}</td>
                            <td key={row.name}>{row.name}</td>
                            <td key={row.name}>{row.email}</td>
                            <td key={row.name}>{row.phone}</td>
                            <td key={row.name}>{row.date}</td>
                            <td key={row.name} className={`${styles.status} ${styles[state]}`}>{row.status}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
