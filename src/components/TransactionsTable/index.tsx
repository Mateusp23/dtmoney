import { useState, useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transcation {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transcation[]>([]);

  useEffect(() => {  
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}