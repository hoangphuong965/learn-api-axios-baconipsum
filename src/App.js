import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count <= 0) {
      alert('hey enter number > 0');
      return count;
    }
    const fetchData = async () => {
      const { data } = await axios.get('https://baconipsum.com/api/', {
        params: {
          type: 'all-meat',
          paras: count,
        },
      });
      setText(data);
    };
    fetchData();
  };

  // useEffect(() => {
  //   const num = async () => {
  //     const { data } = await axios.get(
  //       'https://baconipsum.com/api/?type=meat-and-filler',
  //       {
  //         params: {
  //           paras: count,
  //         },
  //       }
  //     );
  //     setText(data);
  //   };
  //   num();
  // }, [count]); // dien so tu dong a

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraps: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
