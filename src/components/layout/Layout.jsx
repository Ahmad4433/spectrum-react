import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import style from './layout.module.css'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../ui/loading/Loading'
import {DragDropContext} from 'react-beautiful-dnd'
import {dragActions} from '../../store/slices/drag-slice'
import { tenetActions } from '../../store/slices/tenets-sllice'

const Layout = () => {
const dispatch = useDispatch()
const isLoading = useSelector(state=>state.ui.loading)




const reorderData = (list, startIndex, endIndex) => {
  const result = Array.from(list);

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);
  return result;
};


const dragEnd = (result)=>{

  const {source,destination,draggableId} = result



  if (!result.destination || source.droppableId === destination.droppableId) {
    // dispatch(dragActions.setDestinationIndex(destination.index))
    // dispatch(dragActions.setSourceIndex(source.index))
    return;
  }
 


    
 if(source.droppableId ==='droppable' && destination.droppableId === 'someid'){
  const formatedId = draggableId.split('-')[1]
  dispatch(dragActions.setItemId(formatedId))
 }


if( source.droppableId ==='tenets' && destination.droppableId ==='tenetArray'){
  const formatedId = draggableId.split('-')[1]
  dispatch(tenetActions.setId(formatedId))
}

}


  return (

    <DragDropContext onDragEnd={dragEnd} >
    <div className={style.main} >
      
      {isLoading &&  <Loading/>}
      <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </DragDropContext>

  )
}

export default Layout
