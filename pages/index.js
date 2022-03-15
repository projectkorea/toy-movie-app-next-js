import Link from 'next/link';
import { useEffect, useState } from 'react';

export async function getServerSideProps() {
  // name should not be changed
  // not showing client side
  // 이 api 호출이 끝나기 전까지는, 네비게이션 바와 같은 것들은 랜더링 되지 않는다.
  // {...pageProps}에 들어가서 Home에서 prop처럼 사용 할 수 있는 것이다.
  const response = await fetch('http://localhost:3000//api/movies');
  const data = await response.json();
  const { results } = data;
  return {
    props: {
      results,
    },
  };
}

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(data);
  //     setMovies(data.results);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className='container'>
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <Link
          href={`/movies/${movie.original_title}/${movie.id}`}
          // href={{
          //   pathname: `/movies/${movie.id}`,
          //   query: {
          //     title: movie.original_title,
          //   },
          // }}
          // as={`/movies/${movie.id}`}
          key={movie.id}
        >
          <a className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </a>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
