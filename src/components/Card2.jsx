import React from 'react'
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import pic5 from '../assets/5.png'
import pic6 from '../assets/6.png'
function Card2() {
    const cardData = [
        {image: pic1,title:'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image: pic2,title:'Sea Freight', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        {image: pic3,title:'Land Freight', content:'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
        {image: pic4, title:'Warehousing', content:'Package and store your things effectively and securely to make sure them in ...'},
        { image: pic5, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design ...' },
        { image: pic6, title: 'Packaging & Storage', content: 'Package and store your things effectively and securely to make sure them ...' },
    ]
  return (
    <>
     <div className="row">
     {cardData.map((card, index) => (
            <div className="col-md-4 mb-5" data-aos="fade-up">
            <div className="card">
              <img src={card.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.content} <a href="" className='text-danger text-decoration-none'>Read more</a> </p>
                
              </div>
            </div>
          </div> 
        ))}
              

</div>
        
    </>
  )
}

export default Card2