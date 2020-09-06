import React, {useEffect,useLayoutEffect} from 'react';
import styled from "styled-components";

const Style = styled('div')`

`

export default function Login(props) {
    useEffect(()=>{
        // props.history.replace('/main')
      return  ()=>{
            console.log(props)
      }
    },[])
    return (
        <Style>
            登陆页面
            <div onClick={()=>props.history.push('/register')}>跳转</div>
        </Style>
    );
}

