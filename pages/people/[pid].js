import Profile from '../../components/Profile/Profile'
import testI from '../../public/people.png'
import styles from '../../styles/[pid].module.scss'
import Header from '../../components/Header/Header'
import Head from 'next/head'

export default function Film({ person }) {
  // window undefined
  // get id from input and show the person
  // const id = person.id
  // const person = people.find(person => person.id === id)
  // console.log(person)

  return (
    <div className={styles.person}>
      <Head>
        <title>Star Wars Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {person.name}
      <br />
      <Profile name={person.result.properties.name} alt={person.result.properties.name} src={testI}>
          <div>          
            <ul>
              <li>ID:</li>
              {/* all person data */}
              <li>Birth Year: <span>{person.result.properties.birth_year}</span></li>
              <li>Eye Color: <span>{person.result.properties.eye_color}</span></li>
              <li>
                  Home World:
                  <br/>
                  {/* if person has no homeworld, display "unknown" */}
                  <span>{person.result.properties.homeworld ? person.result.properties.homeworld : 'unknown'}</span>
              </li>
              <li>Height: <span>{person.result.properties.height}</span></li>
              <li>Mass: <span>{person.result.properties.mass}</span></li>
              <li>  {/* if person has no species, display "unknown" */}
                  Species: <span>{person.result.properties.species ? person.result.properties.species : 'unknown'}</span>
              </li>
              <li>
                  {/* if person has no starships, display "unknown" */}
                  Starships: <span>{person.result.properties.starships ? person.result.properties.starships : 'unknown'}</span>
              </li>
              <li>
                  {/* if person has no vehicles, display "unknown" */}
                  Vehicle: <span>{person.result.properties.vehicles ? person.result.propertiesvehicles : 'unknown'}</span>
              </li>
            </ul>
          </div>
      </Profile>
    </div>
  )
}

export async function getStaticPaths() {

    let objects = { paths: [], fallback: false }
    // many fid's to inside params key fid from 1-82
    let i = 1
    while (i < 83) {
        objects.paths.push({ params: { pid: i.toString()} })
        i++
    }

    return objects
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://www.swapi.tech/api/people/${context.params.pid}`
  );
  const person = await res.json();
  return {
    props: {
      person: person.result.properties,
    },
  };
}

