import React ,{useEffect,useRef} from 'react'
var io = new IntersectionObserver(
    entries => { 
      entries.forEach(item => {
          if(item.intersectionRatio && item.target.src !==item.target.getAttribute('_src')){
              item.target.src = item.target.getAttribute('_src');  
             
          }
      })
    }
  );
export default function LazyImg(props) {
   const ref = useRef(null)
   useEffect(() => {
    io.observe(ref.current)
       return () => {
        io.unobserve(ref.current);
       }
   }, [])
        return (
             <img ref={ref} _src={props.src}></img>
        )
    
   
}
