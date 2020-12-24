import React from 'react';
import Button from '../../../../components/common/Button';
export default class FaqForm extends React.Component {
	constructor(props){
		super(props)
		this.state={
      questionList:this.props.data.faqList && this.props.data.faqList.length?
      this.props.data.faqList:[
        {
        question:'',
        answer:''
      }
    ]
		}
	}
	handleChange = (name,value,index)=>{
    let questionList= this.state.questionList;
    questionList[index][name]=value;
    this.setState({
      questionList:questionList
    })
	}
	addNewQuestion = ()=>{
		let questionList= this.state.questionList;
		questionList.push({      
        question:'',
        answer:''      
    })
		this.setState({questionList:questionList})
	}
	render() {	
		return (
			<div>
				<div className="design-form">
					<form>
            {this.state.questionList.map((item,index)=>{
              return(
                <div className="faq-list">
                <div className="form-group">
                <label className="field-label">Question</label>
                <input 
                type="text" 
                value={item.question}
                onChange={(e)=>{this.handleChange('question',e.target.value,index)}}
                className="form-control form-control-sm"
                 />
              </div>
              <div className="form-group">
                <label className="field-label">Answer</label>
                <input 
                type="text" 
                value={item.answer}
                onChange={(e)=>{this.handleChange('answer',e.target.value,index)}}
                className="form-control form-control-sm"
                 />
              </div>
              </div>
              )
            })}
					<div className="form-btn">
							<button 
							onClick={()=>{	this.addNewQuestion()}}
							type="button" 
							className="btn btn-primary btn-block-sm-space">
								Add Question
							</button>
						</div>
					</form>
          <div className="form-btn">
          <Button 
					bType="button"
					bValue="Save"
					cName="btn btn-blue btn-block"				
					clickHandler={()=>{this.props.saveFaq(this.state.questionList,this.props.selectedFormIndex)}}
				/>
						
						</div>
				</div>
			</div>
		);
	}
}
