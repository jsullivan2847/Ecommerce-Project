import logo from './logo.svg';
import './App.css';
import './categories.styles.scss'

function App() {

  //the commit..
  //the commit baby....

  const categories = [
   { 
    title: "Hats",
    id: 1,
  },
   { 
    title: "Shirts",
    id: 1,
  },
   { 
    title: "Pants",
    id: 1,
  },
   { 
    title: "Jewelry",
    id: 1,
  },
  ]


  return (
    <div>
      <div className='categories-container'>
        {categories.map(({title}) => {
          return (
             <div className='category-container'>
             <div className='category-body-container'>
             <h1>{title}</h1>
             <p>Shop Now</p>
           </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
