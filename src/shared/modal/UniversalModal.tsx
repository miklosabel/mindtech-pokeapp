import { Card, Modal } from "@mui/material";
import { FunctionComponent } from "react";
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

const UniversalModal: FunctionComponent<UniversalModalProps> = ({
  minHeight,
  minWidth,
  isModalOpen,
  closeModal,
  children,
}) => {
  return (
    <Modal keepMounted open={isModalOpen} onClose={() => closeModal()}>
      <StyledModalBox>
        <Card
          sx={{
            minHeight: minHeight,
            minWidth: minWidth,
          }}
        >
          {children}
        </Card>
      </StyledModalBox>
    </Modal>
  );
};

UniversalModal.defaultProps = defaultUniversalModalProps;

export default UniversalModal;
