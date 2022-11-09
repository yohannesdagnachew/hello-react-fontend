import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingAPI } from './redux/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchGreetingAPI());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreetingAPI());
    console.log(message);
  };

  return (
    <>
      <h1>{message}</h1>
      <button type="button" onClick={handleClick}>
        NEW GREETING
      </button>
    </>
  );
};

export default Greeting;
