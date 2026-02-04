
import React from 'react';
import { TechItem } from '../types';
import { motion } from 'framer-motion';

interface TechTableProps {
  items: TechItem[];
}

const TechTable: React.FC<TechTableProps> = ({ items }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gray-900/40 backdrop-blur-xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
      <table className="w-full text-left border-collapse relative z-10">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 font-mono">Componente</th>
            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 font-mono">Protocolo</th>
            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 font-mono text-right">Integridad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <motion.tr 
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group hover:bg-green-500/5 transition-colors border-b border-white/5 last:border-0"
            >
              <td className="px-8 py-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xs font-bold font-mono border border-white/10 group-hover:border-green-500/50 group-hover:text-green-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-heading font-black text-white tracking-tight text-lg group-hover:text-green-400 transition-colors uppercase italic">{item.name}</span>
                </div>
              </td>
              <td className="px-8 py-6 font-mono text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                [SYSTEM::{item.category.toUpperCase()}]
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-[10px] text-green-500/80">{item.level}% READY</span>
                  <div className="w-32 bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.2, ease: "circOut", delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
                    />
                  </div>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechTable;
