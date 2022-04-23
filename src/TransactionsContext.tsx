import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface Transcation {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode; //aceita qualquer conteudo valido p react, tag etc
}

export const TransactionsContext = createContext<Transcation[]>([]);

export function TransactionsProvider({ children } : TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transcation[]>([]);

  useEffect(() => {  
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}