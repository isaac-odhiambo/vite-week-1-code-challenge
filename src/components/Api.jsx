const API_URL = 'https://phase-2-db.vercel.app/transactions';

export const fetchTransactions = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const addTransaction = async (transaction) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });
  return response.json();
};
