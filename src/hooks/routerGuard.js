import {useEffect, useLayoutEffect} from "react";

export function UseAfterEnter(props,fn) {
  useLayoutEffect(()=>{
      const from = props.history.location.pathname||''
      const to = props.location.pathname||''
      const next = (todo)=>{
          if(todo===''||!todo)
              return null
          else return  props.history.push(todo)
      }
      fn(from,to,next)
      return ()=>{}
  },[])

}
export function UseBeforeLeave(props,fn) {
    useEffect(()=>{
        return ()=>{
            const to = props.history.location.pathname||''
            const from = props.location.pathname||''
            const next = (todo)=>{
                if(todo===''||!todo)
                    return null
                else return  props.history.push(todo)
            }
            fn(from,to,next)
        }
    },[])
}
