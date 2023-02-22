import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AlbumPhoto from './AlbumPhoto';

export default function Album() {
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
           <AlbumPhoto albumList={albumList}/>
        </ul>
    </div>
  )
}
