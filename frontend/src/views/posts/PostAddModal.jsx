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

const PostAddModal = ({onClose, showAddModal, onSubmit}) => {
    return (
        <Modal isOpen={showAddModal} toggle={onClose} centered>
            <ModalHeader toggle={onClose}>Add post</ModalHeader>
            <ModalBody>
                <Form onSubmit={formSubmit(onSubmit)} noValidate>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input 
                            id="title"
                            name="title"
                            placeholder="Add title"
                            data-testid="title-input"
                            required
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
                            required
                        />
                        <FormFeedback data-testid="message-feedback">
                            Required
                        </FormFeedback>
                    </FormGroup>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button  color="primary" type="submit">Submit</Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default PostAddModal