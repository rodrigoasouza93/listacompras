import React from 'react';

const ListFooter = (props) => (
  <div className="list-footer">
    <p>{props.date}</p>
    <p>R$ {props.total}</p>
  </div>
);

export default ListFooter;