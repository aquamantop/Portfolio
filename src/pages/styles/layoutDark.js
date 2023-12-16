import styled from 'styled-components'
import { primary, secondary } from './Color'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const DivContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${primary};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${secondary};
  }
`
