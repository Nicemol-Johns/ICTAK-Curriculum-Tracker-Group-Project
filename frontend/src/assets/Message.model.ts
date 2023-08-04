export interface Message {
    sender: string; // This can be 'faculty', 'admin', or any user ID
    content: string;
    timestamp: Date;
  }