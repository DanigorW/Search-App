import React from 'react';
import unsplash from '../api/unsplash';
import Input from './Input';
import Pics from './Pics';
import Particles from 'react-particles-js';


const partical = {

    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }

}


class App extends React.Component {

    state = {img:[]}

    onSearchSubmit = (search) =>{
        unsplash.get('/search/photos',{
        params:{query: search},
        
        }).then((Response) => {
            this.setState({img:Response.data.results})
        }).catch((err) => {
            console.log(err)
        })
    }

    

    render(){        
    return(
        <div className="mt3  ui container">
            <Particles params={partical} className="particles" />
            <Input onSubmit = {this.onSearchSubmit}/>
            <Pics img ={this.state.img } />
        </div>
    )
  }
}


export default App;