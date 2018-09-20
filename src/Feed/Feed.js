import React from 'react';
import Recipe from '../Recipe/Recipe';
import './Feed.css'

class Feed extends React.Component {

  render() {
    return (
      <main>
        <div className="recipeContainer">
          <Recipe/>
        </div>
        <div className="recipeContainer">
          <Recipe/>
        </div>
        <div className="recipeContainer">
          <Recipe/>
        </div>
        <div className="recipeContainer">
          <Recipe/>
        </div>
      </main>
    )
  }
}

export default Feed;