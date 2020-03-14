import React from 'react';

const List = (props) => {
  console.log('props from List', props.user);
  return (
    <div>
      {props.user.map(user => {
        return (
          <div>
            <p>{user.data.name}</p>
            <p>{user.data.password}</p>
            <p>{user.data.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List;
