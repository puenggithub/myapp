import React, { Component } from 'react'

export default class Movieitem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {id, title, overview, poster_src} = this.props.movie
        return (
         <table>
            <tbody key={id}>
                <tr>
                    <td>
                        <img src={poster_src}/>
                    </td>

                    <td>
                        <strong>{title}</strong>
                        <p>{overview}</p>
                    </td>
                </tr>
            </tbody>

         </table>
        )
    }
}
