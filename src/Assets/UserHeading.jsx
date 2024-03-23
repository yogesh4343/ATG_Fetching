import React from 'react';

const UserHeading = ({font , name , text}) => {
  return (
    <div className={`  text-[12px] md:text-${font} text-${text} font-semibold   `}>
      {name}
    </div>
  )
}

export default UserHeading
