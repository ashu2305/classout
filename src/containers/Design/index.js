import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss';
import CreatePortal from './CreatePortal';
import {
	getPortals
} from '../Content/APIs/action';
class Design extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			portals: [],
			showList: true,
			selectedPortalId: ''
		};
	}
	createPortal = (id) => {
		this.setState({
			selectedPortalId: id,
			showList: false
		})
		document.getElementsByTagName('body')[0].classList.add('no-scroll')	
	}
	showPortalList = () => {
		this.props.getPortals((data) => {
			this.setState({
				portals: data.data,
				selectedPortalId: '',
				showList: true
			},()=>{
				document.getElementsByTagName('body')[0].classList.remove('no-scroll')	
			})
		})
			
	}
	componentDidMount() {
		this.props.getPortals((data) => {
			this.setState({
				portals: data.data
			})
		})
	}

	render() {
		if (this.state.showList) {
			return (
				<>
					<div className="add-portal-wrapper">
						<div className="add-portal" onClick={() => {
							this.createPortal('')
						}}>Create New</div>
					</div>

					<table className="portal-list-table">
						<thead>
							<tr>
								<th>Domain Name</th>
								<th>Title</th>
							</tr>
						</thead>
						<tbody>
							{
								this.renderPortals()
							}
						</tbody>

					</table>
				</>
			)
		}
		else {
			return (
				<CreatePortal showPortalList={this.showPortalList} id={this.state.selectedPortalId} />
			)
		}
	}
	renderPortals = () => {
		return this.state.portals.map((item, index) => {
			if (item.sections.length) {
				return (
					<tr key={'portal-list-'+item.id} className="portal-list" onClick={() => {
						this.createPortal(item.id)
					}}>
						<td className="portal-domain">{item.domainName}</td>
						<td className="portal-title">{item.title}</td>
					</tr>
				)
			}
			else {
				return (null)
			}


		})
	}
}
function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			getPortals
		}, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Design);

