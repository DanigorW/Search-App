import React , {Component} from 'react';


class Input extends Component {
    state = {search: '' , }
    
    onSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.search)
    }

    render(){
        return(
            <div className="ui segment">
              <form onSubmit = {this.onSubmit} className="ui form">
               <div className="field">
               <label>Image Search</label>   
                <input placeholder='Type Anything' onChange= {e => this.setState({search:e.target.value})}
                 type="text"
                 value={this.state.search}
                />            
               </div>
              </form>
            </div>
        )
    }
}




export default Input;