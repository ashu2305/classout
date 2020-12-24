import React from 'react';
class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }
    render() {
        return (
            <div className="row listing-container">
                {
                    this.props.searchResult.map((data, index) => {
                        let className = '';
                        if (this.props.selectedContents.indexOf(Number(data.id)) >= 0) {
                            className = 'col-md-3 selected-content'
                        }
                        else {
                            className = 'col-md-3'
                        }
                        return (
                            

                                <div className={className} key={'content-'+data.id} onClick={() => {
                                    this.props.selectContents(Number(data.id))
                                }}>
                                    <div className="list-overlay">
                                        <div className="selected-symbol">
                                            <span className="checkmark">
                                                <div className="checkmark_stem"></div>
                                                <div className="checkmark_kick"></div>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="course-item">
                                        <div className="image">
                                            <img src={data.details.courseImage && data.details.courseImage.path} alt={data.details.title} />
                                        </div>
                                        <h4>{data.details.title}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: data.details.description }}></p>
                                    </div>
                                </div>
                            
                        )
                    })
                }
            </div>
        );
    }
}

export default Listing;