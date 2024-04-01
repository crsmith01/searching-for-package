import { useState } from 'react'
// import { useDispatch } from 'react-redux' // hook that gives us access to the dispatch function directly inside of a component
// import { actionCreators } from '../state'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    // const dispatch = useDispatch()
    const {searchRepositories} = useActions()

    // this useSelector hook is used to get access to the state inside of the component. 
    // whatever we get back from this function is going to be the state object that we have inside of our redux store
    // similar to mapStateToProps function
    const { data, error, loading } = useTypedSelector((state) => state.repositories)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // // call action creator with plain JS
        // dispatch(actionCreators.searchRepositories(term) as any)
        searchRepositories(term)
    }

    return <div>
        {/* When form is submitted, call callback function that we defined above. */}
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {/* if error is null, we won't show an h3. if there is an error, we show it */}
        {error && <h3>{error}</h3>} 
        {/* if loading is true, we show a loading message */}
        {loading && <h3>Loading...</h3>}
        {/* if data is not null, we map over the data and display it */}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesList
