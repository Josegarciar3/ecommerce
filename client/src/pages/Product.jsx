import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({ height: "40vh"})}
`;
const InfoContainer = styled.div`
    flex: 1  ;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 400;
`;
const Desc = styled.p`
    margin: 20px 0px;

`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
    
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Remove = styled.button`
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Add = styled.button`
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: aquamarine;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src = " https://images.pexels.com/photos/5784358/pexels-photo-5784358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>MARCO H3</Title>
                <Desc>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
                (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, 
                sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                </Desc>
                <Price>$ 30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "darkblue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>44</FilterSizeOption>
                            <FilterSizeOption>46</FilterSizeOption>
                            <FilterSizeOption>48</FilterSizeOption>
                            <FilterSizeOption>50</FilterSizeOption>
                            <FilterSizeOption>52</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove>-</Remove> 
                        <Amount>1</Amount>
                        <Add>+</Add> 
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product