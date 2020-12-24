import React, { Component } from 'react';
import Search from './search';
import Listing from './listing';
import {Wrapper} from './style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContentList } from '../APIs/action';
class ListingContent extends Component{
    constructor(props){
        super (props);
        this.state={
            searchResult:[],
            courseList:[],
            searchText:'',
            filterValue: 'all'
        }
    }
    componentDidMount(){
        this.props.getContentList((result)=>{
            this.setState({
                courseList:result.data
            },()=>{
              this.filterListingData({target:{value:''}})
            })
        })
    }
    filterListingData = (e) => {
        let searchText = e.target.value;
        let results = this.state.courseList && this.state.courseList.filter(
            (list) => list.details.title.toLowerCase().includes(searchText.toLowerCase())
             && list.active            
            );
        let re= results;
        if(this.state.filterValue !== "all")
            re = results && results.filter(
            (list) => list.businessType === this.state.filterValue
            );
        this.setState({
            searchResult: re,
            searchText : e.target.value
        })
    }
    filtertypeData = (e) =>{
        let result = this.state.courseList;        
        if(e && e.value !== "all"){
            result = this.state.courseList && this.state.courseList.filter(
            (list) => list.businessType === e.value
            );
        }
        let results = result && result.filter(
            (list) => list.details.title.toLowerCase().includes(this.state.searchText.toLowerCase())
                && list.active            
            );
        this.setState({
            searchResult:results,
            filterValue: (e)?e.value:"all"
        })  
    }
    render(){
        return (
            <Wrapper>
            <div className="listing-container">
                <Search 
                changeScreen={this.props.changeScreen} 
                itemCount={this.state.searchResult.length} 
                filterListingData={this.filterListingData}
                filtertypeData = {this.filtertypeData} />
                <Listing 
                gotoEdit={this.props.gotoEdit} 
                searchResult={this.state.searchResult} /> 
            </div>
            </Wrapper>
        )
    }
}
function mapStateToProps(state) {
    return {
      
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators({
        getContentList
      }, dispatch),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ListingContent);