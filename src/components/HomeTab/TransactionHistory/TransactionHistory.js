import React from 'react';
import { connect } from 'react-redux';
import styles from './TransactionHistory.module.css';

function mapStateToProps(state) {
  return { transactions: state.finance.data };
}

const testTransactions = [
  {
    type: 'income',
    date: 1578231058734,
    id: 'a1',
    amount: 100,
    category: 'car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'income',
    date: 1578231058734,
    id: 'a2',
    amount: 110,
    category: 'car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  },
  {
    type: 'income',
    date: 1578231058734,
    id: 'a3',
    amount: 120,
    category: 'car',
    comment: 'test comment',
    balanceAfter: 5000,
    typebalanceAfter: '-',
    updatedAt: '2020-11-25T14:14:14.100Z',
    createdAt: '2020-11-25T14:14:14.100Z',
  }
];

class TransactionHistory extends React.Component {
  timestampToDate(timestamp) {
    let date = new Date(timestamp);
    return date.toISOString().slice(0, 10);
  }
  
  render() {
    let { transactions } = this.props;
    
    if (!transactions) {
      transactions = testTransactions;
    }
    
    return (
      <div className={styles.transactionHistory}>
        <table className={styles.transactionTable}>
          <thead>
          <tr>
            <th>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th>Баланс</th>
          </tr>
          </thead>
          <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{this.timestampToDate(t.date)}</td>
              <td>{t.type === 'income' ? '+' : '-'}</td>
              <td>{t.category}</td>
              <td>{t.comment}</td>
              <td>{t.amount}</td>
              <td>{t.balanceAfter}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TransactionHistory);
