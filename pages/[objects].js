import Head from 'next/head';
import Axios from 'axios';
import {useQuery} from 'react-query';
import {useState} from 'react';
import {useRouter} from 'next/router';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}
const getObject = async () =>{
  var object = window.location.pathname;
  var url = "https://api-rastrei-correios.herokuapp.com/"+object;
  const {data} = await Axios.get(url);
  return data;
}

export default function Objects() {
  const {data} = useQuery("objects",getObject);
  const router = useRouter()
   const [query, setQuery] = useState('')

   const handleParam = setValue => e => setValue(e.target.value)


  const handleSubmit = preventDefault((e) => {
      console.log(query);
    window.location = query;
  })

  return (
    <div className="container">
      <Head>
        <title>Rastreio.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Busque sua encomenda
        </h1>
        
        <form onSubmit={handleSubmit}>
       <input
         type='text'
         name='q'
         value={query}
         onChange={handleParam(setQuery)}
         placeholder='Search'
         aria-label='Search'
       />
     </form>
        <div className="grid">
          {data && (<a className="card">
            <h3>{data.objeto.numero ?data.objeto.numero:""} &rarr;</h3>
            <p>{data.objeto.erro ?data.objeto.erro:"" }</p>
          </a>)}
        </div>
      </main>

      <footer>
  
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )

}
