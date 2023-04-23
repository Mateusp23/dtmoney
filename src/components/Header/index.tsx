import logoImg from '../../assets/logo.svg';
import { Container, Content, ContentButtons } from './styles';

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) { 
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <ContentButtons>
          <button type="button" onClick={onOpenNewTransitionModal}>
            Nova transção
          </button>
        </ContentButtons>
      </Content>
    </Container>
  );
}