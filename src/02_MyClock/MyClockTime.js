import styles from './MyClockTime.module.css'
import { useState, useEffect } from 'react';

function MyClockTime() {
    const [ctime, setCtime] = useState(new Date());

    // useEffect 내부에 콜백함수{}와, Dependency Array[] 가 들어감
    // Dependency Array 내부에 아무 것도 쓰지 않으면, 맨 처음 한 번 실행 됨
    // useEffect(()=>{}, []);
    useEffect(()=>{
        const tm = setInterval(()=>{
            setCtime(new Date());
        }, 1000); // 1000ms (1s) 1초에 한 번씩 setInterval()의 콜백함수 호출

        return () => {
            clearInterval(tm); // 컴포넌트 사라질 때, clearInterval() 수행되면서, setInterval() 종료됨
        }
    }, []);

    return(
        // 모듈 CSS
        <div className={styles.c3}> 
            현재 시각 : {ctime.toLocaleTimeString() }
        </div>
    );
}

export default MyClockTime;