import React, { Component } from 'react';
import Search from './search';
import Listing from './listing';
import {Wrapper} from './style';

export default class ListingContent extends Component{
    constructor(props){
        super (props);
        this.state={
            searchResult:[],
            courseList:props.contentList,
            searchText:'', 
            selectedContents:JSON.parse(JSON.stringify(props.selectedContents))           
        }
        this.selectedContents=JSON.parse(JSON.stringify(props.selectedContents))
    }
    componentDidMount(){
      this.filterListingData({target:{value:''}})        
    }
    selectContents=(id)=>{
      if(this.selectedContents.indexOf(id)<0){
        this.selectedContents.push(id) 
      }
      else{
        let index = this.selectedContents.indexOf(id);
        this.selectedContents.splice(index,1);
      } 
      this.setState({
        selectedContents:this.selectedContents
      })     
         
    }
    closePopup = ()=>{ 
      this.props.hideContentList()     
      
    }
    addOnRail=()=>{
      this.props.addContents(this.selectedContents);
    }
    filterListingData = (e) => {
        let searchText = e.target.value;
        const results = this.state.courseList && this.state.courseList.filter(
            (list) => list.details.title.toLowerCase().includes(searchText.toLowerCase())
             && list.active            
            );
        this.setState({
            searchResult:results
        })
    }
    render(){
        return (
            <Wrapper>
             <div className="content-listing-overlay"></div> 
            <div className="content-listing">
              <div style={{cursor:'pointer'}} className="close-button" onClick={this.closePopup}>x</div>
            <div className="listing-container">
                <Search   
                totalSelected={this.state.selectedContents.length}
                addOnRail={this.addOnRail}              
                itemCount={this.state.searchResult.length} 
                filterListingData={this.filterListingData} />
                <Listing 
                selectedContents={this.selectedContents}
                selectContents={this.selectContents} 
                searchResult={this.state.searchResult} /> 
            </div>
            </div>
            </Wrapper>
        )
    }
}
