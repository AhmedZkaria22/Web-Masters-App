import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

function AtomButton({text, index, variantType, dataLink, dataHref, ...props}) {
  return (
    <>
      {
        dataLink === true 
        ? <a className='atomButton' href={dataHref}>{text}</a>
        : <Button className={`${variantType} atomButton`} {...props}>{text}</Button>
      }
    </>
  )
}

export default AtomButton