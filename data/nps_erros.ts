export interface NpsErrorRecord {
    dataHora: string;
    mensagem: string;
    sucesso: boolean;
}

export const mockNpsErrors: NpsErrorRecord[] = [
    {
    dataHora: '2025-07-20T08:30:00Z',
    mensagem: 'Falha na conexão com o servidor de email.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-20T09:15:00Z',
    mensagem: 'Email enviado com sucesso para cliente 101.',
    sucesso: true,
  },
  {
    dataHora: '2025-07-21T14:05:00Z',
    mensagem: 'Formato de email do cliente inválido: teste@exemplo',
    sucesso: false,
  },
  {
    dataHora: '2025-07-22T11:40:00Z',
    mensagem: 'Email enviado com sucesso para cliente 102.',
    sucesso: true,
  },
  {
    dataHora: '2025-07-23T16:55:00Z',
    mensagem: 'Email do cliente não encontrado.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-24T09:00:00Z',
    mensagem: 'Taxa de envio excedida.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-25T13:10:00Z',
    mensagem: 'Serviço de envio indisponível.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-26T10:20:00Z',
    mensagem: 'Email enviado com sucesso para cliente 103.',
    sucesso: true,
  },
  {
    dataHora: '2025-07-27T08:00:00Z',
    mensagem: 'Falha na conexão com o servidor de email.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-28T17:30:00Z',
    mensagem: 'Email enviado com sucesso para cliente 104.',
    sucesso: true,
  },
  {
    dataHora: '2025-07-29T11:00:00Z',
    mensagem: 'Email do cliente não encontrado.',
    sucesso: false,
  },
  {
    dataHora: '2025-07-30T15:45:00Z',
    mensagem: 'Email enviado com sucesso para cliente 105.',
    sucesso: true,
  },
  {
    dataHora: '2025-07-31T12:00:00Z',
    mensagem: 'Formato de email do cliente inválido: cliente.com',
    sucesso: false,
  },
  {
    dataHora: '2025-08-01T10:00:00Z',
    mensagem: 'Email enviado com sucesso para cliente 106.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-02T09:25:00Z',
    mensagem: 'Taxa de envio excedida.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-03T18:00:00Z',
    mensagem: 'Email enviado com sucesso para cliente 107.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-04T14:30:00Z',
    mensagem: 'Serviço de envio indisponível.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-05T08:45:00Z',
    mensagem: 'Falha na conexão com o servidor de email.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-06T11:15:00Z',
    mensagem: 'Email enviado com sucesso para cliente 108.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-07T16:00:00Z',
    mensagem: 'Email do cliente não encontrado.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-08T10:30:00Z',
    mensagem: 'Email enviado com sucesso para cliente 109.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-09T13:50:00Z',
    mensagem: 'Formato de email do cliente inválido: usuario@',
    sucesso: false,
  },
  {
    dataHora: '2025-08-10T09:05:00Z',
    mensagem: 'Email enviado com sucesso para cliente 110.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-11T12:00:00Z',
    mensagem: 'Falha na conexão com o servidor de email.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-12T15:20:00Z',
    mensagem: 'Email enviado com sucesso para cliente 111.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-13T17:40:00Z',
    mensagem: 'Taxa de envio excedida.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-14T11:00:00Z',
    mensagem: 'Email enviado com sucesso para cliente 112.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-15T10:50:00Z',
    mensagem: 'Serviço de envio indisponível.',
    sucesso: false,
  },
  {
    dataHora: '2025-08-16T14:15:00Z',
    mensagem: 'Email enviado com sucesso para cliente 113.',
    sucesso: true,
  },
  {
    dataHora: '2025-08-17T09:30:00Z',
    mensagem: 'Email do cliente não encontrado.',
    sucesso: false,
  }
]