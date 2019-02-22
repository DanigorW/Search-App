import React from 'react'

class ImgCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {spans: 0}

        this.imgRef = React.createRef()
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = height / 10 + 1
        this.setState({spans});
    }

    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imgRef} src={this.props.el.urls.regular} alt={this.props.el.description} />
            </div>
        )

    }

}


export default ImgCard;