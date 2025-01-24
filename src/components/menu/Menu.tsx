import { Link } from "react-scroll";

const menuItems = [
  { name: "Home", link: "home" },
  { name: "About me", link: "about_me" },
  { name: "Projects", link: "projects" },
  { name: "Skills", link: "skills" },
  { name: "Contacts", link: "contacts" },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {menuItems.map((item) => {
        return (
          <li key={item.name}>
            <Link activeClass="active" to={item.link} spy={true} smooth={true}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
