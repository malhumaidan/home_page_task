import CardItem from "./Item";

const CardList = ({ products = [] }) => {
    return (
        products.map((product, index) => <CardItem product={product} key={index}/>)
    );
}



export default CardList