import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [state, setState] = useState({
    title: '',
    amount: ''
  })

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  const updateTitle = event => {
    const title = event.target.value
    setState(prevState => ({ title, amount: prevState.amount }))
  }

  const updateAmount = event => {
    const amount = event.target.value
    setState(prevState => ({ amount, title: prevState.title }))
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={state.title}
              onChange={updateTitle}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={state.amount}
              onChange={updateAmount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
