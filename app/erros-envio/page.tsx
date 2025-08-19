import { mockNpsErrors, NpsErrorRecord } from "@/data/nps_erros";

const getFailedSubmissions = async (): Promise<NpsErrorRecord[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockNpsErrors.filter(record => record.sucesso === false);
};

export default async function ErrosEnvioPage() {
    const errors = await getFailedSubmissions();

    return (
        <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Erros de Envio do NPS
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
        {errors.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data e Hora
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mensagem de Erro
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {errors.map((error, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(error.dataHora).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {error.mensagem}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p>Nenhum erro de envio encontrado.</p>
          </div>
        )}
      </div>
    </div>
    );
}