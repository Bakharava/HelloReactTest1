import styled from "styled-components";

export const NewsItemWrapper = styled.div`
  padding: 24px;
  margin: 24px;
  background-color: #0B737D;
  box-shadow: 2px 2px 4px 2px #888888;
  width: 328px;
`

export const NewsName = styled.div`
    //color: white;
  color: ${props => props.name === 'Aftenposten' ? '#fff' : '#021012'};
    `

export const Button = styled.button`
  color: #827f80;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3b3b3b;
  border-radius: 3px;
  
  &:hover {
    cursor: pointer;
  }
`

export const ButtonDanger = styled(Button)`
  color: white;
  background-color: crimson;
  border-color: transparent;
`