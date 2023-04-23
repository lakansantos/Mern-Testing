import { 
    Modal, 
    ModalBody,
    ModalHeader, 
    ModalFooter, 
    Button,
} from "reactstrap"

const PostDeleteModal = ({onClose, dataToDelete, isOpen, onSubmit}) => {

    const {title, message} = dataToDelete || {}
    return (
        <Modal isOpen={isOpen} toggle={onClose}>
            <ModalHeader>
                Do you want to delete this post?
            </ModalHeader>
            <ModalBody>
                <p>Title: {title}</p>
                <p>Message: {message}</p>
                <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" onClick={onSubmit}>
                        Delete
                    </Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default PostDeleteModal;