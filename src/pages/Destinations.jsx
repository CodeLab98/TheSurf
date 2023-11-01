import React, {useState} from 'react';
import './Destinations.css';
// import Card from '../components/Card';
import { Destination } from '../Data';

function Destinations() {


 const [modal, showModal] = useState([]);
 const [toggleModal, setToggleModal] = useState(false);
 const changeContent = (destination) => {
  showModal([destination]);
  setToggleModal(!toggleModal);
 }

  return (
    <>
    <div id="destinations">
    <div className="wave">
    </div>

    <div className='destinations-container'>
        <h1>Destinations</h1>
        <div className='cards-container-box'>
          {Destination.map((destination) => {
            return(
              <div key={destination.id} className="card">

                <img className='card-img' src={destination.image} alt="img" />
                <h1>{destination.title}</h1>
                <h4>{destination.description}</h4>
                <h2>{destination.price}</h2>
                <button onClick={()=> changeContent(destination)}>Read More</button>

              </div>
            )
          })}
          
        </div>


        {toggleModal && (<div className="modal" onClick={changeContent}>

          <div className="modal-container" onClick={(e) => {
            e.stopPropagation()
          }}>
           

            <div className="modal-content">
            {modal.map((pop) => {
              return (
                <div key={pop.id} className="modal-card">
                  <div className="modal-wrapper">
                  <h1>{pop.title}</h1>
                  <div className="modal-title">
                    <button onClick={changeContent}>X</button>
                  </div>
                  
                  </div>
                 
                  <img className='card-img' src={pop.image} alt="img" />
                  <p>{pop.extraDescription}</p>
                  <button className='book-now-btn'>Book Now</button>
                </div>
              )
            })}

          </div>

          </div>
         

         
        </div>)}
        
        </div>

    </div>



    </>
  )
}

export default Destinations
