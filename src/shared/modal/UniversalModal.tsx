import { Card, Modal } from "@mui/material";
import { StyledModalBox } from "../styled-components/StyledComponents";

const MODAL_MIN_HEIGHT = 530;
const MODAL_MIN_WIDTH = 300;

export interface UniversalModalProps {
  minHeight?: number;
  minWidth?: number;
  isModalOpen: boolean;
  closeModal(): void;
  children?: JSX.Element;
}

const defaultUniversalModalProps = {
  minHeight: MODAL_MIN_HEIGHT,
  minWidth: MODAL_MIN_WIDTH,
  isModalOpen: false,
  closeModal: () => {},
  children: <></>,
};

const UniversalModal: React.FC<UniversalModalProps> = (props) => {
  return (
    <Modal
      keepMounted
      open={props.isModalOpen}
      onClose={() => props.closeModal()}
    >
      <StyledModalBox>
        <Card
          sx={{
            minHeight: props.minHeight,
            minWidth: props.minWidth,
          }}
        >
          {props.children}
        </Card>
      </StyledModalBox>
    </Modal>
  );
};

UniversalModal.defaultProps = defaultUniversalModalProps;

export default UniversalModal;
