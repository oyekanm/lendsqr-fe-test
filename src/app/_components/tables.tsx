import styles from '@/styles/component/Table.module.scss';

type Props = {
    data: data[];
    headers: string[]
}

interface data{
    name: string,
    email: string,
    phone: string,
    date: string,
    organization: string,
    status: string
}

function Table({ data, headers }: Props) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
        {data.map((row) => (
          <tr key={row.name}> 
              <td key={row.name}>{row.organization}</td>
              <td key={row.name}>{row.name}</td>
              <td key={row.name}>{row.email}</td>
              <td key={row.name}>{row.phone}</td>
              <td key={row.name}>{row.date}</td>
              <td key={row.name}>{row.status}</td>
          </tr>
        ))}
      </tbody>
        </table>
    );
}

export default Table;
