import React from 'react'
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from 'react-router-dom';
import AuthImagePattern from '../components/AuthImagePattern';
import toast from 'react-hot-toast';
import Logo from '../img/logo.png';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("É necessário o nome completo");
    if (!formData.email.trim()) return toast.error("É necessário o e-mail");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Formato de e-mail inválido");
    if (!formData.password) return toast.error("A senha é necessária");
    if (formData.password.length < 6) return toast.error("A senha deve possuir no mínimo 6 dígitos");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const success = validateForm();

    if(success === true) signUp(formData);
  };

  return <div className='min-h-screen grid lg:grid-cols-2'>
    {/* left side */}
    <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
      <div className='w-full max-w-md space-y-8'>
        {/* logo */}
        <div className='text-center mb-8'>
          <div className='flex flex-col items-center gap-2 group'>
            <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
              <img src= {Logo} alt="logo-hermes" className='' />
              {/* <MessageSquare className="size-6 text-primary" /> */}
            </div>
            <h1 className='text-2xl font-bold mt-2'>Criar uma nova conta</h1>
            <p className='text-base-content/60'>É rápido e fácil</p>
          </div>
        </div>
        {/* name */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Nome Completo</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <User className='size-5 text-base-content/40' />
              </div>
              <input
                type='text'
                className={`input input-bordered w-full pl-10`}
                placeholder='Ex.: João Silva'
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          </div>
          {/* email */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>E-mail</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Mail className='size-5 text-base-content/40' />
              </div>
              <input
                type='email'
                className={`input input-bordered w-full pl-10`}
                placeholder='seunome@exemplo.com'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          {/* password */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Senha</span>
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Lock className='size-5 text-base-content/40' />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`input input-bordered w-full pl-10`}
                placeholder='••••••••'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className='size-5 text-base-content/40' />
                ) : (
                  <Eye className='size-5 text-base-content/40' />
                )}
              </button>
            </div>
          </div>
          <button type='submit' className='btn btn-primary w-full' disabled={isSigningUp}>
            {isSigningUp ? (
              <>
                <Loader2 className='size-5 animate-spin' />
                Loading...
              </>
            ) : (
              'Cadastre-se'
            )}
          </button>
        </form>
        <div className="text-center">
          <p className="text-base-content/60">
            Já tem uma conta?{" "}
            <Link to="/login" className="link link-primary">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
    {/* right side */}
    <AuthImagePattern
      title="Junte-se a nossa comunidade"
      subtitle="Conecte-se com amigos e compartilhe momentos"
    />


  </div>;
};



export default SignUpPage;