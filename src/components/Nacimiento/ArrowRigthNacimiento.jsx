import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const ArrowRigthNacimiento = ({ handleClickAcceptProfile }) => {
  const { isMobile } = useSidebar();

  return (
    <Button>
      {isMobile ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ArrowRight />
            </TooltipTrigger>
            <TooltipContent>Siguiente</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <>
          <ArrowRight /> Siguiente
        </>
      )}
    </Button>
  );
};

ArrowRigthNacimiento.propTypes = {
  handleClickAcceptProfile: PropTypes.func,
};
