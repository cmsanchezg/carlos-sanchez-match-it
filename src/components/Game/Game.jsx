import './Game.scss';
import ImageCard from '../ImageCard/ImageCard';
import Scoreboard from '../Scoreboard/Scoreboard';
import { useEffect, useRef, useState} from 'react';

  function GamePage({images}) { 


      const [score, setScore] = useState(0);
      
      const handleImageClick = (image) => {
        if(image === image) {
          setScore((score) => score + 1); 
        } else {
          setScore((score) => score + 0);
        }
      };
 
        return (      
            <section className='game'>

                <Scoreboard score={score} />

                <ul className='game__images game__none'>
                    {images
                     .map((image) => (
                        <ImageCard key={image.id} image={image.image} handleImageClick={handleImageClick} /> 
                     ))
                     }   
                </ul>
            </section>
          );
}

export default GamePage;