import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency, dispatch, remaining } = useContext(AppContext);
    const [showOversoent, setShowOversoent] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleBudgetChange = (event) => {
        const newValue = parseInt(event.target.value);
        console.log(remaining)
        if (newValue > 20000) {
            setShowWarning(true)
        } else{
            // setNewBudget(newValue);
            setShowWarning(false);
            // console.log("bgt1", budget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newValue
            })
            // console.log("bgt2", budget); 
        }
        if (remaining < 0) {
            setShowOversoent(true)
        } else {
            setShowOversoent(false)
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
                {showOversoent && <p>Budget should not be lower than spending</p>}
            </span>
        </div>
    );
};
export default Budget;
