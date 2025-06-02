import React from 'react';

export default function BDDPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      {/* Navbar fixa */}
      <div className="w-full bg-[#2a2a2c] p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
        <img src="/logo2.png" alt="EducaTech Logo" className="h-10" />

        <div className="flex-1 flex justify-center gap-4">
          <button onClick={() => window.location.href = '/home'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Home</button>
          <button onClick={() => window.location.href = '/tutoriais'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Tutoriais</button>
          <button onClick={() => window.location.href = '/forumpage'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Fórum</button>
          <button onClick={() => window.location.href = '/desafios'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Desafios</button>
        </div>
      </div>

      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Explorando o BDD (Behavior-Driven Development)</h1>

        <p className="text-gray-300 mb-6">
          O <strong>BDD</strong> é uma metodologia ágil de desenvolvimento que visa aproximar as pessoas técnicas e não técnicas na criação de software. A ideia principal é descrever os comportamentos esperados do sistema usando uma linguagem comum a todos — clara e compreensível.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Como utilizamos o BDD no EducaTech</h2>
        <p className="text-gray-300 mb-6">
          Durante o desenvolvimento do EducaTech, utilizamos a metodologia BDD para definir funcionalidades a partir da perspectiva do usuário. A cada Sprint, escrevemos cenários no formato <code className="bg-[#2a2a2c] px-2 py-1 rounded">Gherkin</code> para guiar o desenvolvimento e os testes.
        </p>

        <div className="bg-[#2a2a2c] p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-2">Exemplo de cenário BDD:</h3>
          <pre className="bg-black text-green-400 p-4 rounded font-mono whitespace-pre-wrap">
Funcionalidade: Acesso ao fórum

  Cenário: Usuário autenticado acessa o fórum com sucesso
    Dado que o usuário esteja logado na plataforma
    Quando ele clicar no menu "Fórum"
    Então ele deverá visualizar os tópicos disponíveis
          </pre>
        </div>

        <p className="text-gray-300 mb-6">
          Essa prática nos ajudou a manter o foco no valor que cada funcionalidade entregaria, além de facilitar a comunicação entre os membros da equipe. O BDD foi essencial para garantir que todos estivessem alinhados sobre o que precisava ser desenvolvido.
        </p>

        <div className="bg-[#3a3a3c] p-4 rounded">
          <h3 className="text-lg font-bold mb-2">💡 Dica</h3>
          <p className="text-gray-200">Tente escrever você mesmo um cenário BDD para a funcionalidade de cadastro!</p>
        </div>
      </div>
    </div>
  );
}
