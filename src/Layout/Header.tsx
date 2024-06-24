import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={{backgroundColor: 'purple', padding: '20px'}}>
      <div>
        
      </div>
      <nav>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
