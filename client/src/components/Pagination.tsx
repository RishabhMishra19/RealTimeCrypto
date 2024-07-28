import {
  Button,
  ButtonProps,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";

const PagButton = (
  props: Pick<ButtonProps, "disabled" | "isActive" | "children">
) => {
  const activeStyle = {
    bg: "brand.600",
    _dark: {
      bg: "brand.500",
    },
    color: "white",
  };

  return (
    <Button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg="gray.700"
      _dark={{
        bg: "gray.800",
      }}
      color="white"
      opacity={props.disabled ? 0.6 : 1}
      _hover={!props.disabled ? activeStyle : undefined}
      cursor={props.disabled ? "not-allowed" : undefined}
      {...(props.isActive && activeStyle)}
    >
      {props.children}
    </Button>
  );
};

interface PaginationProps {
  pageCount: number;
  totalRecords: number;
  pageNum: number;
  setPageNum: (pageNumber: number) => void;
  recordsPerPage: number;
  handleNext: () => void;
  handlePrev: () => void;
  setRecordsPerPage: (recordsPerPage: number) => void;
}

export const Pagination = ({
  pageCount,
  pageNum,
  setPageNum,
  recordsPerPage,
  handleNext,
  handlePrev,
  setRecordsPerPage,
}: PaginationProps) => {
  return (
    <Flex
      bg="gray.700"
      _dark={{
        bg: "#1a202c",
      }}
      p={4}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <HStack>
        <PagButton>
          <IconButton
            aria-label="Previous page"
            color="white"
            _dark={{
              color: "gray.200",
            }}
            isDisabled={pageNum == 1}
            icon={<IoIosArrowBack />}
            onClick={handlePrev}
            boxSize={4}
          />
        </PagButton>

        <PagButton isActive>{pageNum}</PagButton>
        <Text color="white">Total: {pageCount}</Text>
        <PagButton>
          <IconButton
            aria-label="Next page"
            color="white"
            _dark={{
              color: "gray.200",
            }}
            boxSize={4}
            onClick={handleNext}
            isDisabled={pageNum >= pageCount}
            icon={<IoIosArrowForward />}
          />
        </PagButton>
        <Menu>
          <MenuButton
            ml={1}
            as={Button}
            rightIcon={<IoIosArrowDown />}
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.600" }}
            _dark={{
              bg: "gray.800",
              color: "gray.200",
              _hover: { bg: "gray.700" },
            }}
          >
            {recordsPerPage} / page
          </MenuButton>
          <MenuList
            bg="gray.700"
            color="white"
            _dark={{
              bg: "gray.800",
              color: "gray.200",
            }}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem
                onClick={() => {
                  setRecordsPerPage(size);
                  setPageNum(1);
                }}
                bg="gray.700"
                _hover={{ bg: "gray.600" }}
                _dark={{
                  bg: "gray.800",
                  _hover: { bg: "gray.700" },
                }}
                key={size}
              >
                {size} / page
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
