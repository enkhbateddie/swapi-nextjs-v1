import ImageConnect from '../../components/ImageConnect/ImageConnect'
import styles from '../../styles/[fid].module.scss'
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'
import Head from 'next/head'



export default function Film({ film }) {
  
  function getData(obj) {
    let keys = Object.keys(film)
    let filmValues = []
    // get all values from film object
    for (let i = 0; i < keys.length; i++) {
      filmValues.push(film[keys[i]])
    }
  
    // keys and filmValues one by one <li> key : value.length </li>
    let filmList = []
    for (let i = 0; i < keys.length; i++) {
      if(i < 5) {
        filmList.push(<li key={i}>{keys[i].toUpperCase()}: {filmValues[i].length}</li>)
      } else {
        filmList.push(<li key={i}>{keys[i].toUpperCase()}: {filmValues[i]}</li>)
      }
      filmList.push(<br/>)
    }
    return filmList
  }

  return (
    <div className={styles.film}>
      {/* back to home link */}
      <Head>
        <title>Star Wars Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <ImageConnect 
        src={film.title.toUpperCase()}
        alt={film.title} 
        className={styles.filmImg}
      />
      <div>
        <ul>
          {getData(film)}
          {/* {getRestData(restData)} */}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { fid: '1' } },
      { params: { fid: '2' } },
      { params: { fid: '3' } },
      { params: { fid: '4' } },
      { params: { fid: '5' } },
      { params: { fid: '6' } }
    ],
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const fid = context.params.fid
  const res = await fetch(
    `https://www.swapi.tech/api/films/${context.params.fid}`
  );
  const film = await res.json();
  return {
    props: {
      film: film.result.properties,
    },
  };
}
