export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  category: 'welcome' | 'remarks' | 'dining' | 'awards' | 'party';
  description: string;
  location: string;
  highlight?: string;
}

export interface RsvpSubmission {
  name: string;
  email: string;
  department: string;
  attendance: 'attending' | 'regret';
  dietary: string;
  plusOne: boolean;
  plusOneName?: string;
  favoriteSong?: string;
  submittedAt: string;
}
