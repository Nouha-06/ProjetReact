import CareScale from "./CareScale";
import '../styles/PlantItem.css'
function PlantItem({name,cover,id,water,light}){
return (
   <div className='lmj-plant-item'>
         <li key={id} onClick={handleClick}>
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />		
		    {name}
            <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
            </div>
         </li>        
   </div>
);
}
function handleClick(e) {
    console.log('✨ Ceci est un clic ✨',e)
}
export default PlantItem;