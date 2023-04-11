import '../Styles/Wrapper.css';

const Wrapper = ({children}) => {
   // console.log({children});
    return(
       <div className="wrapper">{children}</div>
    );

};



export default Wrapper;