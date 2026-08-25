import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Lock, 
  Unlock, 
  LogOut, 
  Inbox, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  Search, 
  Filter, 
  Trash2, 
  Download, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const AdminPage: React.FC = () => {
  const { 
    isAdminLoggedIn, 
    loginAdmin, 
    logoutAdmin, 
    leads, 
    consultations, 
    messages,
    updateLeadStatus,
    updateConsultationStatus,
    deleteLead,
    deleteConsultation,
    deleteMessage
  } = useData();

  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'consultations' | 'messages'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPasscode('');
    }
  };

  // Export dataset as JSON file
  const exportAllData = () => {
    const exportObject = {
      leads,
      consultations,
      messages,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(exportObject, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pixelrise-leads-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered lists
  const filteredLeads = leads.filter((item) => {
    const matchesSearch = 
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredConsultations = consultations.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredMessages = messages.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // If not logged in, render authentication gate
  if (!isAdminLoggedIn) {
    return (
      <div className="pt-28 pb-20 bg-slate-950 min-h-screen flex items-center justify-center px-4">
        <Card variant="elevated" className="w-full max-w-md p-8 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white font-display">Pixelrise Admin Portal</h1>
            <p className="text-xs text-slate-400 mt-1">
              Enter administrative passcode to manage inquiries & leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (default: pixelrise2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Incorrect passcode. Use: <strong>pixelrise2026</strong></span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              icon={<Unlock className="w-4 h-4" />}
            >
              Access Dashboard
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="emerald" dot size="sm">Admin Session Active</Badge>
              <span className="text-xs text-slate-400">Pixelrise Media Management</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
              Inbound Growth Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={exportAllData}
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Export JSON
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={logoutAdmin}
              icon={<LogOut className="w-3.5 h-3.5" />}
            >
              Log Out
            </Button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium">Quote Inquiries</span>
              <div className="text-2xl font-bold text-cyan-400 font-display mt-0.5">{leads.length}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium">Consultation Bookings</span>
              <div className="text-2xl font-bold text-amber-400 font-display mt-0.5">{consultations.length}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium">Direct Messages</span>
              <div className="text-2xl font-bold text-emerald-400 font-display mt-0.5">{messages.length}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tabs & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'leads' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Quote Requests ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('consultations')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'consultations' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Consultations ({consultations.length})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'messages' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact Messages ({messages.length})
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

        </div>

        {/* Tab 1: Quote Requests Table / Cards */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                No quote requests found matching criteria.
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <Card key={lead.id} variant="default" className="p-6 bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white font-display">{lead.fullName}</h3>
                        <span className="text-xs text-slate-400 font-medium">({lead.businessName})</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold uppercase">
                          {lead.serviceRequired}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-4">
                        <span>Email: <strong className="text-slate-200">{lead.email}</strong></span>
                        <span>Phone: <strong className="text-slate-200">{lead.phone}</strong></span>
                        {lead.website && <span>Website: <a href={lead.website} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{lead.website}</a></span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="new">Status: New</option>
                        <option value="contacted">Status: Contacted</option>
                        <option value="proposal_sent">Status: Proposal Sent</option>
                        <option value="closed">Status: Closed</option>
                      </select>

                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-2 rounded-lg bg-slate-950 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors cursor-pointer"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="md:col-span-2">
                      <span className="text-slate-400 font-semibold block mb-1">Project Details:</span>
                      <p className="text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                        {lead.projectDetails}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-slate-400 block font-semibold">Budget Range:</span>
                        <span className="text-amber-400 font-bold">{lead.budgetRange}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-semibold">Preferred Channel:</span>
                        <span className="text-slate-200">{lead.preferredContactMethod}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px]">Submitted: {new Date(lead.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Consultation Bookings */}
        {activeTab === 'consultations' && (
          <div className="space-y-4">
            {filteredConsultations.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                No consultation bookings found matching criteria.
              </div>
            ) : (
              filteredConsultations.map((item) => (
                <Card key={item.id} variant="default" className="p-6 bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white font-display">{item.name}</h3>
                        <span className="text-xs text-slate-400">({item.businessName})</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/30 font-semibold uppercase">
                          {item.serviceRequired}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-4">
                        <span>Email: <strong className="text-slate-200">{item.email}</strong></span>
                        <span>Phone: <strong className="text-slate-200">{item.phone}</strong></span>
                        <span>Scheduled For: <strong className="text-amber-400">{item.preferredDate} ({item.preferredTime})</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={item.status}
                        onChange={(e) => updateConsultationStatus(item.id, e.target.value as any)}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="pending">Status: Pending</option>
                        <option value="confirmed">Status: Confirmed</option>
                        <option value="completed">Status: Completed</option>
                        <option value="cancelled">Status: Cancelled</option>
                      </select>

                      <button
                        onClick={() => deleteConsultation(item.id)}
                        className="p-2 rounded-lg bg-slate-950 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors cursor-pointer"
                        title="Delete booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {item.notes && (
                    <div className="mt-3 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <span className="text-slate-400 font-semibold">Client Agenda / Notes:</span> {item.notes}
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Contact Messages */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            {filteredMessages.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                No direct messages found.
              </div>
            ) : (
              filteredMessages.map((msg) => (
                <Card key={msg.id} variant="default" className="p-6 bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-sm font-bold text-white">{msg.name}</h3>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {msg.email} {msg.phone && `• ${msg.phone}`}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="p-2 rounded-lg bg-slate-950 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors cursor-pointer"
                      title="Delete message"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-3 text-xs text-slate-300">
                    <div className="font-semibold text-cyan-400 mb-1">Subject: {msg.subject}</div>
                    <p className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed text-slate-200">
                      {msg.message}
                    </p>
                    <div className="text-[10px] text-slate-500 mt-2">
                      Received: {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
