/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import { useState } from "react";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

export default function Home() {
  const [query, setQuery] = useState("");
  const handleParam = (setValue) => (e) => setValue(e.target.value);
  const handleSubmit = preventDefault(() => {
    window.location = query;
  });

  return (
    <div className="container">
      <Head>
        <title>Rastreio.io</title>
        <meta name="Description" CONTENT="Rastreio de encomenda" />
      </Head>

      <main>
        <div className="home">
          <img className="logo" src="/logo-280.png" alt="Logo Rastreio" />
          <h1 className="title">
            Rastreio<span>.io</span>
          </h1>
          <h2>Busque sua encomenda</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="q"
              value={query}
              onChange={handleParam(setQuery)}
              placeholder="Rastreie sua encomenda"
              aria-label="Rastreie sua encomenda"
            />
          </div>
          <button>Rastrear</button>
        </form>
      </main>

      <footer></footer>

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
          padding: 1rem 0;
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
        button {
          width:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #4caf50; /* Green */
          border: none;
          color: white;
          padding: 1em 4em;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 28px;
          margin: 1em 0;
        }
        .field {
          width: 100%;
          height: 56px;
          border-radius: 4px;
          position: relative;
          background-color: rgba(255, 255, 255, 0.8);
          transition: 0.3s all;
        }
        .field:hover {
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
        }

        .field.focussed input {
          padding: 24px 16px 8px 16px;
        }
        .field.focussed input + label {
          top: 4px;
          opacity: 1;
          color: #28cc70;
        }
        .field.locked {
          pointer-events: none;
        }
        .field input {
          width: 100%;
          height: 56px;
          position: relative;
          padding: 0px 16px;
          border: none;
          border-radius: 4px;
          font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          background-color: rgba(76, 175, 80, 0.8);
          color: #282828;
          outline: none;
          box-shadow: 0px 4px 20px 0px transparent;
          transition: 0.3s background-color ease-in-out,
            0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
          -webkit-appearance: none;
        }
        .field input::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        .field input::-moz-placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        .field input:-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        .field input:-moz-placeholder {
          color: rgba(255, 255, 255, 0.8);
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
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
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
          height: 300px;
          padding:auto;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .logo {
            height: 200px;
            
          }
        }
        .home{
          display: flex;
          align-items: center;
          justify-content: center;
          display:flex;
          flex-direction: column;
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
  );
}
