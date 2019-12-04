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
  position: relative;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 1rem 2rem 1rem 2rem;
  justify-content: space-between;
`



const Button = styled.button`
  position: absolute;
  z-index: 10;
  border: none;
  border-radius: 0.5rem;
  padding: .2rem 2rem .2rem 2rem 
  font-size: 1rem;
  cursor: pointer;
`

const Header = ({ remix }) => {
    return (


            <Button onClick={remix}>Remix</Button>

    )
}

export default Header
