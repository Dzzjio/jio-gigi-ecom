import { ButtonContainer, HeaderContainer, HeaderContent, Logo, SearchContainer, SearchInput} from './styles/StyledHeader';
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e:any) => {
    setSearchValue(e.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="logo" />
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
          />
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </SearchContainer>
        <ButtonContainer>
          <span>
            <p>კალათა</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/* <div className='sircle'></div> */}
          </span>
          <span>
            <p>შესვლა</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/* <div className='sircle'></div> */}
          </span>
          </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;