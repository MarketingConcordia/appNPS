'use client';

import React, { useState } from 'react';
import { NpsRecord } from '@/data/nps_data';

interface FilterControlsProps {
  onFilter: (filteredData: NpsRecord[]) => void;
  data: NpsRecord[];
}

export function FilterControls({ onFilter, data }: FilterControlsProps) {
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  
  const handleNoteChange = (note: number) => {
    const newSelectedNotes = selectedNotes.includes(note)
      ? selectedNotes.filter(n => n !== note)
      : [...selectedNotes, note];
    setSelectedNotes(newSelectedNotes);
    applyFilters(newSelectedNotes, selectedType);
  };
  
  const handleTypeChange = (type: string) => {
    const newSelectedType = selectedType === type ? '' : type;
    setSelectedType(newSelectedType);
    applyFilters(selectedNotes, newSelectedType);
  };

  const applyFilters = (notes: number[], type: string) => {
    let filteredData = data;
    
    // Filtrar por nota
    if (notes.length > 0) {
      filteredData = filteredData.filter(record => notes.includes(record.nota));
    }
    
    // Filtrar por tipo
    if (type) {
      filteredData = filteredData.filter(record => record.tipo === type);
    }
    
    onFilter(filteredData);
  };
  
  const noteOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Filtros</h2>
      
      {/* Filtro por Nota */}
      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Nota:</h3>
        <div className="flex flex-wrap gap-2">
          {noteOptions.map(note => (
            <button
              key={note}
              onClick={() => handleNoteChange(note)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
                ${selectedNotes.includes(note)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {note}
            </button>
          ))}
        </div>
      </div>
      
      {/* Filtro por Tipo */}
      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Setor:</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTypeChange('c')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
              ${selectedType === 'c'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Corporativo
          </button>
          <button
            onClick={() => handleTypeChange('r')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
              ${selectedType === 'r'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Revenda
          </button>
        </div>
      </div>
    </div>
  );
}