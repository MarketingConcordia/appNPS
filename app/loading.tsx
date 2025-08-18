import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg">Carregando o Dashboard...</p>
            </div>
        </div>
    )
}