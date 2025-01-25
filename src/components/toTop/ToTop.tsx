import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export const ToTop = () => {
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 200) {
        setShowToTopBtn(true);
      } else {
        setShowToTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showToTopBtn && (
        <StyledToTop>
          <Link to={"home"} spy={true} smooth={true}>
            <Icon iconId="toTop" width="24" height="24" viewBox="0 0 24 24" />
          </Link>
        </StyledToTop>
      )}
    </>
  );
};

const StyledToTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px;

  &:hover {
    background-color: ${theme.colors.inputPlaceholder};
    border-radius: 50%;
    cursor: pointer;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`;
