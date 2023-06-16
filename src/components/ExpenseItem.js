import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);
    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        });
    };
    const handleDec = () => {
        const item = {
            name: props.name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };
    const handleAdd = () => {
        const item = {
            name: props.name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{parseInt(props.cost)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAdd}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDec}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.5em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;
