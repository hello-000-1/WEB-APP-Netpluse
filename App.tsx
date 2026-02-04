
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  MessageCircle, 
  Terminal, 
  Shield, 
  Zap, 
  Download,
  Sparkles,
  Music,
  Video,
  FileSearch,
  Sticker,
  Facebook,
  Send,
  X,
  Bot,
  ExternalLink,
  ChevronRight,
  Cpu,
  Layers,
  Activity,
  Box,
  Globe,
  Radio,
  Share2,
  Command,
  Code,
  Instagram,
  Youtube,
  Circle,
  Skull,
  Lock,
  Search,
  LayoutGrid
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { 
  TECH_STACK, 
  WHATSAPP_NUMBER, 
  GITHUB_URL, 
  TIKTOK_URL, 
  FACEBOOK_URL, 
  INSTAGRAM_URL,
  YOUTUBE_URL,
  CENTRAL_IMAGE_URL 
} from './constants';
import { Message } from './types';
import TechTable from './components/TechTable';

const CommandReference = () => {
  const commands = [
    { cmd: ".menu", icon: <LayoutGrid size={20}/>, desc: "Despliega la lista completa de todos los comandos disponibles en el núcleo.", color: "#00ff88" },
    { cmd: ".ia (texto)", icon: <Bot size={20}/>, desc: "Inicia una consulta neuronal avanzada utilizando inteligencia artificial de vanguardia.", color: "#0096ff" },
    { cmd: ".tt (url)", icon: <Music size={20}/>, desc: "Extracción y descarga de videos de TikTok en alta definición y sin marcas de agua.", color: "#ff0050" },
    { cmd: ".ytmp3 (url)", icon: <Music size={20}/>, desc: "Convierte y descarga videos de YouTube directamente a formato de audio profesional.", color: "#ff0000" },
    { cmd: ".ytmp4 (url)", icon: <Video size={20}/>, desc: "Descarga videos de YouTube en resolución nativa optimizada para dispositivos móviles.", color: "#ff0000" },
    { cmd: ".fb (url)", icon: <Facebook size={20}/>, desc: "Procesamiento y descarga de contenido multimedia desde la plataforma Facebook.", color: "#1877f2" },
    { cmd: ".instagram (url)", icon: <Instagram size={20}/>, desc: "Captura y descarga de Reels, fotos y videos de Instagram en máxima calidad.", color: "#e4405f" },
    { cmd: ".pinters (query)", icon: <Search size={20}/>, desc: "Motor de búsqueda de imágenes en Pinterest con indexación visual profunda.", color: "#bd081c" },
    { cmd: ".code", icon: <Lock size={20}/>, desc: "Activa el modo de uso privado para encriptar tus interacciones con el bot.", color: "#7928ca" },
    { cmd: ".kill (tag)", icon: <Skull size={20}/>, desc: "Protocolo de administración: elimina usuarios específicos de grupos gestionados.", color: "#ff4b2b" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="max-w-2xl">
          <span className="text-[#00ff88] font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">Manual de Operaciones</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Protocolos <span className="italic text-gray-500">de Comando</span></h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs font-light leading-relaxed mb-2">
          Sintaxis optimizada para una ejecución instantánea desde cualquier interfaz de chat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commands.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-[2rem] glass-card border-white/5 overflow-hidden transition-all duration-500"
          >
            {/* Hover Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${c.color}, transparent)` }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl transition-all duration-500"
                  style={{ backgroundColor: `${c.color}20`, border: `1px solid ${c.color}40` }}
                >
                  {c.icon}
                </div>
                <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">Protocol::{c.cmd.split(' ')[0].replace('.', '')}</div>
              </div>

              <div className="mb-4">
                <span 
                  className="text-2xl font-mono font-bold tracking-tight"
                  style={{ color: c.color }}
                >
                  {c.cmd}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {c.desc}
              </p>
            </div>

            {/* Accent Line */}
            <div 
              className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
              style={{ backgroundColor: c.color }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TerminalSimulation = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
  const installSequence = [
    { text: "user@ianetpluse:~$ git clone " + GITHUB_URL, delay: 1000 },
    { text: "Cloning into 'IANetPluse'...", delay: 500 },
    { text: "remote: Enumerating objects: 100% (402/402), done.", delay: 800 },
    { text: "remote: Total 402 (delta 254), reused 390 (delta 248)", delay: 400 },
    { text: "Receiving objects: 100% (402/402), 15.2 MiB | 4.2 MiB/s, done.", delay: 1200 },
    { text: "Resolving deltas: 100% (254/254), done.", delay: 600 },
    { text: "user@ianetpluse:~$ cd IANetPluse", delay: 1000 },
    { text: "user@ianetpluse:~/IANetPluse$ npm install", delay: 1000 },
    { text: "added 142 packages, and audited 143 packages in 3s", delay: 1500 },
    { text: "user@ianetpluse:~/IANetPluse$ npm start", delay: 1000 },
    { text: "> ianetpluse@4.0.2 start", delay: 300 },
    { text: "> node index.js", delay: 300 },
    { text: "[SYSTEM] Initializing Neural Engine...", delay: 800 },
    { text: "[SYSTEM] Loading AI Models (Gemini-3-Flash)...", delay: 1000 },
    { text: "[SYSTEM] Handshake with WhatsApp Web established.", delay: 1200 },
    { text: "[SUCCESS] IANetPluse is now LIVE and SYNCED.", delay: 500 },
  ];

  useEffect(() => {
    let current = 0;
    const runSequence = async () => {
      for (let step of installSequence) {
        await new Promise(r => setTimeout(r, step.delay));
        setLines(prev => [...prev, step.text]);
        current++;
      }
      setIsComplete(true);
    };
    runSequence();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20">
      <div className="flex items-center gap-4 mb-10 justify-center">
        <div className="h-px w-12 bg-[#00ff88]/20" />
        <h3 className="font-mono text-[10px] text-[#00ff88] uppercase tracking-[0.4em]">Deployment Simulation</h3>
        <div className="h-px w-12 bg-[#00ff88]/20" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border border-white/10 bg-[#05070a]/80 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-gray-500" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">zsh — ianetpluse_install</span>
          </div>
          <div className="w-12" />
        </div>

        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm h-[450px] overflow-y-auto custom-scrollbar bg-black/40">
          <div className="space-y-1.5">
            {lines.map((line, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                key={i} 
                className={
                  line.startsWith('[SYSTEM]') ? 'text-[#0096ff]' :
                  line.startsWith('[SUCCESS]') ? 'text-[#00ff88] font-bold' :
                  line.includes('$') || line.includes('~') ? 'text-white' : 'text-gray-500'
                }
              >
                <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
                {line}
              </motion.div>
            ))}
            {!isComplete && (
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-[#00ff88] align-middle ml-1"
              />
            )}
          </div>
        </div>
        
        {/* Terminal Footer Status */}
        <div className="px-8 py-3 bg-white/2 border-t border-white/5 flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-gray-600">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Cpu size={10}/> CPU: 12.4%</span>
            <span className="flex items-center gap-2"><Layers size={10}/> MEM: 256MB</span>
          </div>
          <div className="text-[#00ff88]/60">
            {isComplete ? "STATUS: SYSTEM_READY" : "STATUS: DOWNLOADING_RESOURCES..."}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LoadingScreen = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(p => (p < 100 ? p + 1 : 100));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#02040a] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />
      
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00ff88] to-[#0096ff] p-[1px] shadow-[0_0_30px_rgba(0,255,136,0.2)]">
            <div className="w-full h-full bg-[#02040a] rounded-[15px] flex items-center justify-center">
              <Terminal className="text-[#00ff88]" size={32} />
            </div>
          </div>
        </motion.div>

        <div className="w-full space-y-4">
          <div className="flex justify-between items-end">
            <span className="font-mono text-[10px] text-[#00ff88] tracking-widest uppercase opacity-70">Sincronizando Nucleo...</span>
            <span className="font-mono text-xs text-white">{percent}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full bg-gradient-to-r from-transparent via-[#00ff88] to-transparent progress-glow"
            />
          </div>
        </div>

        <div className="mt-8 overflow-hidden h-4">
          <motion.p 
            animate={{ y: [0, -20, -40, -60, -80] }}
            transition={{ duration: 3, repeat: Infinity, ease: "steps(4)" }}
            className="font-mono text-[9px] text-gray-600 uppercase text-center"
          >
            BOOTING_ENV<br/>
            LOADING_AI_MODELS<br/>
            ESTABLISHING_WS<br/>
            READY_FOR_DEPLOY<br/>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const NeuralOrb = () => {
  return (
    <div className="relative group perspective-1000">
      {/* Background Aura */}
      <div className="absolute inset-[-100px] bg-[#00ff88]/10 blur-[120px] rounded-full animate-pulse-soft pointer-events-none" />
      
      {/* Rotating Geometry */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-40px] border border-white/5 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] border border-[#00ff88]/10 rounded-full"
      />

      {/* Main Core */}
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
        className="relative w-72 h-72 md:w-96 md:h-96 p-2 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl overflow-hidden cursor-crosshair transition-all duration-500"
      >
        <div className="absolute inset-0 bg-[#02040a] rounded-[2.8rem] overflow-hidden">
          <motion.img 
            src={CENTRAL_IMAGE_URL} 
            alt="IA Core"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover opacity-60 mix-blend-screen saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent" />
          
          {/* Scanline Effect */}
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-[#00ff88]/40 shadow-[0_0_15px_#00ff88] z-10"
          />
        </div>

        {/* HUD Elements */}
        <div className="absolute top-8 left-8 p-3 rounded-xl glass-card border border-white/5">
          <div className="flex items-center gap-3">
            <Activity size={14} className="text-[#00ff88] animate-pulse" />
            <span className="font-mono text-[9px] text-white tracking-widest">LIVE_CORE</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 p-3 rounded-xl glass-card border border-white/5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-[#00ff88] tracking-widest">SECURE_AUTH</span>
            <Shield size={14} className="text-[#00ff88]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Bienvenido al ecosistema IANetPluse. Todos los sistemas están nominales. ¿En qué puedo asistirte?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setChatInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `Eres IANetPluse AI, una inteligencia de vanguardia integrada en un bot de WhatsApp.
          Tu personalidad: Analítica, eficiente, minimalista y ligeramente futurista.
          Funciones clave: Descargas HD (TikTok, YT, IG), creación de stickers pro, gestión de grupos y búsqueda con IA.`,
        },
      });

      const botText = response.text || 'Error de procesamiento de datos.';
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Error: Link neuronal interrumpido.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#00ff88]/30 overflow-x-hidden bg-[#02040a]">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Navigation - Dynamic Floating Island */}
      <nav className="fixed top-8 left-0 right-0 z-[60] px-6">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 3.5, type: 'spring', damping: 20 }}
          className={`max-w-5xl mx-auto flex justify-between items-center px-8 py-3 rounded-full border transition-all duration-500 ${scrolled ? 'glass-card border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'bg-transparent border-transparent'}`}
        >
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-9 h-9 bg-gradient-to-tr from-[#00ff88] to-[#0096ff] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
              <Terminal className="text-black" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter text-white uppercase italic leading-none">IANet<span className="text-[#00ff88]">Pluse</span></span>
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">v4.0.2 Stable</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#servicios">Sistemas</NavLink>
            <NavLink href="#stack">Kernel</NavLink>
            <NavLink href="#deploy">Deploy</NavLink>
            <NavLink href="#protocolos">Protocolos</NavLink>
            <NavLink href="#footer">Nexus</NavLink>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="hidden sm:flex items-center gap-2 bg-[#00ff88] text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
          >
            Launch WA <ChevronRight size={14} />
          </motion.a>
        </motion.div>
      </nav>

      {/* Hero Section - Cinematic Layout */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Dynamic Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#00ff88]/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-[#0096ff]/10 blur-[100px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-center z-10 w-full flex flex-col items-center"
        >
          <div className="mb-16">
            <NeuralOrb />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="flex items-center gap-4 px-4 py-2 rounded-full glass-card border-white/5 mb-10"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
            </span>
            <span className="font-mono text-[9px] text-[#00ff88] uppercase tracking-[0.3em]">Neural Link: Stable</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-8 italic">
            DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-white to-[#0096ff]">REVOLUTION</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light mb-12 leading-relaxed tracking-tight">
            La integración perfecta entre el usuario y la inteligencia automatizada. <br/>
            Transformamos cada interacción en una experiencia superior.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <HeroButton primary href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              Probar Bot <Zap size={18} className="fill-current" />
            </HeroButton>
            <HeroButton href={GITHUB_URL}>
              Documentación <Code size={18} />
            </HeroButton>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section - Bento Grid Style */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-[#00ff88] font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">Arquitectura de Servicios</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Capacidades <span className="italic text-gray-500">Multitasking</span></h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs font-light leading-relaxed mb-2">
            Optimizado para rendimiento, velocidad y una experiencia de usuario sin fricciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Main Service Card */}
          <div className="md:col-span-6 lg:col-span-8 group">
            <ServiceCard 
              featured
              icon={<Download size={32}/>} 
              title="Descarga Multimedia Ultra-HD" 
              desc="Extracción nativa de contenido en 4K/60fps de TikTok, Instagram Reels, YouTube y más. Procesamiento en la nube de alta velocidad sin marcas de agua ni pérdida de calidad." 
            />
          </div>
          
          <div className="md:col-span-3 lg:col-span-4">
            <ServiceCard 
              icon={<Sticker size={28}/>} 
              title="IA Stickers Engine" 
              desc="Conversión inteligente de imágenes y videos cortos a stickers dinámicos con recorte automático." 
            />
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <ServiceCard 
              icon={<Music size={28}/>} 
              title="Sonic Flux" 
              desc="Motor de búsqueda y descarga de audio con indexación de metadatos completa." 
            />
          </div>

          <div className="md:col-span-6 lg:col-span-8">
            <ServiceCard 
              icon={<FileSearch size={28}/>} 
              title="Asistente Cognitivo Gemini" 
              desc="Búsqueda profunda y razonamiento avanzado integrado directamente en tu chat de WhatsApp. Obtén respuestas, resúmenes y código en segundos." 
            />
          </div>
        </div>
      </section>

      {/* Tech Section - Professional Dashboard Look */}
      <section id="stack" className="py-32 px-6 bg-[#04060e]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tight shrink-0 px-6">Core Stack</h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <TechTable items={TECH_STACK} />
        </div>
      </section>

      {/* Terminal Simulation Section */}
      <section id="deploy" className="py-20">
        <TerminalSimulation />
      </section>

      {/* Command Protocols Section */}
      <section id="protocolos">
        <CommandReference />
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-12">
            ÚNETE AL <br/> <span className="text-[#00ff88]">FUTURO</span>
          </h2>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-3xl font-black text-2xl uppercase italic tracking-tight shadow-2xl hover:bg-[#00ff88] transition-colors"
          >
            Vincular Dispositivo <MessageCircle size={24} />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-16 max-w-md">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00ff88] rounded-xl flex items-center justify-center">
                  <Terminal className="text-black" size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white uppercase italic">IANet<span className="text-[#00ff88]">Pluse</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Redefiniendo los límites de la automatización móvil. Tecnología diseñada para la eficiencia absoluta.
              </p>
            </div>

            {/* Group 1: Social Media platforms - Clean List without wrappers */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h4 className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em] shrink-0">Social Networks</h4>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <SocialBtn 
                  href={TIKTOK_URL} 
                  icon={<Music size={20}/>} 
                  hoverColor="#ff0050" 
                  label="TikTok"
                />
                <SocialBtn 
                  href={FACEBOOK_URL} 
                  icon={<Facebook size={20}/>} 
                  hoverColor="#1877f2" 
                  label="Facebook"
                />
                <SocialBtn 
                  href={INSTAGRAM_URL} 
                  icon={<Instagram size={20}/>} 
                  hoverColor="#e4405f" 
                  label="Instagram"
                />
                <SocialBtn 
                  href={YOUTUBE_URL} 
                  icon={<Youtube size={20}/>} 
                  hoverColor="#ff0000" 
                  label="YouTube"
                />
              </div>
            </div>

            {/* Group 2: Professional / Direct Links - Clean List */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h4 className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em] shrink-0">Dev / Direct Link</h4>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <SocialBtn 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  icon={<MessageCircle size={20}/>} 
                  hoverColor="#25d366" 
                  label="WhatsApp"
                />
                <SocialBtn 
                  href={GITHUB_URL} 
                  icon={<Github size={20}/>} 
                  hoverColor="#ffffff" 
                  label="GitHub"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
            <FooterList title="Navegación">
              <FooterItem href="#servicios">Servicios</FooterItem>
              <FooterItem href="#stack">Kernel</FooterItem>
              <FooterItem href="#deploy">Deploy Live</FooterItem>
              <FooterItem href="#protocolos">Protocolos</FooterItem>
              <FooterItem href={GITHUB_URL}>Open Source</FooterItem>
            </FooterList>
            <FooterList title="Canales">
              <FooterItem href={TIKTOK_URL}>TikTok Feed</FooterItem>
              <FooterItem href={FACEBOOK_URL}>Facebook Page</FooterItem>
              <FooterItem href={INSTAGRAM_URL}>Instagram Pro</FooterItem>
              <FooterItem href={YOUTUBE_URL}>YouTube Channel</FooterItem>
            </FooterList>
            <FooterList title="Soporte">
              <FooterItem href={`https://wa.me/${WHATSAPP_NUMBER}`}>Terminal WA</FooterItem>
              <FooterItem href={TIKTOK_URL}>Tutoriales</FooterItem>
              <FooterItem href={FACEBOOK_URL}>Comunidad</FooterItem>
            </FooterList>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-20 border-t border-white/5 mt-20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[9px] font-mono uppercase tracking-[0.4em]">
            &copy; 2025 // Neural Node Systems // All Rights Reserved
          </div>
          <div className="flex items-center gap-3 text-[9px] font-mono font-bold text-gray-500 uppercase">
            Powered by <Zap size={12} className="text-[#00ff88] fill-[#00ff88]" /> for the digital era
          </div>
        </div>
      </footer>

      {/* AI Bot Interface - Floating Action */}
      <div className="fixed bottom-10 right-10 z-[70]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
              className="absolute bottom-24 right-0 w-[420px] max-w-[90vw] h-[650px] glass-card rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border-white/10"
            >
              <div className="p-8 flex justify-between items-center border-b border-white/5 bg-white/2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center border border-[#00ff88]/20">
                    <Bot size={24} className="text-[#00ff88]" />
                  </div>
                  <div>
                    <span className="text-white font-bold uppercase tracking-widest block text-sm">Neural Asistente</span>
                    <span className="text-[9px] text-[#00ff88] font-mono uppercase tracking-[0.3em]">Online / Encrypted</span>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="bg-white/5 p-2.5 rounded-2xl hover:bg-white/10 transition-colors">
                  <X size={20} className="text-white/60" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {messages.map((msg, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-medium leading-relaxed ${msg.role === 'user' ? 'bg-[#00ff88] text-black shadow-[0_10px_20px_rgba(0,255,136,0.15)]' : 'bg-white/5 text-gray-200 border border-white/5'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/5 p-4 rounded-3xl flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              
              <div className="p-8 border-t border-white/5">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Terminal de consulta..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#00ff88] transition-all text-white placeholder:text-gray-600 font-medium"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="absolute right-3 bg-[#00ff88] text-black p-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-20 h-20 bg-[#00ff88] rounded-[2rem] flex items-center justify-center text-black shadow-[0_20px_60px_rgba(0,255,136,0.3)] border-2 border-white/10"
        >
          {isChatOpen ? <X size={32} /> : <Bot size={32} />}
        </motion.button>
      </div>
    </div>
  );
};

// UI Parts
const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors font-mono relative group">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#00ff88] rounded-full transition-all duration-300 group-hover:w-4" />
  </a>
);

const HeroButton: React.FC<{ children: React.ReactNode, primary?: boolean, href: string }> = ({ children, primary, href }) => (
  <motion.a 
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    className={`flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-base uppercase italic tracking-tighter transition-all shadow-xl ${primary ? 'bg-white text-black hover:bg-[#00ff88]' : 'bg-white/5 text-white border border-white/10 backdrop-blur-xl hover:bg-white/10'}`}
  >
    {children}
  </motion.a>
);

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, featured?: boolean }> = ({ icon, title, desc, featured }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className={`relative h-full p-10 rounded-[2.5rem] glass-card border-white/5 transition-all duration-500 overflow-hidden group ${featured ? 'bg-gradient-to-br from-white/5 to-transparent' : ''}`}
  >
    {featured && (
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00ff88]/5 blur-[80px] rounded-full group-hover:bg-[#00ff88]/10 transition-all duration-700" />
    )}
    
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#00ff88] mb-10 group-hover:scale-110 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-500">
      {icon}
    </div>
    
    <h3 className={`${featured ? 'text-3xl' : 'text-xl'} font-black text-white uppercase italic mb-6 tracking-tighter group-hover:text-[#00ff88] transition-colors`}>
      {title}
    </h3>
    
    <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
      {desc}
    </p>
  </motion.div>
);

const SocialBtn: React.FC<{ href: string, icon: React.ReactNode, hoverColor: string, label: string }> = ({ href, icon, hoverColor, label }) => (
  <motion.a 
    whileHover={{ x: 10 }}
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ "--hover-color": hoverColor } as any}
    className="flex items-center gap-4 group/btn py-2 transition-all cursor-pointer"
  >
    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover/btn:text-white transition-all duration-300 group-hover/btn:bg-[var(--hover-color)] group-hover/btn:shadow-[0_0_20px_var(--hover-color)] group-hover/btn:border-transparent">
       <div className="group-hover/btn:scale-110 transition-transform duration-300">
        {icon}
       </div>
    </div>
    <span className="text-gray-500 font-mono text-[11px] uppercase tracking-widest group-hover/btn:text-white transition-colors">
      {label}
    </span>
  </motion.a>
);

const FooterList: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-8">{title}</h4>
    <ul className="space-y-4">
      {children}
    </ul>
  </div>
);

const FooterItem: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-500 hover:text-[#00ff88] text-xs font-medium tracking-tight transition-colors flex items-center gap-2 group">
      <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      {children}
    </a>
  </li>
);

export default App;
