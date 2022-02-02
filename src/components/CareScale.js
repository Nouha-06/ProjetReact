function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={()=>LightWater(scaleValue, careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
function LightWater(scaleValue, careType){
    if(careType === 'light'){ 
      switch(scaleValue ) {
        case 1:
            alert('Cette plante a besoin de peu de lumière');
            break;
          case 2:
            alert('Cette plante a besoin de modérement de lumière');
            break;
        default:
            alert('Cette plante a besoin de beaucoup de lumière');
            break;
      }
    }else{
        switch(scaleValue) {
            case 1:
                alert("Cette plante a besoin de peu d'arrosage");
                break;
              case 2:
                alert("Cette plante a besoin de modérement d'arrosage");
                break
            default:
                alert("Cette plante a besoin de beaucoup d'arrosage");
                break;
          }
    }
}    
export default CareScale