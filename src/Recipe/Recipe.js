import { Link } from 'react-router-dom';
import * as React from 'react';
import "../App.css"
import './Recipe.css'

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: null,
      plantBased: null,
      upvotes: 101,
      recipe: [{id: 1,amount: 1, quantity: 'tsp', ingredient: 'active dry yeast'},
      {id: 2,amount: 1, quantity:'tsp', ingredient:'sugar'},
      {id: 3,amount: 1, quantity: 'cup', ingredient: 'warm water'},
      {id: 4,amount: 2, quantity: 'tbs', ingredient: 'olive oil'},
      {id: 5,amount: 4, quantity: 'cups', ingredient: 'flour'},
      {id: 6,amount: 8, quantity: 'ounces', ingredient: 'tomato sauce'},
      {id: 7,amount: 1, quantity: 'tbs', ingredient: 'garlic'},
      {id: 8,amount: 2, quantity: 'cups', ingredient: 'mozzarella cheese'},
      {id: 9,amount: 25, quantity: 'slices', ingredient: 'pepperoni'}
      ],
      directions: "Combine yeast, sugar, water, olive oil, and flour in mixer, mix until combined. Allow the dough to rest 1 hour wrapped in plastic wrap. Using a rolling pin, flatten dough to desired size and thickness. Mix tomato sauce and garlic, then spread on the dough. Sprinkle the cheese evenly on top, and place the pepperoni slices. Bake for 15 minutes at 450 degrees."
    };
  }

  // componentWillReceiveProps(nextProps) {

  // }

  expand() {
    if (this.state.isExpanded) {
      
      this.setState({isExpanded: false})
    } else {
      
      this.setState({isExpanded: true})
    }
    
  }

  render() {
    let status;
    if (this.state.isExpanded !== null) {
      status = this.state.isExpanded ? "open" : "close"
    }
    let recipe = this.state.recipe.map( (ingredient) => {
      return (
        <div key={ingredient.id}>
          {ingredient.amount} {ingredient.quantity} {ingredient.ingredient}
        </div>
      )
    })
    return (
      <a className="recipeCard">
        <div className="backgroundImage image" style={{ backgroundImage : 'url("thomas-tucker-391058-unsplash.jpg")'}}>
          <div className= {`recipeContent ${status}`}>
            <section className="recipeTitle">
              <h3 onClick={(e) => this.expand()}>Pepperoni Pizza</h3>
              <h4>UserName</h4>
            </section>
            <section className="recipeStats">
              {this.state.plantBased ? <div className="tooltip"><i className="fas fa-leaf plantBased" style="color: green;"></i></div>:null}
              <div><i className="fas fa-heart" ></i> {this.state.upvotes}</div>
            </section>
          </div>
        </div>

        <div className="recipeDetails" style={{display: this.state.isExpanded ? 'flex' : 'none'}}>
          <section className="recipeText">
            <div>{recipe}</div>
            <div>{this.state.directions}</div>
          </section>
          <img className="recipeImg image" src="thomas-tucker-391058-unsplash.jpg"/>
        </div>
      </a>
    )
  }
}

export default Recipe;