import React, { useState } from 'react';

export default function DesafiosPage() {
  const [desafioSelecionado, setDesafioSelecionado] = useState(null);
  const [codigo, setCodigo] = useState('');
  const [saida, setSaida] = useState('');
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [filtro, setFiltro] = useState('');

  const desafios = [
    {
      titulo: 'Desafio 1: Adição de item ao carrinho',
      descricao: 'Crie um cenário BDD onde o usuário adiciona um item ao carrinho de compras.',
      placeholder: '# Escreva seu cenário aqui...\n# Dica: use Given, When, Then',
      resposta: 'Funcionalidade: Carrinho de Compras\n\n  Cenário: Adição bem-sucedida de item\n    Dado que o usuário esteja na página do produto\n    Quando ele clicar no botão "Adicionar ao carrinho"\n    Então o item deve aparecer no carrinho com a quantidade correta'
    },
    {
      titulo: 'Desafio 2: Falha ao enviar formulário incompleto',
      descricao: 'Crie um cenário onde o sistema bloqueia o envio de um formulário incompleto.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Envio de Formulário\n\n  Cenário: Campos obrigatórios não preenchidos\n    Dado que o usuário esteja na página de cadastro\n    Quando ele tentar enviar o formulário sem preencher os campos obrigatórios\n    Então o sistema deve exibir mensagens de erro em cada campo obrigatório'
    },
    {
      titulo: 'Desafio 3: Navegação para página de perfil',
      descricao: 'Descreva um cenário onde o usuário acessa seu perfil.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Perfil do Usuário\n\n  Cenário: Acesso ao perfil\n    Dado que o usuário esteja logado\n    Quando clicar no ícone de usuário no menu\n    Então ele deve ser redirecionado para a página de perfil'
    },
    {
      titulo: 'Desafio 4: Filtro de resultados',
      descricao: 'Escreva um cenário em que o usuário filtra uma lista de itens.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Filtro de Itens\n\n  Cenário: Filtrar itens por categoria\n    Dado que o usuário esteja na página de produtos\n    Quando selecionar a categoria "Eletrônicos"\n    Então apenas os produtos eletrônicos devem ser exibidos'
    },
    {
      titulo: 'Desafio 5: Redefinição de senha',
      descricao: 'Crie um cenário onde o usuário redefine sua senha com sucesso.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Redefinição de Senha\n\n  Cenário: Link de redefinição válido\n    Dado que o usuário tenha solicitado redefinição de senha\n    Quando ele acessar o link enviado por e-mail\n    Então ele deve poder cadastrar uma nova senha com sucesso'
    },
    {
      titulo: 'Desafio 6: Visualização de histórico de pedidos',
      descricao: 'Escreva um cenário onde o usuário acessa seu histórico de pedidos.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Histórico de Pedidos\n\n  Cenário: Visualização após login\n    Dado que o usuário esteja logado\n    Quando ele acessar a área "Meus Pedidos"\n    Então deve visualizar a lista dos pedidos anteriores com detalhes'
    },
    {
      titulo: 'Desafio 7: Comentário em um post do fórum',
      descricao: 'Descreva o cenário de um usuário comentando em um post do fórum.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Fórum\n\n  Cenário: Comentar em post existente\n    Dado que o usuário esteja logado e na página do post\n    Quando ele escrever um comentário e clicar em "Publicar"\n    Então o comentário deve aparecer logo abaixo do post'
    },
    {
      titulo: 'Desafio 8: Pagamento com cartão de crédito',
      descricao: 'Crie um cenário onde o usuário realiza um pagamento com cartão com sucesso.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Pagamento\n\n  Cenário: Cartão válido\n    Dado que o usuário esteja no checkout\n    Quando preencher os dados de cartão válidos e confirmar\n    Então o pagamento deve ser processado com sucesso e o recibo exibido'
    },
    {
      titulo: 'Desafio 9: Erro em login com campo vazio',
      descricao: 'Crie um cenário onde o usuário tenta logar sem preencher os campos.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Login\n\n  Cenário: Campos vazios\n    Dado que o usuário esteja na página de login\n    Quando clicar em "Entrar" sem preencher usuário ou senha\n    Então o sistema deve alertar que todos os campos são obrigatórios'
    },
    {
      titulo: 'Desafio 10: Pesquisa por palavra-chave',
      descricao: 'Descreva o cenário de pesquisa por uma palavra-chave válida.',
      placeholder: '# Escreva seu cenário aqui...',
      resposta: 'Funcionalidade: Pesquisa\n\n  Cenário: Termo existente\n    Dado que o usuário esteja na página inicial\n    Quando digitar "JavaScript" na barra de busca\n    Então ele deve ver uma lista de conteúdos relacionados ao termo'
    }
  ];

  const executarCodigo = () => {
    try {
      const consoleLog = [];
      const log = (val) => consoleLog.push(val);
      new Function('log', `${codigo}`)(log);
      const ultimaSaida = consoleLog.length ? consoleLog.at(-1) : '';
      setSaida(String(ultimaSaida));
    } catch (err) {
      setSaida('Erro: ' + err.message);
    }
  };

  const desafiosFiltrados = desafios.filter(d => d.titulo.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      {/* Navbar fixa */}
      <div className="w-full bg-[#2a2a2c] p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
        <img src="/logo2.png" alt="EducaTech Logo" className="h-10" />

        <div className="flex-1 flex justify-center gap-4">
          <button onClick={() => window.location.href = '/home'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Home</button>
          <button onClick={() => window.location.href = '/tutoriais'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Tutoriais</button>
          <button onClick={() => window.location.href = '/forumpage'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">Fórum</button>
          <button onClick={() => window.location.href = '/bdd'} className="text-white hover:bg-white hover:text-black px-4 py-2 rounded transition">BDD</button>
        </div>
      </div>

      <div className="p-8 max-w-4xl mx-auto">
        {!desafioSelecionado ? (
          <>
            <h1 className="text-3xl font-bold flex items-center gap-2 mb-1">
              Desafios de BDD
            </h1>
            <p className="text-gray-300 mb-4">Pratique a escrita de cenários BDD descrevendo comportamentos esperados do sistema.</p>
            <input
              type="text"
              placeholder="Pesquisar desafio..."
              className="w-full p-3 mb-6 rounded bg-white text-black outline-none"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
            <div className="bg-[#2a2a2c] p-4 rounded-xl shadow max-h-[480px] overflow-y-auto">
              <ul className="space-y-4">
                {desafiosFiltrados.map((desafio, index) => (
                  <li
                    key={index}
                    className="bg-[#3a3a3c] text-white rounded-xl p-5 shadow hover:shadow-lg transition cursor-pointer flex justify-between items-center"
                    onClick={() => {
                      setDesafioSelecionado(desafio);
                      setCodigo('');
                      setSaida('');
                      setMostrarResposta(false);
                    }}
                  >
                    <div>
                      <h2 className="text-lg font-bold mb-1">{desafio.titulo}</h2>
                      <p className="text-sm text-gray-300">{desafio.descricao}</p>
                    </div>
                    <span className="text-xl text-white">➤</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="bg-white text-black p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <button
                  onClick={() => setDesafioSelecionado(null)}
                  className="text-sm text-black flex items-center gap-1 group"
                >
                  <span className="text-lg">←</span>
                  <span className="group-hover:underline">Voltar</span>
                </button>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">{desafioSelecionado.titulo}</h2>
            <p className="text-gray-700 mb-4">{desafioSelecionado.descricao}</p>

            <textarea
              className="w-full h-40 p-3 text-sm border rounded mb-4 font-mono bg-gray-100 text-gray-800"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder={desafioSelecionado.placeholder}
            />

            <div className="flex gap-4">
              <button
                onClick={executarCodigo}
                className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
              >
                Simular Execução
              </button>

              <button
                onClick={() => setMostrarResposta(!mostrarResposta)}
                className="bg-gray-300 text-black px-6 py-2 rounded hover:opacity-90"
              >
                {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
              </button>
            </div>

            {mostrarResposta && (
              <div className="mt-4">
                <h3 className="font-semibold">Exemplo de Resposta:</h3>
                <pre className="bg-gray-100 text-black p-3 rounded mt-1 whitespace-pre-wrap">
                  {desafioSelecionado.resposta}
                </pre>
              </div>
            )}

            <div className="mt-4">
              <h3 className="font-semibold">(Simulado) Saída:</h3>
              <pre className="bg-gray-100 text-black p-3 rounded mt-1 whitespace-pre-wrap">
                {saida}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
