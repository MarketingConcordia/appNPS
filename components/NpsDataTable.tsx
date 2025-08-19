'use client';

import { useState, useMemo } from 'react';
import { NpsRecord } from '@/data/nps_data';

interface NpsDataTableProps {
  data: NpsRecord[];
}

export function NpsDataTable({ data }: NpsDataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof NpsRecord; direction: 'asc' | 'desc' | null }>({
    key: 'dataResposta',
    direction: 'desc',
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return data;
    }
    return data.filter(record => 
      Object.values(record).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    const sortableItems = [...filteredData];
    if (!sortConfig.key) {
      return sortableItems;
    }

    sortableItems.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return 1;
      if (bValue === null) return -1;
      
      const aCastedValue = (sortConfig.key === 'dataResposta') ? new Date(aValue as Date).getTime() : aValue;
      const bCastedValue = (sortConfig.key === 'dataResposta') ? new Date(bValue as Date).getTime() : bValue;
      
      if (aCastedValue < bCastedValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aCastedValue > bCastedValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortableItems;
  }, [filteredData, sortConfig]);

  const handleSort = (key: keyof NpsRecord) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof NpsRecord) => {
    if (sortConfig.key !== key) {
      return null;
    }
    if (sortConfig.direction === 'asc') {
      return <span className="ml-2">↑</span>;
    }
    return <span className="ml-2">↓</span>;
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Detalhes das Respostas</h2>
      
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />
      
      {sortedData.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('idCliente')}
              >
                ID do Cliente{getSortIcon('idCliente')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('razao')}
              >
                Nome do Cliente{getSortIcon('razao')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('email')}
              >
                Email do Cliente{getSortIcon('email')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('nota')}
              >
                Nota{getSortIcon('nota')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('recomenda')}
              >
                Recomenda{getSortIcon('recomenda')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('motivo')}
              >
                Motivo{getSortIcon('motivo')}
              </th>
              <th
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('tipo')}
              >
                Setor{getSortIcon('tipo')}
              </th>
              <th
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('qtdEnvio')}
              >
                Quantidade de envios{getSortIcon('qtdEnvio')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('ultimoEnvio')}
              >
                Data Ultimo Envio{getSortIcon('ultimoEnvio')}
              </th>
              <th 
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => handleSort('dataResposta')}
              >
                Data Resposta{getSortIcon('dataResposta')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((record) => (
              <tr key={record.idCliente}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {record.idCliente}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {record.razao}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {record.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${record.nota >= 9 ? 'bg-green-100 text-green-800' :
                        record.nota >= 7 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                  >
                    {record.nota}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${record.recomenda >= 9 ? 'bg-green-100 text-green-800' :
                        record.recomenda >= 7 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                  >
                    {record.recomenda}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {record.motivo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.tipo === 'c' ? 'Corporativo' : record.tipo === 'r' ? 'Revenda' : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.qtdEnvio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.ultimoEnvio ? new Date(record.ultimoEnvio).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.dataResposta ? new Date(record.dataResposta).toLocaleDateString() : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <p>Nenhuma resposta encontrada.</p>
        </div>
      )}
    </div>
  );
}