import React, { useContext, useEffect, useRef } from "react";
import { Text, Box } from "@chakra-ui/react";
import { NavbarContext } from "layouts/context";

interface ISmootProps {
  targetId: string;
  label?: string;
  children?: React.ReactNode;
}
function SmoothScrollLink({ targetId, label, children }: ISmootProps) {
  const linkRef = useRef(null);
  const { setActiveNavItem } = useContext(NavbarContext);

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    if (linkRef.current) {
      linkRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [targetId]);

  const handleClick = (target) => {
    setActiveNavItem(target);
  };

  return (
    <>
      {children ? (
        <Box ref={linkRef}>{children}</Box>
      ) : (
        <Text
          p={{ base: 0, md: 2 }}
          className={targetId}
          fontSize={"sm"}
          ref={linkRef}
          fontWeight={700}
          onClick={() => handleClick(targetId)}
          whiteSpace={"nowrap"}
          cursor={"pointer"}
          _hover={{
            color: "brand.500",
          }}
        >
          {label}
        </Text>
      )}
    </>
  );
}

export default SmoothScrollLink;
