import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css"
function ShoppingList({cart,updateCart}){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<div key={plant.id}>
					<PlantItem name={plant.name} cover={plant.cover} id={plant.id} water={plant.light} light={plant.water} price={plant.price}/>
					<button onClick={() => updateCart(Number(cart) + 1)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}
export default ShoppingList;