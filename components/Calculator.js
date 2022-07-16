// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function Calculator() {
  const [num, setNum] = useState([]);

  const handleClick = (event) => {
    const value = event.target.innerText;
    setNum((prevState) => (prevState + value));
  };

  const resetCalculator = () => {
    setNum('');
  };

  return (
    <div>
      <h2>Number chosen: {num}</h2>
      <Table bordered onClick={handleClick} variant="dark">
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td />
            <td>0</td>
            <td />
            <td>/</td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>=</td>
          </tr>
        </tbody>
      </Table>
      <button type="button" onClick={resetCalculator}>
        Reset
      </button>
    </div>
  );
}
