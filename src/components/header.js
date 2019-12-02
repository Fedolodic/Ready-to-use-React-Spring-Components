import React from 'react'
import styled from 'styled-components'

/**
 * Pallete
 * gunmetal: #272838
 * platinum: #E5ECE9
 * red-violet: #C60F7B
 * black-coral: #545E75
 * slate-grey: #76818E
 * white: #FFFFFF
 */
const Container = styled.header`
  background-color: #272838;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 1rem 2rem 1rem 2rem;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 1.2rem;
  color: #e5ece9;
`

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: .2rem 2rem .2rem 2rem 
  font-size: 1rem;
  cursor: pointer;
`

const Header = ({ remix }) => {
    return (
        <Container>
            <Title>Gallery</Title>
            <Button onClick={remix}>Remix</Button>
        </Container>
    )
}

export default Header
