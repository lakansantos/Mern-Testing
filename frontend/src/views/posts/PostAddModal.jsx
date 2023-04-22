import { Modal, ModalBody, ModalHeader, Form, ModalFooter, Button } from "reactstrap"

const PostAddModal = ({onClose, showAddModal, onAdd}) => {
    return (
        <Modal isOpen={showAddModal} toggle={onClose} centered>
            <ModalHeader toggle={onClose}>Add post</ModalHeader>
            <ModalBody>
                <Form>

                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button>Submit</Button>
            </ModalFooter>
        </Modal>
    )
}


export default PostAddModal