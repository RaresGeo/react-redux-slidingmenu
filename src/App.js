import Slideshow from './components/Slideshow'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from './actions'

import Github from './components/Github'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'

import './styles/styles.css';


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

  let matrix = [[Github({position:[0,0]}), Home({position:[0,1]}), Skills({position:[0,2]})], ['', Contact({position:[1,1]}), '']]

  return (
      <Slideshow matrix={matrix}/>
  );
}

export default App;
