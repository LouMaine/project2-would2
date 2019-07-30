import React from 'react';

export const Avatar = props => {
  const { picture, name, big} = props;
  return (
    <img
      src={picture}
      alt={name}
      style={big===true? {borderRadius:100, height:"100px"}: { borderRadius:50,height:"50px" }}
    />
  );
};

export default Avatar;