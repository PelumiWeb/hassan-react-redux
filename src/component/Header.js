import styled from 'styled-components'
import Select from 'react-select';
import { useSelector } from 'react-redux';

function Header({handleChange, inputValue, setInputValue}) {
  const categories = useSelector((state) => state.category)
    return (
      <div> 
           <input style={{zIndex: 10000}} placeholder="Search products" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
    )
}

export default Header

const HeaderComponent = styled.header`
width: 100%;
height: 100px;
background-color: white;
box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 500px){
    width: 100%;
}
`



