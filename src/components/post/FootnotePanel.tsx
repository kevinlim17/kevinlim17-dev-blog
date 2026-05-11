import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Sticky from 'components/common/Sticky'

export interface FootnoteItem {
  id: number
  content: string
  type: 'apa' | 'numbered'
}

interface FootnotePanelProps {
  footnote: FootnoteItem
  onClose: () => void
}

const FootnotePanelPositioner = styled.div`
  position: relative;
  margin-top: 1vh;
`

const FootnotePanelBlock = styled(Sticky)`
  padding: 0;
  height: fit-content;
  max-height: calc(100vh - 200px);
  min-width: calc(20vw);
  width: calc(20vw);
  overflow-wrap: break-word;
  overflow-y: auto;
  z-index: 1000;
  border-top: 2px dashed rgba(2, 0, 36, 0.3);
  border-right: 2px dashed rgba(2, 0, 36, 0.3);
  box-shadow: -6px 6px 1px 0px rgba(2, 0, 36, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: -6px 12px 2px 0px rgba(2, 0, 36, 0.2);
  }
`

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgba(250, 249, 246, 1);
  border-bottom: 1.5px dashed rgba(2, 0, 36, 0.3);
`

const HeaderLabel = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(2, 0, 36, 0.5);
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: rgba(2, 0, 36, 0.45);
  padding: 0;
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(2, 0, 36, 1);
  }
`

const PanelContent = styled.div`
  padding: 20px;
  background: rgba(196, 196, 196, 0.1);
  backdrop-filter: blur(20px);
`

const FootnoteNumber = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(2, 0, 36, 0.4);
  margin-bottom: 10px;
`

const FootnoteContent = styled.div`
  font-family: 'NanumSquareNeo';
  font-size: 0.9rem;
  line-height: 1.75;
  color: rgba(2, 0, 36, 0.85);
  word-break: break-word;
  overflow-wrap: break-word;

  strong {
    font-family: 'NanumSquareNeoExtraBold';
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: rgba(2, 0, 36, 1);
    line-height: 1.4;
  }

  p {
    margin: 0 0 6px;
  }

  a {
    color: #787777;
    text-decoration: underline;
    -webkit-text-underline-position: under;
    text-underline-position: under;
    word-break: break-all;
  }
`

const FootnotePanel: FunctionComponent<FootnotePanelProps> = ({
  footnote,
  onClose,
}) => {
  return (
    <FootnotePanelPositioner>
      <FootnotePanelBlock top={75}>
        <PanelHeader>
          <HeaderLabel>
            Footnote · {String(footnote.id).padStart(2, '0')}
          </HeaderLabel>
          <CloseButton onClick={onClose} aria-label="닫기">
            ×
          </CloseButton>
        </PanelHeader>
        <PanelContent>
          <FootnoteNumber>[{footnote.id}]</FootnoteNumber>
          <FootnoteContent
            dangerouslySetInnerHTML={{ __html: footnote.content }}
          />
        </PanelContent>
      </FootnotePanelBlock>
    </FootnotePanelPositioner>
  )
}

export default FootnotePanel
