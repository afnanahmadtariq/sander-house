'use client';

import { useState, useEffect } from 'react';
import { CheckIcon, CloseIcon } from './Icons';

interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => onClose(), 4000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast toast-${type} ${isVisible ? 'toast-show' : ''}`}>
            <div className="toast-icon">
                {type === 'success' && <CheckIcon size={16} />}
                {type === 'error' && <CloseIcon size={16} />}
            </div>
            <span className="toast-message">{message}</span>
            <button className="toast-close" onClick={onClose}>
                <CloseIcon size={14} />
            </button>
        </div>
    );
}
