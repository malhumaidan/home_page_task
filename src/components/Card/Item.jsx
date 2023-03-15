
const CardItem = (probs) => {
    return (
        <div className='card'>
            <img src={probs.product.image} alt='' />
            <p>{probs.product.name}</p>
            <p>{probs.product.price}</p>
        </div>
    );
}



export default CardItem