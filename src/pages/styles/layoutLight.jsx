import styled from 'styled-components'
import { Lprimary, Lsecondary } from './Color'

export const LayoutContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const DivContainerLight = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Lprimary};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Lsecondary};
  }
`
