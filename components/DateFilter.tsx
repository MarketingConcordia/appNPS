'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function DateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [startDate, setStartDate] = useState(searchParams.get('startDate') || '');
  const [endDate, setEndDate] = useState(searchParams.get('endDate') || '');

  const handleApplyFilter = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (startDate) {
      params.set('startDate', startDate);
    } else {
      params.delete('startDate');
    }
    if (endDate) {
      params.set('endDate', endDate);
    } else {
      params.delete('endDate');
    }
    router.push(`?${params.toString()}`);
  }, [startDate, endDate, router, searchParams]);

  useEffect(() => {
    setStartDate(searchParams.get('startDate') || '');
    setEndDate(searchParams.get('endDate') || '');
  }, [searchParams]);

  return (
    <div className="bg-white rounded-xl p-4 mb-10 flex flex-col sm:flex-row items-center justify-start gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="startDate" className="text-gray-700 font-medium">De:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-1 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="endDate" className="text-gray-700 font-medium">Até:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-1 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleApplyFilter}
        className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
      >
        Aplicar
      </button>
    </div>
  );
}