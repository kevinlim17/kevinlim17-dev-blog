import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import TypeWriter from 'typewriter-effect'

const PersonalDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 120%;
  height: 100%;
  background: white;
  padding: 10px;
  margin-left: -20%;

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    padding-top: 0;
    padding-left: 20px;
    margin-left: 0;
  }
`

const Slogan = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #1f2937;
  margin-bottom: 2rem;
  min-height: 4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    min-height: 3.5rem;
  }
`

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
  }
`

const SectionTitle = styled.div`
  font-size: 1.1rem;
  color: #374151;
  min-width: 9rem;
  padding-right: 2rem;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    min-width: 8rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 700;
    min-width: auto;
    padding-right: 0;
    padding-bottom: 0.5rem;
    color: #1f2937;
  }
`

const SectionDetail = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
  flex: 1;
  padding-left: 1rem;
  border-left: 3px solid #e5e7eb;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #3730a3;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }

  /* 불릿 포인트 스타일링 */
  br + * {
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 0.8rem;
    border-left: 2px solid #e5e7eb;
  }
`

const PersonalDescription: FunctionComponent = function () {
  return (
    <PersonalDescriptionWrapper>
      <Slogan>
        <TypeWriter
          onInit={typewriter => {
            typewriter
              .pauseFor(3000)
              .typeString('더 나은 공동체를 위해, <br />')
              .pauseFor(1000)
              .typeString('코드를 쓰며 이야기를 개발합니다.')
              .start()
          }}
        />
      </Slogan>

      <SectionGroup>
        <SectionWrapper>
          <SectionTitle>💬 Language</SectionTitle>
          <SectionDetail>
            • Kotlin · Java <br />
            • C/C++ · LLVM IR <br />
            • TypeScript · Dart <br />
          </SectionDetail>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>🧭 Interests</SectionTitle>
          <SectionDetail>
            • Compiler Optimization & Program Analysis <br />
            • FPGA High-Level Synthesis (HLS) <br />
            • Android Native / Kotlin Multiplatform <br />
          </SectionDetail>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>👤 Activities</SectionTitle>
          <SectionDetail>
            • Undergraduate Researcher for{' '}
            <a href="https://coslab.khu.ac.kr/">
              Compiler & System Software Lab
            </a>{' '}
            <br />• Vice President,{' '}
            <a href="https://github.com/Dcom-KHU">D.Com</a> · CSE Academic Club,
            KHU (2022) <br />• KHU Android Track Lead,{' '}
            <a href="https://www.makeus.in/umc">
              Uni MakeUs Challenge 3rd Cohort (2022)
            </a>
            <br />
          </SectionDetail>
        </SectionWrapper>
      </SectionGroup>
    </PersonalDescriptionWrapper>
  )
}

export default PersonalDescription
