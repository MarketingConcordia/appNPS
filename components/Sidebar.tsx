import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside
  className={`sticky top-0 h-screen bg-gray-800 text-white p-4 flex flex-col transition-all duration-300 ease-in-out
    ${isOpen ? 'w-64' : 'w-20'}
  `}
>
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onToggle}
          className="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors duration-200"
        >
          {/* Ícone de fechar/abrir */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            >
              {/* Ícone para o Dashboard */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/respostas"
              className="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            >
              {/* Ícone para Respostas */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                Detalhes das Respostas
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/erros-envio"
              className="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                Erros de Envio
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}