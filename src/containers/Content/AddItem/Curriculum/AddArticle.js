import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../../../components/common/Button';
import Close from '../../../../assets/images/icons/close-1.svg';

const AddArticle = ({
    handleArticleSave,
    colsePopup,
    title,
    name,
    articleData    
}) => {
    let editorData = '';
    return(
        <div className="popup-overlay add-article">
        <div className="popup">
            <div className="popup-header">
                <span className="close-popup" onClick={()=>colsePopup()}>
                    <img src={Close} alt="Close" />
                </span>
                <ul>
                <li>{name}</li>
                <li>{title}</li>
                </ul>
                <h2>Add Article</h2>
            </div>
            <div className="popup-body">
                <div className="d-flex">
                    <div className="content-block">
                        <div className="mb-25">
                            <CKEditor
                                editor={ ClassicEditor }
                                data={articleData}
                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    editorData = editor.getData();
                                    console.log( { event, editor, editorData } );
                                }}
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                        <Button 
                            bType="button"
                            bValue="Save"
                            cName="btn btn-primary"
                            clickHandler={()=>handleArticleSave(editorData)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddArticle;
