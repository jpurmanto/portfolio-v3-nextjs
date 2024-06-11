// components/TechStackPage.tsx
import { Box } from "@chakra-ui/react";
import TechStackListComponent from "../ClientProfile/TechStackClient";
import { TechStackListProps } from "../../../../../../../public/assets/TechStackList/TechStackList";

type TechStackPageProps = {
  techStackList: TechStackListProps[];
};

const TechStackPage = ({ techStackList }: TechStackPageProps) => {
  return (
    <Box>
      <TechStackListComponent techStackList={techStackList} />
    </Box>
  );
};

export default TechStackPage;
