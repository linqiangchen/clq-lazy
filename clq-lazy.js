import React ,{useEffect,useRef,useState} from 'react'
import './style.css'
export default function LazyImg(props) {
    const [show, setShow] = useState(false)
    const [src, setSrc] = useState('')
    const ref = useRef(null)
    const load = useRef(null)
   useEffect(() => {
       let _io = new IntersectionObserver(
        entries => { 
          entries.forEach(item => {
              if(item.intersectionRatio && load.current !== props.src){ 
                let img = new Image()
                img.src = props.src;
                img.onload =()=>{
                  setShow(true)
                  setSrc(props.src)
                  load.current = props.src;
                  img = null;
                }
               
              }
          })
        }
      );
    _io.observe(ref.current)
    return () => {
        _io.unobserve(ref.current);
        _io = null
    }
   }, [])
        return <>
             <div ref={ref} >
                {show?<img   src={show?src:''} /> : <div className={"gu " + props.className}></div>}
            </div>
             </>
}