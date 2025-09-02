import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Misioneros - Llamados a Servir
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¡Bienvenido a la aplicación de misioneros!
              </h2>
              <p className="text-gray-600">
                Esta aplicación está siendo configurada. Pronto tendrás acceso a todas las herramientas y recursos necesarios.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
