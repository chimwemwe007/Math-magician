import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const performClick = (e) => {
    const value = e.target.innerHTML;
    const { total, next, operation } = calculate(obj, value);
    setObj({ total, next, operation });
    const screen = document.querySelector('.screen');
    if (next !== null) {
      screen.innerHTML = next;
    } else if (total !== null) {
      screen.innerHTML = total;
    } else if (next !== null && total !== null) {
      screen.innerHTML = total;
    } else {
      screen.innerHTML = '0';
    }
  };
  return (
    <div className="calculator">
      <div className="cal-item screen">0</div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="0"
      >
        AC
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-1"
      >
        +/-
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-2"
      >
        %
      </div>
      <div
        className="cal-item orange"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-3"
      >
        ÷
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-4"
      >
        7
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-5"
      >
        8
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-6"
      >
        9
      </div>
      <div
        className="cal-item orange"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-7"
      >
        x
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-8"
      >
        4
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-9"
      >
        5
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-10"
      >
        6
      </div>
      <div
        className="cal-item orange"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-11"
      >
        -
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-12"
      >
        1
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-13"
      >
        2
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-14"
      >
        3
      </div>
      <div
        className="cal-item orange"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-15"
      >
        +
      </div>
      <div
        className="cal-item zero"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-16"
      >
        0
      </div>
      <div
        className="cal-item"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-17"
      >
        .
      </div>
      <div
        className="cal-item orange"
        onClick={performClick}
        onKeyDown={performClick}
        role="button"
        tabIndex="-18"
      >
        =
      </div>
    </div>
  );
};

export default Calculator;
