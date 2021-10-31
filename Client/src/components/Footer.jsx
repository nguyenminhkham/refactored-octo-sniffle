import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KHAM NGUYEN</Logo>
                <Desc>
                    Cung cấp dịch vụ thiết kế máy, sửa chữa. Cập nhật công nghệ mới, phù hợp với nhiều loại mô hình sản xuất kinh doanh ở Việt Nam
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Trang hữu ích</Title>
                <List>
                    <ListItem>Trang chủ</ListItem>
                    <ListItem>Giỏ hàng</ListItem>
                    <ListItem>Robot thu hoạch</ListItem>   
                    <ListItem>Tay gắp</ListItem>
                    <ListItem>Dây chuyền sản xuất</ListItem>
                    <ListItem>Tài khoản của tôi</ListItem>
                    <ListItem>Đơn hàng</ListItem>
                    <ListItem>Danh sách yêu thích</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Liên hệ</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>Thanh Phuoc, Binh Minh, Vinh Long
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+84 934 444 236
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>ng.minhkham@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/fv0j2tS/payment.png "/>
            </Right>
        </Container>
    )
}

export default Footer
