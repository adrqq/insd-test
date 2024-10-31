'use client';

import { useState } from 'react';
import { Type } from '../Header/Header';
import SignModal from '@/modals/SignModal';

export default function AuthClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeType, setActiveType] = useState<Type | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const button = (e.target as HTMLElement).closest('button');
    if (!button) return;

    const type = button.getAttribute('data-auth-type') as Type;
    if (type) {
      setActiveType(type);
      setIsModalOpen(true);
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
      <SignModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setActiveType(null);
        }}
        type={activeType}
        onTypeChange={setActiveType}
      />
    </div>
  );
}
