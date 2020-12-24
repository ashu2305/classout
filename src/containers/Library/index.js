import React, { Component } from 'react';
import { Wrapper } from './style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getResources
} from './APIs/action';
class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            resources: []
        }

    }
    componentDidMount() {
        this.props.getResources((data) => {
            this.setState({
                resources: data
            })
        })
    }
    handleSearchChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    renderResources = () => {
        let filteredList = this.state.resources.filter((list) => list.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        return filteredList.map((elem, index) => {
            return (
                <tr key={'video-' + elem.id}>
                    <td>{elem.name}</td>
                    <td>Video</td>
                    <td>24/Jan/2020</td>
                    {/* <td><span>Add</span></td> */}
                </tr>
            )
        })
    }
    render() {
        return (
            <Wrapper>
                <div className="content-block">

                    <div className="video-library">
                        <div className="d-flex justify-content-between">
                            <span>Library</span>
                            <input type="text" value={this.state.searchText}
                                onChange={this.handleSearchChange}
                                className="search-content" />
                        </div>
                        <div className="table-library">
                            <table>
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>File Type</th>
                                        <th>Date Uploaded</th>
                                        {/* <th style={{ minWidth: '100px' }}>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderResources()}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </Wrapper>

        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            getResources
        }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

