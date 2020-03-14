import React from 'react';

const List = (props) => {
  console.log('props from List', props.user);
  return (
    <div>
      {props.user.map(user => {
        return (
          <div>
            <p>User: {user.data.name}</p>
            <p>Password: {user.data.password}</p>
            <p>Email: {user.data.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List;
