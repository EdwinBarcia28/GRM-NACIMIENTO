import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ArrowRigthNacimientoMadre = ({ handleClickAcceptProfile }) => {
  const { isMobile } = useSidebar();

  return (
    <Button onClick={handleClickAcceptProfile}>
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

ArrowRigthNacimientoMadre.propTypes = {
  handleClickAcceptProfile: PropTypes.func,
};
