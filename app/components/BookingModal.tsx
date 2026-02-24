'use client';

import { useState } from 'react';
import { CloseIcon, CalendarIcon, SendIcon } from './Icons';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string; email: string; date: string; message: string }) => void;
}

export default function BookingModal({ isOpen, onClose, onSubmit }: BookingModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200));
        onSubmit({ name, email, date, message });
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setDate('');
        setMessage('');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <CloseIcon size={20} />
                </button>
                <div className="modal-header">
                    <div className="modal-icon">
                        <CalendarIcon size={24} />
                    </div>
                    <h2>Book a Visit</h2>
                    <p>Schedule a property viewing with one of our expert agents.</p>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="booking-name">Full Name</label>
                        <input
                            id="booking-name"
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="booking-email">Email Address</label>
                        <input
                            id="booking-email"
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="booking-date">Preferred Date</label>
                        <input
                            id="booking-date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="booking-message">Message (Optional)</label>
                        <textarea
                            id="booking-message"
                            placeholder="Any specific requirements..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                        />
                    </div>
                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="btn-loading">
                                <span className="spinner" />
                                Scheduling...
                            </span>
                        ) : (
                            <span className="btn-submit-content">
                                <SendIcon size={16} />
                                Schedule Visit
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
