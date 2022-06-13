import { Card, Modal } from '@mui/material';
import React from 'react';
import { StyledModalBox } from '../styled-components/StyledComponents';

const MODAL_MIN_HEIGHT = 530;
const MODAL_MIN_WIDTH = 300;

interface UniversalModalProps {
	children: JSX.Element;
	isModalOpen: boolean;
	closeModal(): void;
}

const UniversalModal = (props: UniversalModalProps) => {
	return (

		<Modal
			keepMounted
			open={props.isModalOpen}
			onClose={() => props.closeModal()}
		>
			<StyledModalBox>
				<Card sx={{
					minWidth: MODAL_MIN_WIDTH,
					minHeight: MODAL_MIN_HEIGHT,
				}}>
					{props.children}
				</Card>
			</StyledModalBox>
		</Modal>
	)
}

export default UniversalModal