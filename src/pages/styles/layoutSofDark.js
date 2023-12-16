import styled from 'styled-components'
import { SDprimary, SDsecondary } from './Color'

export const LayoutContainerSD = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const DivContainerSD = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${SDprimary};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${SDsecondary};
  }
`
