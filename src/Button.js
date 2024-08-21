import React from 'react';

function Button({ symbol, onClick }) {
  return (
    <button className="button" onClick={() => onClick(symbol)}>
      {symbol}
    </button>
  );
}

export default Button;