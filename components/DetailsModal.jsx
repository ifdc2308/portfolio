import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const DetailsModal = ({ isOpen, onClose, title, children}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color='#000'>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody minH={'60vh'} overflowY="auto">
          {children}
        </ModalBody>       
      </ModalContent>
    </Modal>
  )
}
