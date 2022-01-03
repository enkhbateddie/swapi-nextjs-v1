import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState, useEffect, Fragment } from 'react'
import Header from '../components/Header/Header'
import FilmList from '../components/FilmList/FilmList'

export default function Home({films}) {
  // list of films to display in card and imageconnect
  const [filterText, setFilterText] = useState('')

  const fullData = [...films.map((film) => (
      [film.uid, film.properties.title.toUpperCase()]
    ))
  ]

  return (
    <div className="container">
      <Head>
        <title>Star Wars Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <div className={styles.searchBar}>
        <input onChange={event => setFilterText(event.target.value.toLocaleUpperCase())} placeholder='Search...'/>
      </div>
      <FilmList fullData={fullData} filterText={filterText} />
      
      <br />
    </div>
  )
}

export async function getStaticProps({context}) {
  
  const films = await fetch('https://www.swapi.tech/api/films/')
  .then(res => res.json())
  return {
      props: {
          films: films.result,
      }
  }
}

