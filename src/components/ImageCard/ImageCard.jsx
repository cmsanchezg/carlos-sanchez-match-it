import './ImageCard.scss';

function ImageCard({image, description}) {

    return (
        <li className='image__card'>
        <img className='image__card__image' src={image} alt={description} />
        </li>
    );
}

export default ImageCard;