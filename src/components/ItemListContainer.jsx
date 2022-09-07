import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div>{greeting}</div>
            <div><ItemCount /></div>
        </>
    );
}
export default ItemListContainer;