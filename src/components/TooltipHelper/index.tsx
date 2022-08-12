import { Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IoMdHelpCircle } from "react-icons/io";

export const TooltipHelper = ({ text }: { text: string }) => (
  <Tooltip label={text} fontSize="md" placement="top">
    <span>
      <IoMdHelpCircle
        size={20}
        style={{
          float: "left",
          marginTop: ".2rem",
          marginRight: ".25rem",
          cursor: "help",
        }}
      />
    </span>
  </Tooltip>
);
