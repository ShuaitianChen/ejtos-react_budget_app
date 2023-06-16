import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remainings from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Currency from './components/Currency'

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div>

                        <div className='col-sm'>
                            <Remainings />
                        </div>
                   
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                        <div className='col-sm'>
                            <Currency />
                        </div>
                    </div>

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

                    
            </div>
        </AppProvider>
    );
};
export default App;
