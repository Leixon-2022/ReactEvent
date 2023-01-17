
import './ShowAlertComponent.css'; 

const ShowAlertComponent = () => {


  const showAlert = () => {
    alert("I'm an alert");
  }

  return <button onClick={showAlert}>Show alert</button>;
}
export default ShowAlertComponent;