import React from 'react'
import style from './loading.module.css'
import {CircularProgress} from '@mui/material'
const Loading = () => {
  return (
    <div className={style.model} >
      
      <CircularProgress/>

    </div>
  )
}

export default Loading
