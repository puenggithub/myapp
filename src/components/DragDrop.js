import React, { Component } from "react";
import Axios from 'axios'
import MovieItem from './MovieItem';
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 1,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "orange" : "white",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  marginLeft: 500,
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 500
});

export default class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
      rows: []
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd2(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const rows = reorder(
      this.state.rows,
      result.source.index,
      result.destination.index
    );

    this.setState({
      rows
    });
  }

  componentDidMount() {
    // this.search('her')
    this.search('harry')
 }

  search=(keyword)=>{
    console.log(keyword)
    var dataArray = []
    var url ="https://api.themoviedb.org/3/search/movie?api_key=884f2cac78207168dc6250f5657d6efa&query=" + keyword
    Axios.get(url).then(result=>{
        console.log(result.data.results)
        /*loop for array and add item to dataArray*/
        result.data.results.forEach(item=> {
            item.poster_src = "http://image.tmdb.org/t/p/w185" + item.poster_path
            dataArray.push(item)
        })

        /*set new value to state*/
        this.setState({rows: dataArray});
    })
}

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.rows.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <MovieItem movie={item}/>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}