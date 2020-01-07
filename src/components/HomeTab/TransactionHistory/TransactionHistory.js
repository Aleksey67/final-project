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
  },
];

class TransactionHistory extends React.Component {
  timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().slice(0, 10);
  }

  render() {
    let { transactions } = this.props;

    if (!transactions) {
      transactions = testTransactions;
    }

    return (
      <div className={styles.transactionHistory}>
        <div>
          {transactions.map(t => (
            <div key={t.id} className={styles.transaction}>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Дата</div>
                <div className={styles.valCell}>
                  {this.timestampToDate(t.date)}
                </div>
              </div>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Тип</div>
                <div className={styles.valCell}>
                  {t.type === 'income' ? '+' : '-'}
                </div>
              </div>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Категория</div>
                <div className={styles.valCell}>{t.category}</div>
              </div>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Комментарий</div>
                <div className={styles.valCell}>{t.comment}</div>
              </div>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Сумма</div>
                <div className={styles.valCell}>{t.amount}</div>
              </div>
              <div className={styles.keyVal}>
                <div className={styles.keyCell}>Баланс</div>
                <div className={styles.valCell}>{t.balanceAfter}</div>
              </div>
            </div>
          ))}
        </div>
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
