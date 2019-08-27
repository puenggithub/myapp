import * as React from "react";
import * as ReactDOM from 'react-dom';
import Axios from 'axios'
import MovieItem from './MovieItem';
import Dragula from 'react-dragula';

export default class DragDrop2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = { rows: []}
    }

    componentDidMount() {
       // this.search('her')
       this.search('harry')
    }

    /*function seach and set state*/
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
    

  render () {
    return (

        <div className='container-fluid' ref={this.dragulaDecorator}>
        <div>Swap me around</div>
        <div>Swap her around</div>
        <div>Swap him around</div>
        <div>Swap them around</div>
        <div>Swap us around</div>
        <div>Swap things around</div>
        <div>Swap everything around</div>

        <div style={{margin: '0 auto', width: '50%'}}>
            { this.state.rows.map(item=> (               
                <MovieItem movie={item}/>             
            ))}
        </div>
    </div>
    )
  }
  
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}