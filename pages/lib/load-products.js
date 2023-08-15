import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export async function loadProducts(){
      const { data, error } = useSWR('/api/staticdata', fetcher);
      if (error) return <div>Failed to load</div>;
      if (!data) return <div>Loading...</div>;
      const dataParsed = JSON.parse(data)
      return dataParsed 
}
  