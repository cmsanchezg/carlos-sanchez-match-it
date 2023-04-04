import './GamePage.scss';
import ImageCard from '../ImageCard/ImageCard';


function shuffleArray(images) {
    let i = images.length - 1;
    for(; i > 0; i--) {
        const j = Math.floor(Math.random() * (1 + 1));
        const temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
    return images;
  };

function GamePage({images}) {

      const shuffledImages = shuffleArray(images);

        return (    
            <section className='game'>

                <ul className='game__images game__none'>
                    {shuffledImages
                     .map((image) => (
                        <ImageCard key={image.id} image={image.image}/> 
                     ))
                     }   
                </ul>
            </section>
          );
}

export default GamePage;