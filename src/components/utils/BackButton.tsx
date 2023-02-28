import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface IBackButtonProps {}

export function BackButton(props: IBackButtonProps) {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <>
            <Button onClick={goBack} variant={"ghost"}>Back</Button>
        </>
    );
}