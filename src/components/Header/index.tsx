import logoImg from '../../assets/logo.svg';
import Dropdown from '../Dropdown';
import { Container, Content, ContentButtons } from './styles';

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

const options = [
  { label: 'Opção 1', value: 'opcao1' },
  { label: 'Opção 2', value: 'opcao2' },
  { label: 'Opção 3', value: 'opcao3' },
  { label: 'Opção 4', value: 'opcao4' },
  { label: 'Opção 5', value: 'opcao5' },
];

export function Header({ onOpenNewTransitionModal }: HeaderProps) { 
  const handleSelected = (value: string) => {
    console.log(`Opção selecionada: ${value}`);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <ContentButtons>
          <button type="button" onClick={onOpenNewTransitionModal}>
            Nova transção
          </button>
          <Dropdown options={options} onSelected={handleSelected} />
        </ContentButtons>
      </Content>
    </Container>
  );
}