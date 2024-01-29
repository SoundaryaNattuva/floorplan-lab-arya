import Bedroom from './Bedroom'
import Kitchen from './Kitchen';
import Bath from './Bath';

const FloorPlan = (props) => {
  return ( 
    <div>
      <h1>Floor Plan</h1>
      <Bedroom bedRoomNum={1}/>
      <Kitchen />
      <Bath />
      <Bedroom bedRoomNum={2}/>
      <Bath />
      <Bedroom bedRoomNum={3}/>
    </div>
   );
}
 
export default FloorPlan;