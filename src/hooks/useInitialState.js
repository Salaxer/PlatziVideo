import {useState, useEffect} from 'react';

const useInitialState = (API,setLoading) =>{
    const [videos, setVideos] = useState({
        mylist: [], trends: [], originals: []
    });
    useEffect( () => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
        setTimeout(()=> setLoading(false)
        ,1000)
    },[]);
    return videos;
}
export default useInitialState;