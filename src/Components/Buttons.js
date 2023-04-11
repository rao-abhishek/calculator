import '../Styles/buttons.css';

const Buttons = ({className, value, onClick}) => {


return(
   <button className= {"buttons " + className} onClick={onClick}>{value} 
   </button>
);
}

export default Buttons;