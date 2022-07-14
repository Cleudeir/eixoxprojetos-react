import {projeto} from './_Projeto';

export default function Estrutural({areaConsruir, areaTerreno}) {
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
    'Calculo de estrutural feito para concreto armado',
  ];

  const arquitetonico = new projeto('Estrutural', areaConsruir, areaTerreno);
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.valoresInsert(16, 10);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
