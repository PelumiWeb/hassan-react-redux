import React,{ useState, useEffect} from 'react'
import CardComponent from '../component/CardComponent'
import styled from 'styled-components'
import Header from '../component/Header'
import Loader from 'react-loader-spinner'
import axios from '../axios'
import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import * as actionCreator  from "../state/actionCreator/action-creator" 
import {Images} from  "../images"
 
function Homepage() {
  const [intialProduct, setIntialProduct] = useState([])
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [reqFailed, setReqFailed] = useState(false)
  const products = useSelector((state) => state.products)
  const [inputValue, setInputValue] = useState("")




  const {getData, getCategories, FilterData, SearchData } = bindActionCreators(actionCreator, dispatch)


  useEffect(() => {
    const FetchOptions = async () => {
      // setLoading(true)
      try {
       const req = await axios.get("categories")
       const data = req.data
       if (data) {
       const formatData = data.map(data => ({
         value: data.name,
         label: data.name
       }))
       getCategories(formatData)
       }
      }catch(e) {
        alert(e)
      }
    }
    FetchOptions()
  }, [])






  useEffect(() => {
    const FetchData = async () => {
      setLoading(true)
      try {
       const req = await axios.get("products")
       const data = req.data
       const formatData = data.map(data => ({
         ...data,
         image: Images //Bad Practice, but it will work. I'm improvising because image is not part of API.
       }))

      
       getData(formatData)
       setIntialProduct(formatData)
      }catch(e) {
        setReqFailed(true)
      }
       setLoading(false)
    }
    FetchData()
  }, [])


 const handleChange  = (selectedOption) => {
  FilterData({selected:selectedOption.label, products: intialProduct})
}


useEffect(() => {
  const FetchSearchData = () => {
    SearchData({products: intialProduct, searchInput: inputValue})
  }
  console.log(inputValue)
  FetchSearchData()
}, [inputValue])

// console.log(products)



 const Cards = () => (
  <CardWrapper> 

  {products.map(data => (
    <CardComponent key={data.id} post={data}  />
  ))}

 </CardWrapper>
 )
 
 const Loading = () => (
   <LoaderWrapper> 
    <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
   </LoaderWrapper>
     
 )


 const showContents = () => {
   if (loading) {
    return Loading() 
   } else if (reqFailed) {
      return <p>Couldn't fetch the data</p>
   } else {
    return Cards()
   }
  }




  return (
    <AppWrapper>
      <Header 
      inputValue={inputValue}  setInputValue={setInputValue}
      handleChange={handleChange} />
      {showContents()}
    </AppWrapper>
  );
}

export default Homepage;

const AppWrapper = styled.div`
width: 100%;
`
const CardWrapper = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
` 

const LoaderWrapper = styled.div`
display: grid;
place-items: center;
/* height: 100vh */
`
