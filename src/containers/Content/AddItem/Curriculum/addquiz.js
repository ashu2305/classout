import React from 'react';
import Button from '../../../../components/common/Button';
import Close from '../../../../assets/images/icons/close-1.svg';
import QuizQuestions from './QuizQuestions'
class AddQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.questionBody = {
            question: '',
            answers: [
                {
                    ans: '',
                    isCorrectAns: false,
                },
                {
                    ans: '',
                    isCorrectAns: false,
                },
                {
                    ans: '',
                    isCorrectAns: false,
                },
                {
                    ans: '',
                    isCorrectAns: false,
                }
            ],
            isEditable:true,
            correctAnsReason: ''
        }
        this.state = {
            questions: this.createQuestionBody(props)
        }
    }
    createQuestionBody = (obj)=>{
        if(obj.data && obj.data.questions && obj.data.questions.length){
            let questions = [];
            obj.data.questions.forEach((item,index)=>{
                let questionObj = {};
                questionObj['question'] = item.description;
                questionObj['isEditable']=false;
                questionObj['correctAnsReason']=item.correctResponses[0].bestAnswerReason;
                let bestAns = item.correctResponses[0].description;
                questionObj.answers=[];
                item.responses.forEach(elem=>{
                    questionObj.answers.push({
                        ans:elem.description,
                        isCorrectAns:elem.description===bestAns
                    })
                })
                questions.push(questionObj); 
            })
            return questions;
        }
        else{
            return [JSON.parse(JSON.stringify(this.questionBody))]
        }
    }
    addMoreQuestion = (index,data) => {
        data.isEditable= false;
        //this.saveQuestion(index,data)
        let questions = JSON.parse(JSON.stringify(this.state.questions));        
        questions[index]=data
        questions.push(JSON.parse(JSON.stringify(this.questionBody)))
        this.setState({
            questions: questions
        })       
    }
    saveQuestion = (index,data)=>{
        let questions = this.state.questions;
        questions[index]=data
        this.setState({
            questions: questions
        })
    }
    deleteQuestion = (index) => {
        let questions = this.state.questions;
        questions.splice(index, 1)
        this.setState({
            questions: questions
        })
    }
    render() {
        return (
            <div className="popup-overlay add-quiz">
                <div className="popup">
                    <div className="popup-header">
                        <span className="close-popup" onClick={() => this.props.colsePopup()}>
                            <img src={Close} alt="Close" />
                        </span>
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.title}</li>
                        </ul>
                        <h2>Add Quiz</h2>
                    </div>
                    <div className="popup-body">
                        <div className="d-flex">
                            <div className="content-block">
                                <div className="mb-25">
                                    {
                                        this.state.questions.map((item,index)=>{
                                            return(
                                                <QuizQuestions
                                                index={index}
                                                data={item}
                                                saveQuestion={this.saveQuestion}
                                                addMoreQuestion={this.addMoreQuestion}
                                                deleteQuestion={this.deleteQuestion}
                                                isLast={(index>=this.state.questions.length-1)}
                                            /> 
                                            )
                                        })
                                    }
                                                                      
                                </div>
                                <Button
                                    bType="button"
                                    bValue="SAVE AND FINISH"
                                    cName="btn btn-primary"
                                    clickHandler={()=>this.props.handleQuizSave(this.state.questions)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddQuiz;