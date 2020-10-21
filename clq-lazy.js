import React from 'react'
var io = new IntersectionObserver(
    entries => { 
      entries.forEach(item => {
          if(item.intersectionRatio && item.target.src !==item.target.getAttribute('_src')){
              item.target.src = item.target.getAttribute('_src');  
             
          }
      })
    }
  );
export default class LazyImg extends React.Component {
    constructor(props){
        super(props);
        this.imgRef = React.createRef()
    }
    imgRef = React.createRef()
    render(){
        return (
             <img ref={this.imgRef} _src={this.props.imgSrc}></img>
        )
    }
    componentDidMount(){ 
        io.observe(this.imgRef.current)
    }
    componentWillUnmount(){
        io.unobserve(this.imgRef.current);
    }   
}
