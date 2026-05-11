import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { FootnoteItem } from './FootnotePanel'

interface FootnoteWidgetProps {
  footnotes: FootnoteItem[]
}

const Wrapper = styled.div`
  max-width: 67vw;
  // margin-top: 2rem;
  padding-top: 2rem;
  padding-left: 40px;
  border-left: 2px solid rgba(2, 0, 36, 1);

  @media screen and (max-width: 1200px) and (min-width: 769px) {
    max-width: 100%;
    padding-left: 0;
    border-left: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    border-left: 0;
  }
`

const ToggleHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1.5px dashed rgba(2, 0, 36, 0.4);
  padding: 0.5rem 0 0.6rem 0;
  cursor: pointer;
  font-family: 'NanumSquareNeoBold';
  font-size: 0.95rem;
  color: rgba(2, 0, 36, 0.7);
  text-align: left;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(2, 0, 36, 1);
  }
`

const ChevronIcon = styled.span<{ open: boolean }>`
  display: inline-block;
  font-style: normal;
  margin-left: auto;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
  font-size: 0.75rem;
  opacity: 0.6;
`

const FootnoteList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0.75rem 0 0.25rem 0;
`

const FootnoteEntry = styled.li<{ type: 'apa' | 'numbered' }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0 0.75rem;
  align-items: baseline;
  padding: 0.4rem 0;
  font-family: 'NanumSquareNeo';
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(2, 0, 36, 0.85);
  border-bottom: 1px solid rgba(2, 0, 36, 0.06);

  ${({ type }) =>
    type === 'apa' &&
    `
    padding-left: 0;
  `}

  &:last-child {
    border-bottom: none;
  }
`

const FootnoteNumber = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(2, 0, 36, 0.5);
  white-space: nowrap;
  padding-top: 0.1em;
`

const FootnoteContent = styled.span`
  word-break: break-word;

  a {
    color: #787777;
    text-decoration: underline;
    -webkit-text-underline-position: under;
    text-underline-position: under;
  }
`

const BackLink = styled.a`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  color: rgba(2, 0, 36, 0.35);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(2, 0, 36, 0.8);
  }
`

const FootnoteWidget: FunctionComponent<FootnoteWidgetProps> = ({
  footnotes,
}) => {
  const [open, setOpen] = useState(true)

  return (
    <Wrapper>
      <ToggleHeader onClick={() => setOpen(v => !v)}>
        각주 ({footnotes.length}개)
        <ChevronIcon open={open}>▾</ChevronIcon>
      </ToggleHeader>
      {open && (
        <FootnoteList>
          {footnotes.map(fn => (
            <FootnoteEntry key={fn.id} id={`footnote-${fn.id}`} type={fn.type}>
              <FootnoteNumber>[{fn.id}]</FootnoteNumber>
              <FootnoteContent
                dangerouslySetInnerHTML={{ __html: fn.content }}
              />
              <BackLink
                href={`#footnote-ref-${fn.id}`}
                aria-label="본문으로 돌아가기"
              >
                ↩
              </BackLink>
            </FootnoteEntry>
          ))}
        </FootnoteList>
      )}
    </Wrapper>
  )
}

export default FootnoteWidget
