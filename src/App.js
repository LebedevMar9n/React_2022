import './App.css'
import Actor from "./components/Actor.js";
import Users from "./components/Users.js";

const actors = [
  {id: 1, name: 'Tom', img: 'https://www.tomandjerrychaseasia.com/m/zt/20200522142810/img/characters/pic/tom_be2af94.png'},
  {id: 2, name: 'Jerry', img: 'https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG3.png'},
  {id: 3, name: 'Legs', img: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0d/Mammytwoshoes-1-.jpg'},
  {id: 4, name: 'Spike', img: 'https://static.wikia.nocookie.net/thetomjerry/images/c/cb/Spike.gif'},
]
function App(){
  return(
      <div>
       {/* {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img} />)} */}
       <Users/>
      </div> 
  );
}

export default App; 