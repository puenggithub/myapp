//https://egghead.io/lessons/react-create-and-style-a-list-of-data-with-react

import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import testData from './testData'




class DragDrop extends React.Component {
    state = testData
  
    render() {
      return this.state.columnOrder.map(columId => {
          const column = this.state.colums[columnID];
          const tasks = column.taskIDs.map(taskID => this.state.tasks[taskID]);

          return column.title;
      })
    }
  }

export default DragDrop;