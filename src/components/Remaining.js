import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remainings = () => {
    const { remaining, currency } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};
export default Remainings;
