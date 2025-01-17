import { Skill } from "./skill/Skill";
import { Title } from "../../../components/title/Title";
import { S } from "./Skills_Styles"

export const Skills: React.FC = () => {
  const skillsItems = [
    {iconId:"javaScript", text:"Javascript", width:"116", height:"120", viewBox:"0 0 116 120"},
    {iconId:"typeScript", text:"typescript"},
    {iconId:"mongoDb", text:"mongo db"},
    {iconId:"PostgreSql", text:"PostgreSQL"},
    {iconId:"jest", text:"Jest"},
    {iconId:"expressJs", text:"express Js"},
    {iconId:"nestJs", text:"nest Js"},
    {iconId:"docker", text:"docker"},
    {iconId:"reactJs", text:"react Js"},
    {iconId:"reactNative", text:"react Native"},
    {iconId:"styledComponents", text:"styled Components"},
    {iconId:"redux", text:"redux"},
    {iconId:"git", text:"git", viewBox:"0 0 32 32"},
  ]

  return (
    <S.Skills>
      <Title title="Skills" />
      <S.Wrapper>
        {skillsItems.map((s) => {
          return (
            <Skill
              iconId={s.iconId}
              text={s.text}
              width={s.width}
              height={s.height}
              viewBox={s.viewBox}
            />
          )
        })}
      </S.Wrapper>
    </S.Skills>
  );
}