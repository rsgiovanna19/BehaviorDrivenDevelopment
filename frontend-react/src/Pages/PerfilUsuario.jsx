import React, { useState, useEffect } from 'react'
import ErrorMessage from '../Components/ErrorMessage';
import Message from '../Components/Message';
import { useError } from '../Context/ErrorContext';
import { useMessage } from '../Context/MessageContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function PerfilUsuario() {
  const userId = localStorage.getItem("user");
  const navigate = useNavigate();
  const { showError, errorMsg, clearError } = useError();
  const { showMessage, message, clearMessage } = useMessage();
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);
  const [formData, setFormData] = useState([
    {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    }
  ]);

  useEffect(() => {

    if (!userId) {
      showError("Usuário não autenticado.");
      navigate("/login");
    }

    const buscarDadosUsuario = async () => {

      try {
        const response = await axios.get(`http://localhost:5294/api/buscar-usuario/${userId}`)
        const dados = response.data;

        setFormData({...formData, nome: dados.nome,
                                  email: dados.email
      });

      } catch(e) {
        showError("Erro ao buscar dados do usuario: " + (e.response?.data || e.message));
      }
    };

      buscarDadosUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email) {
      showError("Nome e email são obrigatórios.");
      return;
    }

    if (formData.senha && formData.senha !== formData.confirmarSenha) {
      showError("As senhas não coincidem.");
      return;
    }

    try {
      const res = await axios.put(`http://localhost:5294/api/atualizar-usuario/${userId}`, formData);
      showMessage(res.data);
      setFormData({...formData, senha: "", confirmarSenha: ""});
      
    } catch(error) {
      showError("Erro ao alterar os dados do usuario: " + (error.response?.data || error.message));
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-10">
        {errorMsg && (
        <ErrorMessage msg={errorMsg} onClose={clearError} />
        )}
        {message && (
          <Message msg={message} onClose={clearMessage} />
        )}
        
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-xl w-full max-w-xl">
        <h1 className="text-5xl font-bold mb-6 text-center pt-16 text-red-500">Meu Perfil</h1>

        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          className="w-full border rounded px-4 py-2 mb-4"
          type="text"
          value={formData.nome}
          onChange={e => setFormData({...formData, nome: e.target.value})}
        />

        <label className="block text-sm font-medium mb-1">E-mail</label>
        <input
          className="w-full border rounded px-4 py-2 mb-4"
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />

        <label className="block text-sm font-medium mb-1">Nova senha</label>
        <div className="relative mb-4">
          <input
            className="w-full border rounded px-4 py-2"
            type={verSenha ? "text" : "password"}
            value={formData.senha}
            onChange={e => setFormData({...formData, senha: e.target.value})}
          />
          <button type="button" onClick={() => setVerSenha(!verSenha)} className="absolute right-2 top-2 text-sm">
            {verSenha ? "👁️" : "🙈"}
          </button>
        </div>

        <label className="block text-sm font-medium mb-1">Confirmar nova senha</label>
        <div className="relative mb-6">
          <input
            className="w-full border rounded px-4 py-2"
            type={verConfirmar ? "text" : "password"}
            value={formData.confirmarSenha}
            onChange={e => setFormData({...formData, confirmarSenha: e.target.value})}
          />
          <button type="button" onClick={() => setVerConfirmar(!verConfirmar)} className="absolute right-2 top-2 text-sm">
            {verConfirmar ? "👁️" : "🙈"}
          </button>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Salvar alterações
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-100"
          >
            Sair
          </button>
        </div>
      </form>
    </div>
  );
}

export default PerfilUsuario;
