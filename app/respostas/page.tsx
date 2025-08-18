'use client';

import { useState, useEffect } from 'react';
import { NpsDataTable } from '@/components/NpsDataTable';
import { NpsRecord, mockNpsData } from '@/data/nps_data';
import { FilterControls } from '@/components/FilterControls';

// Função para buscar os dados
const getDashboardData = async (): Promise<NpsRecord[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockNpsData;
};

export default function RespostasPage() {
  const [data, setData] = useState<NpsRecord[]>([]);
  const [filteredData, setFilteredData] = useState<NpsRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getDashboardData();
      setData(allData);
      setFilteredData(allData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleFilter = (newFilteredData: NpsRecord[]) => {
    setFilteredData(newFilteredData);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg">Carregando dados...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Detalhes das Respostas
      </h1>
      <FilterControls onFilter={handleFilter} data={data} />
      <NpsDataTable data={filteredData} />
    </div>
  );
}