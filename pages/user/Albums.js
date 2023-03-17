import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AlbumList from '../components/AlbumList';

export default function Albums() {
  const router = useRouter();
  const data = router.query;
  const [albumList, setAlbumList] = useState([])

  async function albumListFn() {
    const fetchAlbumData= await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${data.id}`) 
    const albumData= await fetchAlbumData.json()
    setAlbumList(albumData)
  }

  useEffect(() => {
    albumListFn();
  
    });
  return (
    <div>
        <h5>Albums</h5>
        <ul>
           <AlbumList albumList={albumList}/>
        </ul>
    </div>
  )
}
