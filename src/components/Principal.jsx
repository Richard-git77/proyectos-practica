import {useState} from 'react';
import { data } from '../data/gamelist';

export const Principal = () => {


const [game, setgame] = useState('');
const [gamelistfilter, setgamelistfilter] = useState([]);





    
  const alfabetica= data.sort((a,b) =>{
    if (a.title < b.title) {
      return -1;
    }else if(a.title > b.title){

      return 1;
    }else{
      return 0;
    }

  });
  



    const onChange= (e)=>{
        const value= e.target.value;
        setgame(value);
        console.log(game);

       
    
    }
    const onClick =(e)=>{
        e.preventDefault();

        filter(game);
    }

    const filter = (game) =>{
       const alfabetica2 = alfabetica.filter((elemento)=>{
            if(elemento.title.toString().toLowerCase().includes(game.toLowerCase())){
                return  elemento;
            }
           
           
        })
        // console.log(alfabetica2);
         setgamelistfilter(alfabetica2)
             console.log(gamelistfilter)
    }
       
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        }









    document.title = 'game seeker'
    return (
        
        

<>

<h1 className='text-white'>Principal</h1>
          
        
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search By name' onChange={onChange} />
        <button className='btn btn-info btn-hover-bg-shade-amount:       15%' onClick={onClick}>Search</button>
    </form>
    
    
       {gamelistfilter.map(game =>(


          
          
<div  key={game.id}>
  <div className="col">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
<img className='img-fluid card-img' src={game.thumbnail} />
</div>
<div className="col-8">
  <div className="card-body bg-dark"> 
<h2 className="card-title text-white" >{game.title}</h2>
<p className="card-text text-white">{game.genre}</p>
<p className="card-text text-white">{game.platform}</p>
<p className="card-text text-white">{game.release_date}</p>
<p className="card-text text-white">{game.short_description}</p>
<a className="card-text text-white" href={game.freetogame_profile_url}>Go to Game</a>



</div>
</div>
</div>
</div>
</div>
</div>


))

}
         
        
         


        </>
        )
}
