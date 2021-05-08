import Slideshow from './components/Slideshow'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import actions from './actions'
import Github from './components/Github'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => { 
      
      // Fetch repos
      const url = 'https://raresgeo-repos.herokuapp.com'
      fetch(url + '/repos')
      .then(response => response.json())
      .then(data => {
          dispatch(actions.githubActions.getRepos(data))
      });

      // Fetch user
      fetch(url + '/user')
      .then(response => response.json())
      .then(data => {
      dispatch(actions.githubActions.getUser(data))
      });


      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let matrix = [['', Github(), ''], [Github(), Github(), Github()], ['', Github(), '']]

  return (
    <>
      <Slideshow matrix={matrix}/>
    </>
  );
}

export default App;
