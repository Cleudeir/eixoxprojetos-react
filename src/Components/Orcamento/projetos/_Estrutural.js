import {projeto} from '../class/_Projeto';

export default function Estrutural() {
  const itensInclude = [
    'Planta de locação',
    'Planta de forma',
    'Planta de lajes',
    'Detalhamento de pilares',
    'Detalhamento de vigas',
    'Detalhamento de fundação',
    '02 pedidos de revisão',
  ];
  const itensExcluded = [
    'Acompanhamento da execução',
  ];
  const observacao = [
    'Calculo de estrutura feito para concreto armado',
  ];

  const arquitetonico = new projeto('Estrutural');
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
