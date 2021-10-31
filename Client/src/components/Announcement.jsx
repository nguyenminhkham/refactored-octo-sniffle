import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <div>
            <Container>
                Siêu giảm giá ưu đãi 30%
            </Container>
        </div>
    )
}

export default Announcement
