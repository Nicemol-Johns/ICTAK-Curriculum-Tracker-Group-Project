export interface AdminMessage {
    sender: string; // This can be 'admin', or any user ID
    content: string;
    recipient:string,
    timestamp: Date;
  }