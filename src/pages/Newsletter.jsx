import React, {useState }from 'react';
// import Email from '../components/Email';
import Modal from '../components/Modal';
import "./Newsletter.css"

function Newsletter(props) {

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleCloseBtn = () => {
     setOpenModal(!openModal)
  }
  return (
   <>

   
  <div id="newsletter">
      <div id="newsletter-container">

          <div id="newsletter-content">
            <h1>Become part of The Surf</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni illum quae ex iste dolorem, commodi sit voluptas vitae ad.</p>
            <button onClick={handleModal} className='newsletter-content-join-btn' >Join Surf Club
           
            </button>
            <Modal
             src='./public/images/img-australia.jpg'
             title={props.title}
             description={props.description}
             open={openModal} 
             onClose={handleCloseBtn}
             />
          </div>

      </div>
    </div>

   </>
  )
}

export default Newsletter