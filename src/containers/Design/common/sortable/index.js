import React, {Component} from 'react';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
const DragHandle = sortableHandle(() => <span className="accordion-handle">
				<i className="fa fa-bars"></i>
			</span>);

const SortableItem = sortableElement(({value,gotoForm,sortIndex}) => (
		<div  className="design-accordion" onClick={() => gotoForm(value.sectionType,sortIndex)}>
		<div className="design-accordion-title">
		<DragHandle />
			<label>{value.sectionType && value.sectionType.toString().replaceAll('_', ' ')}</label>
		</div>
	</div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <div className="design-section-accordion">{children}</div>;
});

export default class SortableComponent extends Component {
	
  render() {
    // const {items} = this.state;
		if(!this.props.data.length){
			return null;
    }
    
    return (
      <SortableContainer onSortEnd={this.props.onSortItems} data={this.props.data} useDragHandle>
        {this.props.data.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} gotoForm={this.props.gotoForm} sortIndex={index}/>
        ))}
      </SortableContainer>
    );
  }
}
