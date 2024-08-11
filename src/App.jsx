import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import { fetchTransactions, addTransaction } from './components/Api'
import './App.css';
import Footer from './components/Footer';
import TransactionListHeader from './components/TransactionListHeader';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
      setFilteredTransactions(data);
    };
    loadTransactions();
  }, []);

  const handleAddTransaction = async (transaction) => {
    await addTransaction(transaction);
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...transactions, transaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      setFilteredTransactions(transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredTransactions(transactions);
    }
  };

  return (
    <div className="app-container">
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
