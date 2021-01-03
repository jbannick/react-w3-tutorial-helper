import React from 'react';
import ReactDOM from 'react-dom';
import styles01 from './mystyle01.module.css';
import styles02 from './mystyle02.module.css';

class Vehicles extends React.Component {
   render() {
      return (
         <div>
            <h1 className={styles01.myblue}>Hello Car!</h1>
            <h1 className={styles02.myblue}>Hello Bus!</h1>
         </div>
      );
   }
}
export default Vehicles;