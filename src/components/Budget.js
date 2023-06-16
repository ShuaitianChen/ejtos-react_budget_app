import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency, dispatch, remaining } = useContext(AppContext);
    const [showOverspent, setShowOverspent] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleBudgetChange = (event) => {
        const newValue = parseInt(event.target.value);
        // console.log(remaining)
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue
        })
        if (newValue > 20000) {
            setShowWarning(true)
        } else{
            // setNewBudget(newValue);
            setShowWarning(false); 
        }
        if (remaining < 0) {
            setShowOverspent(true)
        } else {
            setShowOverspent(false)
        }
      };
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    value={budget}
                    max="20000"
                    step="10"
                    onChange={(event) => handleBudgetChange(event)}
                    >
                </input>
                {showWarning && <p>Value should not exceeds 20000</p>}
                {showOverspent && <p>Budget should not be lower than spending</p>}
            </span>
        </div>
    );
};
export default Budget;
