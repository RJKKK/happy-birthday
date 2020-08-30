//防抖
export function debounce(fn,delay,immediate) {
    let timer;
    return function () {
        console.log(timer)
        if(immediate&&!timer){
            fn.apply(this,arguments)
        }
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            if(!immediate)
                fn.apply(this,arguments)
            clearTimeout(timer)
            timer = null
        },delay)
    }
}
//节流
export function throttle(fn,wait) {
    let timer
    return function () {
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },wait)
    }
}