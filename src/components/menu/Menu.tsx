import logo from "../../assets/logo.webp";

const Menu = () => {
  return (
    <>
      <div className="logoContainer flex align-items-center text-xl font-bold gap-1">
        <img src={logo} alt="Admin Panel Logo" className="w-4rem h-4rem" />
        <span>Swiftly</span>
      </div>
    </>
  );
};

export default Menu;
