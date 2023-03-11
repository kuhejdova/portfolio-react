import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps {}

export function BackButton(props: IBackButtonProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Button onClick={goBack} variant={"ghost"} >
        <Icon
          color={"pink.400"}
          w={10}
          h={10}
          as={ChevronLeftIcon}
        />
      </Button>
    </>
  );
}
