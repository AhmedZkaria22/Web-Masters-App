import React from 'react'
import { Box, Input } from '@mui/material'
import { Search } from '@mui/icons-material';
import AtomButton from '../../Atoms/Button/Button';
import './AtomForm.css';

function AtomForm({ placeHolder, btnText, type }) {
  return (
        <form className={type === 'header' ? 'headerForm' : 'footerForm'}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            {
                type === 'header' && <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            }

                <Input placeholder={placeHolder} id="input-with-sx" variant="standard" 
                    className={type === 'header' ? 'headerInput' : 'footerInput'}
                />
            </Box>
            <AtomButton type='submit' variantType={'primary-btn'} text={btnText} />
        </form>
  )
}

export default AtomForm