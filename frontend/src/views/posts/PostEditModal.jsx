import {
  Modal,
  ModalBody,
  Button,
  Form,
  ModalHeader,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Spinner,
  ModalFooter,
} from "reactstrap";
import {formSubmit} from "../../utils/form";

const PostEditModal = (props) => {
  const {onClose, dataToEdit, isOpen, isLoading, onSubmit} = props;
  const {title, message} = dataToEdit || {};

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} toggle={onClose}>
        <ModalBody>
          <Spinner size="sm" animation="border" />
        </ModalBody>
      </Modal>
    );
  }
  return (
    <Modal isOpen={isOpen} toggle={onClose} centered>
      <ModalHeader toggle={onClose}>Edit</ModalHeader>
      <ModalBody>
        <Form onSubmit={formSubmit(onSubmit)} noValidate>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              data-testid="title-input"
              defaultValue={title}
            />
            <FormFeedback data-testid="title-feedback">Required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              type="textarea"
              name="message"
              data-testid="message-input"
              defaultValue={message}
            />
            <FormFeedback data-testid="message-feedback">Required</FormFeedback>
          </FormGroup>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PostEditModal;
