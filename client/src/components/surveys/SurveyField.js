import React from 'react';
                                //nested destructuring
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error} {/* if touched is false, the rest of the statement is not executed  */}
      </div>
    </div>
  );
};