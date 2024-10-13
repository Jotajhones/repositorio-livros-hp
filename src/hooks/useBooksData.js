import { useQuery } from "react-query";
import axios from "axios";

const fetchDataBooks = async () => {
    const response = await axios.get('https://potterapi-fedeperin.vercel.app/pt/books');
    return response;
}


export function useBookData() {
    const query = useQuery({
        queryFn: fetchDataBooks,
        queryKey: ['book-data']
    })
    return {
        ...query,
        data: query.data?.data,
    };
}