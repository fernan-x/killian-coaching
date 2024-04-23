import { Button } from "./button";

const Nav = () => {
  return (
    <nav className="flex w-full bg-slate-50 p-6 items-center gap-6 sticky">
      <div className="flex-1 flex items-center gap-6">
        <span className="font-bold">Killian Coaching</span>
        <ul className="flex-1 flex justify-center gap-6">
          <li>Elem 1</li>
          <li>Elem 1</li>
          <li>Elem 1</li>
        </ul>
      </div>
      <Button>Réserver séance gratuite</Button>
    </nav>
  );
};

export default Nav;
