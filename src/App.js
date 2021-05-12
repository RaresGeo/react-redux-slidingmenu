import Slideshow from './components/Slideshow'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from './actions'
import Github from './components/Github'
import Skills from './components/Skills'


const App = () => {

  const skills = useSelector(state => state.skills.skills)
  const dispatch = useDispatch()

  const fetchAPIData = async () => {
    const url = 'https://raresgeo-restfulapi.herokuapp.com'

    // Fetch repos
    let response = await fetch(url + '/github/repos')
    let data = await response.json()
    dispatch(actions.githubActions.getRepos(data))

    // Fetch user
    response = await fetch(url + '/github/user')
    data = await response.json()
    dispatch(actions.githubActions.getUser(data))

    // Fetch skills
    let keys = Object.keys(skills)
    let newSkills = {}
    for(let i = 0; i < keys.length - 1; i ++) {
      response = await fetch(`${url}/skills/${keys[i]}`)
      data = await response.json()
      newSkills = {
        ...newSkills,
        [keys[i]] : data,
      }
    }
    dispatch(actions.skillsActions.getSkills(newSkills))

  }

  useEffect(() => { 
    fetchAPIData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let matrix = [['', Github(), ''], [Github(), Skills(), Github()], ['', Github(), '']]

  return (
      <Slideshow matrix={matrix}/>
  );
}

export default App;
