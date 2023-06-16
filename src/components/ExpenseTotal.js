import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { currency, totalExpenses } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Total Expense: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;

