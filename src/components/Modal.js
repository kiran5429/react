function Modal(props) {
    
    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }

    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Confirm</button>
            <button className='btn' onClick={confirmHandler}>Cancel</button>
        </div>
    );
}
export default Modal;