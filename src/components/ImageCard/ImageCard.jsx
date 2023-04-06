import './ImageCard.scss';

function ImageCard({image, description, handleImageClick}) {

    return (
        <li onClick={() => handleImageClick(image)} className='image__card'>
        <img className='image__card__image' src={image} alt={description}/>
        </li>
    );
}

export default ImageCard;