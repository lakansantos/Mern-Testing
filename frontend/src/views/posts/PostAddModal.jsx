import { 
    Modal, 
    ModalBody,
    ModalHeader, 
    Form, 
    ModalFooter, 
    Button,
    FormGroup,
    Input,
    Label,
    FormFeedback
} from "reactstrap"

import { formSubmit } from "../../utils/form"

const PostAddModal = ({onClose, showAddModal, onAdd}) => {
    return (
        <Modal isOpen={showAddModal} toggle={onClose} centered>
            <ModalHeader toggle={onClose}>Add post</ModalHeader>
            <ModalBody>
                <Form onSubmit={formSubmit(onAdd)} noValidate>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input 
                            id="title"
                            name="title"
                            placeholder="Add title"
                            data-testid="title-input"
                        />
                        <FormFeedback data-testid="title-feedback">
                            Required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message</Label>
                        <Input 
                            id="message"
                            type="textarea"
                            name="message"
                            placeholder="What's on your mind?"
                            data-testid="message-input"
                        />
                        <FormFeedback data-testid="message-feedback">
                            Required
                        </FormFeedback>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="primary">Submit</Button>
            </ModalFooter>
        </Modal>
    )
}


export default PostAddModal