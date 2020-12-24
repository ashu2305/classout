import React from 'react';
import EditIcon from '../../../../assets/images/icons/edit.svg';
import DeleteIcon from '../../../../assets/images/icons/delete.svg';
import Button from '../../../../components/common/Button';
import Close from '../../../../assets/images/icons/close-1.svg';
class QuizQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.data
    }
    changeEditable = () => {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }
    handleAnsChange=(index,name,value)=>{
        let answers= this.state.answers;
        answers[index][name]=value;
        this.setState({answers:answers},()=>{
            this.props.saveQuestion(this.props.index, this.state)
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data!==this.props.data){
            this.setState({
                ...nextProps.data
            })
        }
    }
    handleIsCorrect = (index,name,value)=>{
        let answers= this.state.answers;
        answers.forEach((item,index)=>{
            answers[index]['isCorrectAns']=false
        })
        answers[index][name]=value;
        this.setState({
            answers:answers,
            correctAnsReason:''
        },()=>{
            this.props.saveQuestion(this.props.index, this.state)
        })
    }
    handleQuestionChange = (e)=>{
        this.setState({
            question:e.target.value 
        },()=>{
            this.props.saveQuestion(this.props.index, this.state)
        })
    }
    handleReason = (name,value)=>{
        this.setState({
            [name]:value
        },()=>{
            this.props.saveQuestion(this.props.index, this.state)
        })
    }
    saveQuestion = (type)=>{
        if(type==='save'){
            this.props.saveQuestion(this.props.index, this.state)
        }
        else{
            this.props.addMoreQuestion(this.props.index, this.state) 
        }
        this.changeEditable();
    }
    renderEditableQuestion = () => {
        return (
            <div className="question question-edit">
                <div className="action-items">
                {/* <button type="button" >
                    <img src={EditIcon} alt="edit" />
                </button> */}
                    <button type="button">
                        <img src={DeleteIcon} alt="delete" 
                        onClick={()=>{
                            this.props.deleteQuestion(this.props.index)
                        }}/>
                    </button>
                </div>
                <div className="ques-header">
                    <span>Question {this.props.index + 1}</span>
                    <input
                        value={this.state.question}
                        className="form-control"
                        onChange={this.handleQuestionChange}
                    />
                </div>
                <div className="ques-body">
                    {
                        this.state.answers.map((item, index) => {
                            return (
                                <>
                                    <div className="ques-options">
                                        <input 
                                        onChange={(e)=>this.handleIsCorrect(index,'isCorrectAns',e.target.checked)}  
                                        checked={item.isCorrectAns} 
                                        type="radio" 
                                        id={"quiz-ans-"+this.props.index+'-'+index} 
                                        name="radio-group" />
                                        <label htmlFor={"quiz-ans-"+this.props.index+'-'+index} >Color</label>
                                        <input
                                            onChange={(e)=>this.handleAnsChange(index,'ans',e.target.value)} 
                                            value={item.ans}
                                            className="form-control"
                                        />
                                        <span className="delete-option">
                                            <img src={Close} alt="Close" />
                                        </span>
                                    </div>
                                    <>
                                        {
                                            item.isCorrectAns &&
                                            <div className="best-answer">
                                                <textarea
                                                onChange={(e)=>this.handleReason('correctAnsReason',e.target.value)}
                                                    value={this.state.correctAnsReason}
                                                    name="description"
                                                    placeholder="Explain why this is the best answer"></textarea>
                                            </div>
                                        }
                                    </>
                                </>
                            )
                        })
                    }
                </div>
                {
                    !this.props.isLast ?
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => { this.saveQuestion('save')}}
                        >
                            SAVE
                        </button>
                        :
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => { this.saveQuestion('save_and_next')}}
                        >
                            SAVE &amp; NEXT QUESTION
                        </button>
                }
                
            </div>
        )
    }
   
    renderQuestions = () => {
        if (this.state.isEditable) {
            return this.renderEditableQuestion()
        }
        else {
            return (
                <div className="question">
                    <div className="action-items">
                        <button type="button" onClick={this.changeEditable}>
                            <img src={EditIcon} alt="edit" />
                        </button>
                        <button type="button">
                            <img src={DeleteIcon} alt="delete" />
                        </button>
                    </div>
                    <div className="ques-header">
                        <span>Question {this.props.index + 1}</span>
                        <p>{this.state.question}</p>
                    </div>
                    <div className="ques-body">
                        {
                            this.state.answers.map(item => {
                                return (
                                    <div className="ques-options">
                                        <input checked={item.isCorrectAns} type="radio" id="Image" name="radio-group" />
                                        <label htmlFor="Image">{item.ans}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderQuestions()}
            </>
        );
    }
}

export default QuizQuestions;