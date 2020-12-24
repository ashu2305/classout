import React from 'react';

const Listing = ({ gotoEdit,searchResult}) => {
    return (
        <div className="row listing-container">
            {
                searchResult.map((data, index) => (    
                    <div className="col-md-3" key={index} onClick={()=>{
                        gotoEdit(data.id,data.businessType)

                    }}>
                        <div className="course-item">
                            <div className="image">
                                <img src={data.details.courseImage && data.details.courseImage.path} alt={data.details.title} />
                            </div>
                            <h4>{data.details.title}</h4>
                            <p dangerouslySetInnerHTML={{__html: data.details.description}}></p>
                        </div>
                    </div>   
                ))
            }
        </div>
    );
}

export default Listing;