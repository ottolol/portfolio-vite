import { Icon } from "../../components/icon/Icon";
import { DesktopMenu } from "../../components/menu/DesktopMenu";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles"

const items = ["Projects", "Contacts"];
const linksItems = [
  {href: "#", iconId: "gmail", width: "39", height: "38", viewBox: "0 0 39 38", text: "Gmail"},
  {href: "#", iconId: "linkein", width: "39", height: "38", viewBox: "0 0 39 38", text: "linkedin"},
  {href: "#", iconId: "github", width: "39", height: "38", viewBox: "0 0 39 38", text: "GITHUB"}
]

export function Footer() {
  return (
    <S.Footer>
      <StyledFlexWrapper flexDirection="column" alignItems="center">
        <S.Wrapper>
          {linksItems.map((l) => {
            return (
              <S.Link href={l.href}>
                <Icon iconId={l.iconId} width={l.width} height={l.height} viewBox={l.viewBox} />
                <span>{l.text}</span>
              </S.Link>
            )
          })}
        </S.Wrapper>
        <S.BottomMenuStyles>
          <DesktopMenu menuItems={items} className="bottom-menu" />
        </S.BottomMenuStyles>
        <S.Copyright>Web Developer 2025</S.Copyright>
      </StyledFlexWrapper>
    </S.Footer>
  );
}

