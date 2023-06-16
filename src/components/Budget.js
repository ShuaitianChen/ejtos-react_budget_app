import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency, dispatch, totalExpenses} = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newValue = parseInt(event.target.value);
        
        
        if (newValue > 20000) {
            alert("Value should not exceeds 20000");
            return;
        }
        if (totalExpenses > budget) {
            alert("Budget should not be lower than spending");
            return;
        }

        if (newValue <= 20000 && totalExpenses <= budget){
            dispatch({
                type: 'SET_BUDGET',
                payload: newValue
            });
        }
      };

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
            </span>
        </div>
    );
};
export default Budget;
