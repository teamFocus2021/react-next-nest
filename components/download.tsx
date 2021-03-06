import axios from 'axios';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';


// component 가 mount 될 때 download : 0 으로 초기화
const Download: FC = () => {
    const [download, setDownload] = useState(0);
    const mounted = useRef(false);
    const onDownload = () => {
        if(!download){
            setDownload(download + 1);
        } 
    }
    // 컴포넌트가 업데이트될 때만 호출
    // 처음 mount 될 때는 if문에 걸리면서 아무것도 안하고 download 버튼을 눌러서 state 값이 바뀔 때만 실행
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
        } else{
            axios.get('http://localhost:3000/download').then((response) => {
                console.log(response);
                console.log("double check");
            });
        }
    }, [download]);

    return (
        <Link href="/views/result" as="/result">
        <button className="download_button" onClick={onDownload}>download</button>
        </Link>
    )
}

export default Download;