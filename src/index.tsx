import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvedor iOS',
          type: 'deposit',
          category: 'Dev',
          amount: '7500',
          createdAt: new Date('2022-04-20 11:00:00'),
        },
        {
          id: 2,
          title: 'Compras Mercado',
          type: 'withdraw',
          category: 'Mercado',
          amount: '500',
          createdAt: new Date('2022-04-21 15:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

