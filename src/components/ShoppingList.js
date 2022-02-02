import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
function ShoppingList(){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<PlantItem name={plant.name} cover={plant.cover} id={plant.id} water={plant.light} light={plant.water}/>
				))}
			</ul>
		</div>
	)
}
export default ShoppingList;