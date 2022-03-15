import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

// [id].js 일 때
// import { useRouter } from 'next/router';

// export default function Detail() {
//   const router = useRouter();
//   console.log(router.query);
//   return (
//     <div>
//       <h4>{router.query.title || 'Loading'}</h4>
//       {/* title only show when user access from Home */}
//     </div>
//   );
// //
