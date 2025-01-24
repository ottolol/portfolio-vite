import React from "react";
import Photo from "../../assets/images/blogging 1.webp";
import { DesktopMenu } from "../../components/menu/DesktopMenu";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Header_Styles";
import { Link } from "react-scroll";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header id="home">
      {width < breakpoint ? (
        <MobileMenu menuItems={[]} />
      ) : (
        <DesktopMenu menuItems={[]} />
      )}

      <StyledFlexWrapper
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row-reverse"
      >
        <S.Picture src={Photo} />
        <S.Developer>
          <S.Post>Developer</S.Post>
          <S.Name>Erica Font</S.Name>
          <S.Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </S.Text>
          <S.ContactMe href="#">Contact me</S.ContactMe>
        </S.Developer>
      </StyledFlexWrapper>
      <S.ArrowWrapper>
        <S.ArrowDown>
          <Link to={"about_me"} spy={true} smooth={true}>
            <Icon
              iconId={"arrowDown"}
              width="18"
              height="28"
              viewBox="0 0 18 28"
            />
          </Link>
        </S.ArrowDown>
      </S.ArrowWrapper>
    </S.Header>
  );
};
