import igniteLogo from "../assets/ignite-logo.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 flex justify-center py-5 px-0  ">
      <img className="h-8" src={igniteLogo} alt="Ignite Logo" />
    </header>
  );
};
