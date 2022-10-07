import { data } from "../data/gamelist"

export const SortByCategory = () => {

  const alfabeticaCategory= data.sort((a,b) =>{
    if (a.genre < b.genre ) {
      return -1;
    }else if(a.genre > b.genre){

      return 1;
    }else{
      return 0;
    }
   

  });
  
  document.title = 'game seeker'
  return (
    <>
  <h1 className="text-white">SortByCategory</h1>

      
      
      
      {alfabeticaCategory.map(game =>(


          
          
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
