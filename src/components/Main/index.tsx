import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title> React Avançado </S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJs e Styled Componentes
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para o código"
    />
  </S.Wrapper>
)

export default Main
