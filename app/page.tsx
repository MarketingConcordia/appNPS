import { NpsScoreChart } from '@/components/NpsScoreChart';
import { mockEngagementData, mockNpsData, NpsRecord } from '@/data/nps_data';

// Funções de cálculo do NPS
const getDashboardData = async (): Promise<NpsRecord[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockNpsData;
};

const calculateNpsScore = (data: NpsRecord[]): number => {
  if (data.length === 0) return 0;

  const promoters = data.filter(record => record.nota >= 9).length;
  const detractors = data.filter(record => record.nota <= 6).length;

  const promotersPercentage = (promoters / data.length) * 100;
  const detractorsPercentage = (detractors / data.length) * 100;

  return Math.round(promotersPercentage - detractorsPercentage);
};

const getCategoryCounts = (data: NpsRecord[]) => {
  const promoters = data.filter(record => record.nota >= 9).length;
  const passives = data.filter(record => record.nota >= 7 && record.nota <= 8).length;
  const detractors = data.filter(record => record.nota <= 6).length;

  return { promoters, passives, detractors };
};

const getNoteDistribution = (data: NpsRecord[]) => {
  const distribution: { [key: number]: number } = {};
  for (let i = 0; i <= 10; i++) {
    distribution[i] = 0;
  }
  data.forEach(record => {
    if (record.nota >= 0 && record.nota <= 10) {
      distribution[record.nota]++;
    }
  });
  return distribution;
};

// Componente principal do Dashboard
export default async function DashboardPage() {
  const data = await getDashboardData();

  const npsScore = calculateNpsScore(data);
  const categoryCounts = getCategoryCounts(data);
  const noteDistribution = getNoteDistribution(data);
  const totalResponses = data.length;
  const responseRate = (mockEngagementData.respondida / mockEngagementData.qtdEnvio) * 100;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Dashboard de Satisfação do Cliente
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

      {/* Card do NPS Score */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold mb-2">NPS</h2>
          <span className="text-6xl font-bold"
            style={{ color: npsScore >= 50 ? 'green' : npsScore >= 0 ? '#ffbf00' : 'red' }}>
            {npsScore}
          </span>
          <p className="text-sm font-light text-gray-400 mt-2">
            ({((categoryCounts.promoters / totalResponses) * 100).toFixed(1)}% - {((categoryCounts.detractors / totalResponses) * 100).toFixed(1)}%)
          </p>
          <p className="text-gray-500 mt-2">
            {npsScore >= 50 ? 'Excelente' : npsScore >= 0 ? 'Bom' : 'Atenção'}
          </p>
        </div>

        {/* Card de Taxa de Resposta */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold mb-2">Taxa de Resposta</h2>
          <p className="text-5xl font-bold text-blue-600">{responseRate.toFixed(1)}%</p>
          <p className="text-gray-500 mt-2">
            {mockEngagementData.respondida} de {mockEngagementData.qtdEnvio} enviados
          </p>
        </div>
        
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Card de Promotores */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-green-600">Promotores</h3>
          <p className="text-4xl font-semibold mt-2">{categoryCounts.promoters}</p>
          <p className="text-sm text-gray-500 mt-1">({((categoryCounts.promoters / totalResponses) * 100).toFixed(1)}%)</p>
          <p className="text-sm text-gray-400 mt-2">Clientes leais</p>
        </div>

        {/* Card de Passivos */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-yellow-500">Passivos</h3>
          <p className="text-4xl font-semibold mt-2">{categoryCounts.passives}</p>
          <p className="text-sm text-gray-500 mt-1">({((categoryCounts.passives / totalResponses) * 100).toFixed(1)}%)</p>
          <p className="text-sm text-gray-400 mt-2">Clientes neutros ou indecisos</p>
        </div>

        {/* Card de Detratores */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-red-600">Detratores</h3>
          <p className="text-4xl font-semibold mt-2">{categoryCounts.detractors}</p>
          <p className="text-sm text-gray-500 mt-1">({((categoryCounts.detractors / totalResponses) * 100).toFixed(1)}%)</p>
          <p className="text-sm text-gray-400 mt-2">Clientes insatisfeitos e em risco</p>
        </div>
      </div>

      {/* Gráfico de Distribuição de Notas e Taxa de Resposta */}
      <div className="flex justify-center">
        {/* Gráfico de Distribuição de Notas */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl w-full mb-10">
          <h2 className="text-xl font-bold mb-4">Distribuição de Notas</h2>
          <NpsScoreChart distribution={noteDistribution} />
        </div>
      </div>
    </div>
  );
}