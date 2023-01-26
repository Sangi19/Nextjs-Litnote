import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import UserList from './components/UserList'
import Link from 'next/link';

export default function Home() {
  const [usersList, setUsersList] = useState([])

  async function UserListFn() {
    const fetchUserData= await fetch("https://jsonplaceholder.typicode.com/users") 
    const userData= await fetchUserData.json()
    setUsersList(userData)
  }
  // UserListFn();

  useEffect(() => {
    UserListFn();
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h3>LitNote-Next App</h3>
          <div className='UserListComponent'>
            <UserList usersList={usersList} />
          </div>

        {/* <div className={styles.grid}>
         <div className={styles.card}>
         </div> 
        </div> */}
      </main>
    </>
  )
}
