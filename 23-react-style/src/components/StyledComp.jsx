import styled, { keyframes } from "styled-components";

const Container = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0 5rem;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;

  @media screen and (max-width: 768px) and (orientation: portrait) {
    /* 768px 이하 이면서, 기기 방향이 세로인(phon)*/
    font-size: 30px;
    color: green;
  }

  @media screen and (max-width: 768px) and (orientation: landscape) {
    /* 768px 이하이면서, 기기 방향이 가로인(ipad)*/
    font-size: 40px;
    color: blue;
  }
`;

const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    50%{ transform: rotate(180deg);
        background-color: white;
    }

    100%{
        transform: rotate(360deg);
        
    }
`;

const Child = styled.span`
  color: ${(props) => (props.color ? props.color : "red")};
  border: 1px solid yellow;

  &:hover {
    color: white;
    cursor: pointer;
    animation: ${rotate} 1s infinite linear;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    color: yellow;
  }
`;

export default function StyledComp() {
  return (
    <Container>
      <H4Title>styled-components 이용</H4Title>
      <ParentDiv>
        <Child color="blue">el 1</Child>
        <Child>el 2</Child>
        <Child>el 3</Child>
      </ParentDiv>
    </Container>
  );
}
