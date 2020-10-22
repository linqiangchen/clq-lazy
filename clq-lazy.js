import React ,{useEffect,useRef,useState} from 'react'
import './style.scss'
export default function LazyImg(props) {
    const [show, setShow] = useState(false)
    const ref = useRef(null)
    const load = useRef(null)
   useEffect(() => {
       let _io = new IntersectionObserver(
        entries => { 
          entries.forEach(item => {
              if(item.intersectionRatio && load.current !== props.src){ 
                setShow(true)
                load.current = props.src
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
             <div ref={ref} _src={props.src}>
                {show?<img ref={ref}  src={show?props.src:''} /> : <div className="gu"></div>}
            </div>
             </>
}