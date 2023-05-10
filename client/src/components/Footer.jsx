import { AlternateEmail, Facebook, Instagram, Phone, Place, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;     
    ${mobile({ flexDirection: "column"})} 
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc  = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white ;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px; 
`;
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`; 

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img `

height: 45%;
width: 90%;
    
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> 2UNO. </Logo>
            <Desc>
                Comunicate con nosotros si deseas un producto personalizado.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999" >
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F" >
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE" >
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem> 
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Place style={{marginRight:"10px"}} />
                Calle 35 b sur # 45-21
            </ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}} />
                +57 313 463 78 53
            </ContactItem>
            <ContactItem> <AlternateEmail style={{marginRight:"10px"}} />
                2uno@gmail.com
            </ContactItem>
            <Payment src ="https://andres-dev.com/wp-content/uploads/2017/08/payu-colombia.png" />
        </Right>
    </Container>
  )
}

export default Footer