'use client'

import React, { useState } from 'react';
import { NpsRecord } from '@/data/nps_data';

interface FilterControlsProps {
    onFilter: (filterdData: NpsRecord[]) => void;
    data: NpsRecord[];
}

export function FilterControls({ onFilter, data }: FilterControlsProps) {
    const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
    const [selectedMotives, setSelectedMotives] = useState<string[]>([]);

    const handleNoteChange = (note: number) => {
        const newSelectedNotes = selectedNotes.includes(note)
        ? selectedNotes.filter(n => n !== note)
        : [...selectedNotes, note];
        setSelectedNotes(newSelectedNotes);
        applyFilters(newSelectedNotes, selectedMotives);
    };

    const handeMotivoChange = (motivo: string) => {
        const newSelectedMotives = selectedMotives.includes(motivo)
        ? selectedMotives.filter(m => m !== motivo)
        : [...selectedMotives, motivo];
        setSelectedMotives(newSelectedMotives);
        applyFilters(selectedNotes, selectedMotives);
    };

    const applyFilters = (notes: number[], motives: string[]) => {
        let filteredData = data;

        if (notes.length > 0) {
            filteredData = filteredData.filter(record => notes.includes(record.nota));
        }

        if (motives.length > 0) {
            filteredData = filteredData.filter(record => motives.includes(record.motivo));
        }

        onFilter(filteredData);
    };

    const noteOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Filtros</h2>

            <div className="mb-4">
                <h3 className="text-md font-semibold mb2">Nota</h3>
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
        </div>
    )
}