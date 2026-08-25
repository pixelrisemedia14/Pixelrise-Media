import React, { createContext, useContext, useState, useEffect } from 'react';
import { LeadSubmission, ConsultationRequest, ContactMessage } from '../types';

interface ToastInfo {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

interface DataContextType {
  leads: LeadSubmission[];
  consultations: ConsultationRequest[];
  messages: ContactMessage[];
  addLead: (lead: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (id: string, status: LeadSubmission['status'], adminNotes?: string) => void;
  deleteLead: (id: string) => void;
  addConsultation: (req: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>) => void;
  updateConsultationStatus: (id: string, status: ConsultationRequest['status'], adminNotes?: string) => void;
  deleteConsultation: (id: string) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  toasts: ToastInfo[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-1',
    name: 'Rohit Deshmukh',
    businessName: 'Deshmukh Solar Energies',
    email: 'rohit@deshmukhsolar.in',
    phone: '+91 98230 11223',
    website: 'https://deshmukhsolar.in',
    service: 'Google Ads & Website Creation',
    budget: '₹25,000–₹50,000',
    message: 'Looking to launch Google Ads for commercial rooftop solar installations in Maharashtra. We need a clean landing page and targeted search campaigns.',
    preferredContact: 'phone',
    status: 'new',
    createdAt: '2026-08-22T10:15:00Z',
    adminNotes: 'High intent B2B client. Prepared customized proposal for solar search terms.'
  },
  {
    id: 'lead-2',
    name: 'Ananya Singhania',
    businessName: 'Veda Skin & Aesthetics Clinic',
    email: 'ananya@vedaclinics.com',
    phone: '+91 97110 55432',
    website: 'https://vedaskin.com',
    service: 'SEO & Video Shooting',
    budget: '₹50,000+',
    message: 'We are expanding to our second clinic location in Mumbai and want to dominate local map searches and create 20 short-form treatment spotlight videos.',
    preferredContact: 'whatsapp',
    status: 'proposal_sent',
    createdAt: '2026-08-20T14:30:00Z',
    adminNotes: 'Sent custom quote for local SEO package + 1-day video shoot session.'
  }
];

const INITIAL_CONSULTATIONS: ConsultationRequest[] = [
  {
    id: 'cons-1',
    name: 'Karan Mehra',
    businessName: 'Karan Mehra Couture',
    email: 'karan@mehrafashion.com',
    phone: '+91 98450 77890',
    service: 'Video Editing & Digital Marketing',
    preferredDate: '2026-08-28',
    preferredTime: '15:00',
    message: 'We want to discuss repurposing our runway footage and seasonal shoot videos into weekly Instagram Reels and scaling paid social advertising.',
    status: 'confirmed',
    createdAt: '2026-08-23T09:00:00Z',
    adminNotes: 'Meeting link sent via Google Meet. Topic: Short-form fashion video retention.'
  }
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    const saved = localStorage.getItem('pixelrise_leads');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_LEADS;
  });

  const [consultations, setConsultations] = useState<ConsultationRequest[]>(() => {
    const saved = localStorage.getItem('pixelrise_consultations');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_CONSULTATIONS;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('pixelrise_messages');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('pixelrise_admin_auth') === 'true';
  });

  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  useEffect(() => {
    localStorage.setItem('pixelrise_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('pixelrise_consultations', JSON.stringify(consultations));
  }, [consultations]);

  useEffect(() => {
    localStorage.setItem('pixelrise_messages', JSON.stringify(messages));
  }, [messages]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 7);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addLead = (leadData: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>) => {
    const newLead: LeadSubmission = {
      ...leadData,
      id: 'lead-' + Date.now(),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    setLeads(prev => [newLead, ...prev]);
    showToast(
      'Enquiry Received!',
      'Thanks! Your enquiry has been received. We will review your requirements and get back to you promptly.'
    );
  };

  const updateLeadStatus = (id: string, status: LeadSubmission['status'], adminNotes?: string) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id === id) {
        return {
          ...lead,
          status,
          ...(adminNotes !== undefined ? { adminNotes } : {})
        };
      }
      return lead;
    }));
    showToast('Lead Updated', 'Lead status has been updated in your dashboard.', 'info');
  };

  const deleteLead = (id: string) => {
    setLeads(prev => prev.filter(lead => lead.id !== id));
    showToast('Lead Deleted', 'The lead entry has been removed.', 'info');
  };

  const addConsultation = (reqData: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>) => {
    const newReq: ConsultationRequest = {
      ...reqData,
      id: 'cons-' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setConsultations(prev => [newReq, ...prev]);
    showToast(
      'Consultation Requested!',
      `Thank you, ${reqData.name}! Your consultation request for ${reqData.preferredDate} has been scheduled for review.`
    );
  };

  const updateConsultationStatus = (id: string, status: ConsultationRequest['status'], adminNotes?: string) => {
    setConsultations(prev => prev.map(req => {
      if (req.id === id) {
        return {
          ...req,
          status,
          ...(adminNotes !== undefined ? { adminNotes } : {})
        };
      }
      return req;
    }));
    showToast('Consultation Updated', 'Consultation status updated.', 'info');
  };

  const deleteConsultation = (id: string) => {
    setConsultations(prev => prev.filter(req => req.id !== id));
    showToast('Consultation Deleted', 'Consultation record deleted.', 'info');
  };

  const addContactMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: 'msg-' + Date.now(),
      status: 'unread',
      createdAt: new Date().toISOString()
    };
    setMessages(prev => [newMsg, ...prev]);
    showToast('Message Sent', 'Thank you for reaching out! Our team will get back to you shortly.');
  };

  const loginAdmin = (passcode: string): boolean => {
    // Standard secure passcode for agency admin demonstration
    if (passcode.trim().toLowerCase() === 'pixelrise2026' || passcode.trim().toLowerCase() === 'admin') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('pixelrise_admin_auth', 'true');
      showToast('Admin Authenticated', 'Welcome back to the Pixelrise Media management dashboard.');
      return true;
    }
    showToast('Invalid Passcode', 'Please check the admin passcode (hint: pixelrise2026).', 'error');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('pixelrise_admin_auth');
    showToast('Logged Out', 'You have been logged out of the admin panel.', 'info');
  };

  return (
    <DataContext.Provider
      value={{
        leads,
        consultations,
        messages,
        addLead,
        updateLeadStatus,
        deleteLead,
        addConsultation,
        updateConsultationStatus,
        deleteConsultation,
        addContactMessage,
        toasts,
        showToast,
        removeToast,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
