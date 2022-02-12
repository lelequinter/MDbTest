import { useEffect, useState } from "react"
import { getElemets } from '../helpers/getElemets';

export const useFetchElement = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getElemets( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            } );
    }, [ category ])

    return state;
}